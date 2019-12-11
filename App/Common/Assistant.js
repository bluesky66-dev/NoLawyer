import base64 from 'react-native-base64'

const apikey = 'LWFPEr86oItDHGplKxFmRds1AepwtOnao01ghYbaiNde'
const url = 'https://gateway-lon.watsonplatform.net/assistant/api'
const version = '2019-02-28'

export default class Assistant {
  constructor(assistantId) {
    this.assistantId = assistantId
    this.createSession()
  }

  createSession() {
    fetch(url + '/v2/assistants/' + this.assistantId + '/sessions?version=' + version, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + base64.encode('apikey:' + apikey),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('this.assistantId == session', responseJson)
        this.sessionId = responseJson.session_id
      })
      .catch((error) => {
        console.error(error)
      })
  }

  message(msg, context, callBack) {

    let body = {
      input: {
        text: msg,
        options: { 'export': true, 'debug': true, 'return_context': true },
      },
    }
    if (context) {
      body.context = context
    }

    fetch(url + '/v2/assistants/' + this.assistantId + '/sessions/' + this.sessionId + '/message?version=' + version, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + base64.encode('apikey:' + apikey),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        callBack(responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

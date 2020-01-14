import base64 from 'react-native-base64'

const apikey = 'LWFPEr86oItDHGplKxFmRds1AepwtOnao01ghYbaiNde'
const url = 'https://gateway-lon.watsonplatform.net/assistant/api'
const version = '2019-02-28'

export default class Assistant {
  constructor(assistantId) {
    this.assistantId = assistantId;
    this.isFirstCall = true;
    this.createSession();
  }

  static init() {
    fetch('https://gateway-lon.watsonplatform.net?version=' + version, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + base64.encode('apikey:' + apikey),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('init response', responseJson)
      })
      .catch((error) => {
        console.error('init error: ', error)
      })
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
    } else {
      // const date = new Date();
      // date.setMonth(date.getMonth() + 1);
      // body.context = {
      //   skills: {
      //     'main skill': {
      //       user_defined: {
      //         acc_minamt: 50,
      //         acc_currbal: 430,
      //         acc_paydue: `${date.getFullYear()}-${date.getMonth() + 1}-26 12:00:00`,
      //         accnames: [5624, 5893, 9225],
      //       },
      //     },
      //   },
      // };
    }

    let thatThis = this;
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
        thatThis.isFirstCall = false;
        callBack(responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

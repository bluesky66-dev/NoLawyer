import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { EstonAssistant } from 'App/Common'
import Style from './SolveScreenStyle'
import { Header } from '@Components'
import { Fonts, Helpers } from 'App/Theme'

class SolveScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      messages: [],
      context: null,
    }
    const assistantId = props.navigation.getParam('assistantId', false);

    this.assistant = false;
    if (assistantId) {
      this.assistant = new EstonAssistant(assistantId);
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this._sendMessage();
    }, 2000)
  }

  renderMsgItem(item) {
    let generic = item.generic;
    let texts = generic.filter((item) => {
      return item.response_type === 'text'
    });
    let options = generic.filter((item) => {
      return item.response_type === 'option'
    });
    let textItems = texts.map((item) => {
      return  <Text
        key={Math.round(Math.random() * 1000000).toString()}
        style={[Fonts.PoppinsRegular, Style.msg, Style.msgBig, Style.shadow, Style.msgMargin]}>
          {item.text}
      </Text>
    });
    let optionItems = options.map((item) => {
      let itemOptions = item.options.map((option) => {
        return <TouchableOpacity
          key={Math.round(Math.random() * 1000000).toString()}
          style={[Style.action, Helpers.center, Style.actionMargin]}
          onPress={() => this._toAction(option.label, option.value.input.text)}
        >
          <Text style={[Fonts.PoppinsMedium, Style.actionText]}>{option.label}</Text>
        </TouchableOpacity>
      });
      return <View
        key={Math.round(Math.random() * 1000000).toString()}
        style={[Style.msgItem, Style.msgMargin]}>
        {itemOptions}
      </View>
    });

    return [
      <View
        key={Math.round(Math.random() * 1000000).toString()}
        style={[Style.msgItem, Style.msgMargin, Style.answerItem]}>
        {textItems}
      </View>,
      <View
        key={Math.round(Math.random() * 1000000).toString()}
        style={[Style.msgItem, Style.answerItem]}>
        {optionItems}
      </View>
    ]
  }

  _sendMessage() {
    if (this.state.msg) {
      this.setState({
        messages: [...this.state.messages, {content: this.state.msg, isUserMsg: true}],
      })
    }
    this.setState({msg: ''})
    this._send(this.state.msg.replace(/[\n\r]+/g, ' '));
  }

  _send(message) {
    setTimeout(() => {
      if ( this.assistant) {
        this.assistant.message(message, this.state.context, (res) => {
          this.setState({
            context: res.context,
            messages: [...this.state.messages, {content: res.output, isUserMsg: false}],
          })
        });
      }
    }, 500)
  }

  _toAction = (label, action) => {
    if (label) {
      this.setState({
        messages: [...this.state.messages, {content: label, isUserMsg: true}],
      })
    }
    this._send(action);
  }

  render() {
    let messages = this.state.messages.map((item) => {
      if (item.isUserMsg) return <View
        key={Math.round(Math.random() * 1000000).toString()}
        style={[Style.msgItem, Style.msgMargin, Style.questionItem]}>
        <Text
          key={Math.round(Math.random() * 1000000).toString()}
          style={[Fonts.PoppinsRegular, Style.msg, Style.msgBig, Style.shadow, Style.msgMargin, Style.questionTxt]}>
          {item.content}
        </Text>
      </View>
      return this.renderMsgItem(item.content)
    });
    console.log('messages', JSON.stringify(this.state.messages));
    return (
      <View
        style={[
          Helpers.fill,
        ]}
      >
        <Header SubPage />
        <ScrollView
          ref="scrollView"
          onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:height})}
          style={[Style.solve]}>
          <View style={Style.topSpace} />
          {messages}
          <View style={Style.bottomSpace} />
        </ScrollView>
        <View style={[Style.sendBox, Helpers.rowCross, Style.shadow]}>
          {/*<TouchableOpacity*/}
          {/*  style={[Style.emoji]}*/}
          {/*  onPress={() => this._toAction()}*/}
          {/*>*/}
          {/*  <Image style={Style.emojiIcon} source={emojiIcon} resizeMode={'contain'}/>*/}
          {/*</TouchableOpacity>*/}
          <TextInput
            style={[Fonts.PoppinsRegular, Style.msgInput]}
            placeholder={'Type your message'}
            keyboardType={'default'}
            multiline={true}
            numberOfLines={1}
            onChangeText={text => this.setState({msg: text})}
            value={this.state.msg}
          />
          <TouchableOpacity
            style={[Style.sendBtn, Helpers.center]}
            onPress={() => this._sendMessage()}
          >
            <Text style={[Fonts.PoppinsRegular, Style.sendBtnTxt]}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

SolveScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolveScreen)

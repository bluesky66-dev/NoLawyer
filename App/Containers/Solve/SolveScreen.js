import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './SolveScreenStyle'
import { Header } from '@Components'
import emojiIcon from '@Assets/Images/emolji_u234.png'
import { Fonts, Helpers } from 'App/Theme'

class SolveScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
        ]}
      >
        <Header SubPage />
        <ScrollView style={[Style.solve]}>
          <View style={Style.topSpace} />
          <View style={Style.msgItem}>
            <Text style={[Fonts.PoppinsRegular, Style.msg, Style.msgBig, Style.shadow]}>
              OK! Alison Johnson, let's talk about your <Text style={[Style.msgBold, Fonts.PoppinsBold]}>
              "Discrimination Claim"
            </Text>
            </Text>
          </View>
          <View style={[Style.msgItem, Style.msgMargin]}>
            <Text style={[Fonts.PoppinsRegular, Style.msg, Style.msgSmall, Style.shadow]}>
              What are your grounds of <Text style={[Style.msgBold, Fonts.PoppinsBold]}>
              Discrimination?
            </Text>
            </Text>
          </View>
          <View style={[Style.msgItem, Style.msgMargin]}>
            <TouchableOpacity
              style={[Style.action, Helpers.center]}
              onPress={() => this._toAction()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.actionText]}>Age</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.action, Helpers.center, Style.actionMargin]}
              onPress={() => this._toAction()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.actionText]}>Disability</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.action, Helpers.center, Style.actionMargin]}
              onPress={() => this._toAction()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.actionText]}>Gender</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.action, Helpers.center, Style.actionMargin]}
              onPress={() => this._toAction()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.actionText]}>Sexual Orientation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.action, Helpers.center, Style.actionMargin]}
              onPress={() => this._toAction()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.actionText]}>Religion or Philosophical Belief</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.action, Helpers.center, Style.actionMargin]}
              onPress={() => this._toAction()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.actionText]}>Marriage or Civil Partnership</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.action, Helpers.center, Style.actionMargin]}
              onPress={() => this._toAction()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.actionText]}>Preganacy or Maternity Leave</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.action, Helpers.center, Style.actionMargin]}
              onPress={() => this._toAction()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.actionText]}>Race (inc colour, nationality, ethnic or national origin)</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.bottomSpace} />
        </ScrollView>
        <View style={[Style.sendBox, Helpers.rowCross, Style.shadow]}>
          <TouchableOpacity
            style={[Style.emoji]}
            onPress={() => this._toAction()}
          >
            <Image style={Style.emojiIcon} source={emojiIcon} resizeMode={'contain'}/>
          </TouchableOpacity>
          <TextInput
            style={[Fonts.PoppinsRegular, Style.msgInput]}
            placeholder={'Type your message'}
            keyboardType={'default'}
            onChangeText={text => this.setState({msg: text})}
            value={this.state.msg}
          />
          <TouchableOpacity
            style={[Style.sendBtn, Helpers.center]}
            onPress={() => this._toAction()}
          >
            <Text style={[Fonts.PoppinsRegular, Style.sendBtnTxt]}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _toAction() {
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

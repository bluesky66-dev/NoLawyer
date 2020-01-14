import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class ResetPasswordScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      verifyCode: '',
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[Helpers.fillColCross, Style.authWrapper]}
      >
        <ScrollView
          style={[
            Helpers.fillColCross,
            Style.u35
          ]}
        >
          <View style={Style.u37}>
            <Text style={[Fonts.PoppinsBold, Style.u37Text]}>nolawyer</Text>
          </View>
          <View style={Style.u38}>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text]}>Forgot your password?</Text>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text, Style.u39Text]}>Enter the 6 digit code sent to your mobile number</Text>
          </View>
          <View style={Style.u41}>
            <TextInput
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              placeholder={'6 digit code'}
              keyboardType={'numeric'}
              onChangeText={text => this.setState({verifyCode: text})}
              value={this.state.verifyCode}
            />
          </View>
          <TouchableOpacity
            style={[Helpers.center, Style.u48]}
            onPress={() => this._toLogin()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>Reset Password</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={[Helpers.center, Style.u148]}>
          <Text style={[Fonts.PoppinsRegular, Style.u148Text]}>
            By signing up, you're agreeing to nolawyer terms and conditions
          </Text>
        </View>
      </View>
    )
  }

  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
}

ResetPasswordScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordScreen)

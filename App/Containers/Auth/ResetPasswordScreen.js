import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
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
            placeholder={'6_digit_codetxt'}
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
      </View>
    )
  }

  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
}

ResetPasswordScreen.propTypes = {
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
)(ResetPasswordScreen)

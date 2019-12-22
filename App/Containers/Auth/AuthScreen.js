import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import { liveInEurope } from 'App/Stores/User/Selectors'
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class AuthScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView>
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
            <Text style={[Fonts.PoppinsRegular, Style.u38Text]}>Welcome back to nolawyer</Text>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text, Style.u39Text]}>
              Create your nolawyer account here
            </Text>
          </View>
          <View style={Style.u41}>
            <TouchableOpacity
              style={[Helpers.center, Style.authButton, Style.authWithPhone]}
              onPress={() => this._toAuthPhone()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.darkText]}>
                Connect with Phone number
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Helpers.center, Style.authButton, Style.authWithFaceBook]}
              onPress={() => this._toHome()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.whiteText]}>
                Connect with Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Helpers.center, Style.authButton, Style.authWithGoogle]}
              onPress={() => this._toHome()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.whiteText]}>
                Connect with Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Helpers.center, Style.authButton, Style.authWithEmail]}
              onPress={() => this._toRegister()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.darkText]}>
                Sign Up with Email
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Helpers.colCross, Style.u43]}>
            <Text style={[Fonts.PoppinsRegular, Style.u43Text]}>Already have an Account?</Text>
            <TouchableOpacity
              style={[Helpers.center, Style.u45]}
              onPress={() => this._toLogin()}
            >
              <Text style={[Fonts.PoppinsBold, Style.u50Text]}>Login with Email</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[Helpers.center, Style.u148]}>
          <Text style={[Fonts.PoppinsRegular, Style.u148Text]}>
            By signing up, you're agreeing to nolawyer terms and conditions
          </Text>
        </View>
      </ScrollView>
    )
  }

  _toHome() {
    const {navigate} = this.props.navigation;
    navigate('MainScreen');
  }
  _toAuthPhone() {
    const {navigate} = this.props.navigation;
    navigate('AuthPhoneScreen');
  }
  _toRegister() {
    const {navigate} = this.props.navigation;
    navigate('RegisterScreen');
  }
  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('RegisterScreen');
  }
  _toForgetPassword() {
    const {navigate} = this.props.navigation;
    navigate('ForgetPasswordScreen');
  }
}

AuthScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  userIsLoading: state.user.userIsLoading,
  userErrorMessage: state.user.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(UserActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen)

import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import ToastActions from '../../Stores/Toast/Actions'
import UserActions from '../../Stores/User/Actions'

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

  async _authWithGoogle() {
    let { showLoading, showToast } = this.props;
    showLoading(true);
    try {
      await GoogleSignin.configure({
        scopes: [],
        webClientId: '583570693591-igsait5gpgaphjphb8g4p8s246ce4rpf.apps.googleusercontent.com', // required
      });
      const { accessToken, idToken } = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);
      await auth().signInWithCredential(credential);
      showLoading(false);
    } catch (e) {
      let errorMessage = e.message.replace(e.code, '').replace('[]', '');
      console.log('auth phone ==', errorMessage);
      showLoading(false);
      showToast(errorMessage)
    }
  }

  render() {
    return (
      <View
        style={[Helpers.fillColCross, Style.authWrapper]}
      >
        <ScrollView
          style={[
            Helpers.fill,
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
              onPress={() => this._authWithGoogle()}
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
        </ScrollView>
        <View style={[Helpers.center, Style.u148]}>
          <Text style={[Fonts.PoppinsRegular, Style.u148Text]}>
            By signing up, you're agreeing to nolawyer terms and conditions
          </Text>
        </View>
      </View>
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
    navigate('LoginScreen');
  }
}

AuthScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  showToast: (text) => dispatch(ToastActions.showToast(text)),
  showLoading: (isShow) => dispatch(UserActions.showLoading(isShow)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen)

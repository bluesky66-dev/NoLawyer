import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import UserActions from 'App/Stores/User/Actions'
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import ToastActions from '../../Stores/Toast/Actions'
import validator from 'validator'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
  }


  _onLogin() {
    const { email, password } = this.state;
    console.log('email, password ', email, password )
    const { showToast, loginWithEmail } = this.props;
    if (!validator.isEmail(email)) {
      showToast('Email address is missing');
      return false;
    }
    if (!validator.isLength(password, { min: 8 })) {
      showToast('Use 8 characters or more for your password');
      return false;
    }
    loginWithEmail(email, password);
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
            <Text style={[Fonts.PoppinsRegular, Style.u38Text, Style.u39Text]}>Log in to your account here</Text>
          </View>
          <View style={Style.u41}>
            <TextInput
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              placeholder={'Email address'}
              keyboardType={'email-address'}
              onChangeText={text => this.setState({email: text})}
              value={this.state.email}
            />
            <TextInput
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              placeholder={'Password'}
              keyboardType={'default'}
              secureTextEntry={true}
              onChangeText={text => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            style={[Helpers.center, Style.u48]}
            onPress={() => this._onLogin()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>Log In Securely</Text>
          </TouchableOpacity>
          <View style={[Helpers.rowCross, Style.u49]}>
            <Text style={[Fonts.PoppinsRegular, Style.u49Text]}>Don't have an account?</Text>
            <TouchableOpacity
              style={[Helpers.center, Style.u50]}
              onPress={() => this._toRegister()}
            >
              <Text style={[Fonts.PoppinsBold, Style.u50Text]}>Sign up now!</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.hr}/>
          <TouchableOpacity
            style={[Helpers.center, Style.u51]}
            onPress={() => this._toForgetPassword()}
          >
            <Text style={[Fonts.PoppinsRegular, Style.u51Text]}>Forgot password?</Text>
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

  _toRegister() {
    const {navigate} = this.props.navigation;
    navigate('RegisterScreen');
  }
  _toForgetPassword() {
    const {navigate} = this.props.navigation;
    navigate('ForgetPasswordScreen');
  }
}

LoginScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  loginWithEmail: (email, password) => dispatch(UserActions.loginWithEmail(email, password)),
  showToast: (text) => dispatch(ToastActions.showToast(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)

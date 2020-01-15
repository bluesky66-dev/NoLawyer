import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import auth from '@react-native-firebase/auth';
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import ToastActions from '../../Stores/Toast/Actions'
import UserActions from '../../Stores/User/Actions'
import validator from 'validator'

class ForgetPasswordScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      confirmCode: '',
      password: '',
      step: 1,
    }
  }

  componentDidMount() {
  }


  async _toResetPassword() {
    const { email, confirmCode, password, step } = this.state;
    const { showLoading, showToast } = this.props;
    const {navigate} = this.props.navigation;
    showLoading(true);
    if (step === 1) {
      if (!validator.isEmail(email)) {
        showToast('Invalid email');
        return false;
      }
      try {
        await auth().sendPasswordResetEmail(email);
        showLoading(false);
        showToast('Password reset email has been sent to your email address')
        navigate('LoginScreen');
        // this.setState({step: 2});
      } catch (e) {
        let errorMessage = e.message.replace(e.code, '').replace('[]', '');
        console.log('reset password 1 ==', errorMessage);
        showLoading(false);
        showToast(errorMessage)
      }
    } /*else if (step === 2) {
      try {
        await await auth().verifyPasswordResetCode(confirmCode);
        showLoading(false);
        this.setState({step: 3});
      } catch (e) {
        let errorMessage = e.message.replace(e.code, '').replace('[]', '');
        console.log('reset password 2 ==', errorMessage);
        showLoading(false);
        showToast(errorMessage)
      }
    } else if (step === 3) {
      try {
        await await auth().confirmPasswordReset(confirmCode, password);
        showLoading(false);
        // navigate('ResetPasswordScreen');
      } catch (e) {
        let errorMessage = e.message.replace(e.code, '').replace('[]', '');
        console.log('reset password 3 ==', errorMessage);
        showLoading(false);
        showToast(errorMessage)
      }
    }*/
  }

  render() {
    let { email, confirmCode, password, step } = this.state;
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
            <Text style={[Fonts.PoppinsRegular, Style.u38Text]}>Forgot your password?</Text>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text, Style.u39Text]}>Enter the email to reset your nolawyer account</Text>
          </View>
          <View style={Style.u41}>
            {step === 1 && <TextInput
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              placeholder={'Email address'}
              keyboardType={'email-address'}
              onChangeText={text => this.setState({email: text})}
              value={email}
            />}
            {step === 2 && <TextInput
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              placeholder={'6 digit code'}
              keyboardType={'numeric'}
              onChangeText={text => this.setState({confirmCode: text})}
              value={confirmCode}
            />}
            {step === 3 && <TextInput
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              placeholder={'New Password'}
              keyboardType={'default'}
              secureTextEntry={true}
              onChangeText={text => this.setState({password: text})}
              value={password}
            />}
          </View>
          <TouchableOpacity
            style={[Helpers.center, Style.u48]}
            onPress={() => this._toResetPassword()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>Reset Password</Text>
          </TouchableOpacity>
          <View style={[Helpers.rowCross, Style.u49]}>
            <Text style={[Fonts.PoppinsRegular, Style.u49Text]}>Nevermind</Text>
            <TouchableOpacity
              style={[Helpers.center, Style.u50]}
              onPress={() => this._toLogin()}
            >
              <Text style={[Fonts.PoppinsBold, Style.u50Text]}>Login</Text>
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

  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
}

ForgetPasswordScreen.propTypes = {
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
)(ForgetPasswordScreen)

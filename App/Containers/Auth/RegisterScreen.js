import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import UserActions from 'App/Stores/User/Actions'
import ToastActions from 'App/Stores/Toast/Actions'
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import validator from 'validator'

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  componentDidMount() {
  }

  _register = async () => {
    const { email, password } = this.state;
    const { showToast, registerUser } = this.props;
    // const { navigate } = this.props.navigation;

    if (!validator.isEmail(email)) {
      showToast('Invalid email');
      return false;
    }
    if (!validator.isLength(password, { min: 8 })) {
      showToast('Use 8 characters or more for your password');
      return false;
    }
    registerUser(email, password);

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
            <Text style={[Fonts.PoppinsRegular, Style.u38Text]}>Welcome to nolawyer</Text>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text, Style.u39Text]}>Create your nolawyer account here</Text>
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
            onPress={() => this._register()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>Sign Up</Text>
          </TouchableOpacity>
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

  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
}

RegisterScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  registerUser: (email, password) => dispatch(UserActions.registerUser(email, password)),
  showToast: (text) => dispatch(ToastActions.showToast(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)

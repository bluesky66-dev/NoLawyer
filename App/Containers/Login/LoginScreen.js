import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './LoginScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

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
          onPress={() => this._toHome()}
        >
          <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>Log In Securely</Text>
        </TouchableOpacity>
        <View style={[Helpers.rowCross, Style.u49]}>
          <Text style={[Fonts.PoppinsRegular, Style.u49Text]}>Don't have an account?</Text>
          <TouchableOpacity
            style={[Helpers.center, Style.u50]}
            onPress={() => this._toSignup()}
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
      </View>
    )
  }

  _toHome() {
    const {navigate} = this.props.navigation;
    navigate('HomeScreen');
  }
  _toSignup() {
    const {navigate} = this.props.navigation;
    navigate('RegisterScreen');
  }
  _toForgetPassword() {
    const {navigate} = this.props.navigation;
    navigate('ForgetPasswordScreen');
  }
}

LoginScreen.propTypes = {
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
)(LoginScreen)

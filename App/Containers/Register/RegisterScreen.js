import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './RegisterScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      phone: '',
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
          <TextInput
            style={[Fonts.PoppinsRegular, Style.u41Input]}
            placeholder={'Phone number'}
            keyboardType={'numeric'}
            onChangeText={text => this.setState({phone: text})}
            value={this.state.phone}
          />
        </View>
        <TouchableOpacity
          style={[Helpers.center, Style.u48]}
          onPress={() => this._toHome()}
        >
          <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>Sign Up</Text>
        </TouchableOpacity>
        <View style={[Helpers.rowCross, Style.u49]}>
          <Text style={[Fonts.PoppinsRegular, Style.u49Text]}>Already have an Account?</Text>
          <TouchableOpacity
            style={[Helpers.center, Style.u50]}
            onPress={() => this._toLogin()}
          >
            <Text style={[Fonts.PoppinsBold, Style.u50Text]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.u51}>
          <Text style={[Fonts.PoppinsRegular, Style.u51Text]}>By signing up, you're agreeing to nolawyer terms and conditions</Text>
        </View>
      </View>
    )
  }

  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
  _toHome() {
    const {navigate} = this.props.navigation;
    navigate('MainScreen');
  }
}

RegisterScreen.propTypes = {
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
)(RegisterScreen)

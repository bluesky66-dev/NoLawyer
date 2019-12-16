import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class ForgetPasswordScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
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
            <Text style={[Fonts.PoppinsRegular, Style.u38Text]}>Forgot your password?</Text>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text, Style.u39Text]}>Enter the email to reset your nolawyer account</Text>
          </View>
          <View style={Style.u41}>
            <TextInput
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              placeholder={'Email address'}
              keyboardType={'email-address'}
              onChangeText={text => this.setState({email: text})}
              value={this.state.email}
            />
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
        </View>
        <View style={[Helpers.center, Style.u148]}>
          <Text style={[Fonts.PoppinsRegular, Style.u148Text]}>
            By signing up, you're agreeing to nolawyer terms and conditions
          </Text>
        </View>
      </ScrollView>
    )
  }

  _toResetPassword() {
    const {navigate} = this.props.navigation;
    navigate('ResetPasswordScreen');
  }
  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
}

ForgetPasswordScreen.propTypes = {
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
)(ForgetPasswordScreen)
import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import { liveInEurope } from 'App/Stores/User/Selectors'
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class AuthPhoneScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
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
            <Text style={[Fonts.PoppinsRegular, Style.u38Text]}>
              Welcome to nolawyer
            </Text>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text, Style.u39Text]}>
              Create your nolawyer account here
            </Text>
          </View>
          <View style={Style.u41}>
            <TextInput
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              placeholder={'Mobile number'}
              keyboardType={'numeric'}
              onChangeText={text => this.setState({phone: text})}
              value={this.state.phone}
            />
          </View>
          <TouchableOpacity
            style={[Helpers.center, Style.u48]}
            onPress={() => this._toConfirmPhone()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>Connect with Mobile Number</Text>
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
  _toConfirmPhone() {
    const {navigate} = this.props.navigation;
    navigate('ConfirmPhoneScreen');
  }
}

AuthPhoneScreen.propTypes = {
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
)(AuthPhoneScreen)

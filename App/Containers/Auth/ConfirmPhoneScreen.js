import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import { liveInEurope } from 'App/Stores/User/Selectors'
import Style from './AuthScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import { ConfirmationCodeInput } from 'App/Components'
import { widthPercentage as wp } from '@Common'

class ConfirmPhoneScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmCode: '',
    }
  }

  componentDidMount() {
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
            <ConfirmationCodeInput
              ref="codeInputRef2"
              secureTextEntry
              codeLength={6}
              space={wp(15)}
              autoFocus={true}
              ignoreCase={true}
              inputPosition='center'
              onCodeChange={(code) => { this.state.confirmCode = code }}
              onFulfill={(isValid) => console.log(isValid)}
              containerStyle={Style.confirmInputContainer}
              codeInputStyle={Style.confirmInput}
            />
          </View>
          <TouchableOpacity
            style={[Helpers.center, Style.u48]}
            onPress={() => this._toHome()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>Enter Verification Code</Text>
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

  _toHome() {
    const {navigate} = this.props.navigation;
    navigate('MainScreen');
  }
  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
}

ConfirmPhoneScreen.propTypes = {
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
)(ConfirmPhoneScreen)

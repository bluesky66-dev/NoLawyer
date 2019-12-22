import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import { liveInEurope } from 'App/Stores/User/Selectors'
import { Header } from '@Components'
import Style from './HelpScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class NotificationsScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
        ]}
      >
        <Header
          SubPage
          HideRight
          title={'Notifications & Settings'}
          titleStyle={[Fonts.PoppinsExtraBold, Style.title]}/>
        <View style={[Helpers.fillCenter, Style.u308]}>
          <TouchableOpacity
            style={[Helpers.center, Style.helpButton, Style.primaryBtn]}
            onPress={() => this._changePhone()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.whiteText]}>
              Change Mobile Number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.center, Style.helpButton, Style.errorBtn]}
            onPress={() => this._deleteAccount()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.whiteText]}>
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _changePhone() {
  }
  _deleteAccount() {
  }
}

NotificationsScreen.propTypes = {
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
)(NotificationsScreen)

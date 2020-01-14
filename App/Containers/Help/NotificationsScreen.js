import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
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
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsScreen)

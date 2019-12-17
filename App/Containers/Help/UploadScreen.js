import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { Header } from '@Components'
import Style from './HelpScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class UploadScreen extends React.Component {
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
          title={'Upload Documents for Review'}
          titleStyle={[Fonts.PoppinsExtraBold, Style.title]}/>
        <View style={[Helpers.fillCenter, Style.u308]}>
          <TouchableOpacity
            style={[Helpers.center, Style.helpButton, Style.primaryBtn]}
            onPress={() => this._openCamera()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.whiteText]}>
              Take a picture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.center, Style.helpButton, Style.errorBtn]}
            onPress={() => this._pickDocument()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.whiteText]}>
              Upload document on your phone
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _openCamera() {
  }
  _pickDocument() {
  }
}

UploadScreen.propTypes = {
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
)(UploadScreen)

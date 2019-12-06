import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './HomeScreenStyle'
import { ApplicationStyles, Helpers, Images, Fonts } from 'App/Theme'
import { Header } from '@Components'
import ProfileIcon from '@Assets/Images/user_profile_icon_u120.png'
import u143onboarding from '@Assets/Images/u143onboarding.png'

class HomeScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
        ]}
      >
        <Header />
        <View style={[Style.home]}>
          <View style={[Style.u142]}>
            <Text style={[Fonts.PoppinsBlack, Style.u142Text]}>Your Self Help to Legal Justice</Text>
            <Image style={Style.u142Img} source={u143onboarding} resizeMode={'contain'}/>
          </View>
        </View>
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

HomeScreen.propTypes = {
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
)(HomeScreen)

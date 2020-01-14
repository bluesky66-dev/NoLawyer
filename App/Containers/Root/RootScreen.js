import React, { Component } from 'react'
import auth from '@react-native-firebase/auth'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import Toast from 'react-native-root-toast'
import SplashScreen from 'react-native-splash-screen'
import StartupActions from 'App/Stores/Startup/Actions'
import ToastActions from '../../Stores/Toast/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'


class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    SplashScreen.hide();
    this.props.startup();
    // EstonAssistant.init();

    this.authSubscription = auth().onAuthStateChanged(async (user) => {
      if (user) {
        // console.log('onAuthStateChanged ==== user');
        NavigationService.navigateAndReset('MainScreen')
      } else {
        // console.log('onAuthStateChanged ==== else');
      }
    });
  }

  _hideToast = () => {
    setTimeout(() => {
      this.props.hideToast();
    }, 1500)
  }

  render() {
    let {userIsLoading, showToast, toastMessage} = this.props;
    return (
      <View style={Helpers.fill}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Spinner
          visible={userIsLoading}
        />
        <Toast
          visible={showToast}
          onShown={this._hideToast}
          position={Toast.positions.BOTTOM}
        >{toastMessage}</Toast>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({
  userIsLoading: state.user.userIsLoading,
  showToast: state.toast.showToast,
  toastMessage: state.toast.toastMessage,
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  hideToast: () => dispatch(ToastActions.hideToast()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)

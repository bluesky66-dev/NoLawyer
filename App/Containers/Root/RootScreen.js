import React, { Component } from 'react'
import auth from '@react-native-firebase/auth'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { Alert, StatusBar, View, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import Toast from 'react-native-root-toast'
import SplashScreen from 'react-native-splash-screen'
import StartupActions from 'App/Stores/Startup/Actions'
import UserActions from 'App/Stores/User/Actions'
import ToastActions from '../../Stores/Toast/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import { EstonAssistant } from 'App/Common'
const queryString = require('query-string');

class RootScreen extends Component {
  async componentDidMount() {
    // Run the startup saga when the application is starting
    let { fetchUserSuccess } = this.props
    SplashScreen.hide();
    this.props.startup();
    EstonAssistant.init();
    const initialLink = await dynamicLinks().getInitialLink();
    if (initialLink) {
      const parsed = queryString.parse(initialLink.url);
      if (parsed.mode && parsed.mode === 'verifyEmail') {
        if (parsed.oobCode) {
          // console.log("initialLink ===", initialLink);
          // console.log("parsed.oobCode ===", parsed.oobCode);
          const actionCodeInfo = await auth().checkActionCode(parsed.oobCode);
          switch (actionCodeInfo.operation) {
            case 'EMAIL_SIGNIN': break;
            case 'PASSWORD_RESET': {
              break;
            }
            case 'RECOVER_EMAIL': break;
            case 'VERIFY_EMAIL': {
              await auth().applyActionCode(parsed.oobCode);
              ToastAndroid.show('Your email is verified', ToastAndroid.SHORT);
              break;
            }
          }
        }
      }
    }
    this.authSubscription = auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user.emailVerified', user.emailVerified);
        if (user.email && !user.emailVerified) {
          return false;
        }
        fetchUserSuccess(user);
        NavigationService.navigateAndReset('MainScreen')
      } else {
        // console.log('onAuthStateChanged ==== else');
        // NavigationService.navigateAndReset('AuthScreen')
      }
    });
  }

  _hideToast = () => {
    setTimeout(() => {
      this.props.hideToast();
    }, 3000)
  }

  render() {
    let {userIsLoading, showToast, toastMessage} = this.props;
    // console.log('userIsLoading ===', userIsLoading)
    return (
      <View style={Helpers.fill}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Spinner
          visible={userIsLoading}
        />
        {showToast && <Toast
          visible={showToast}
          onShown={this._hideToast}
          position={Toast.positions.BOTTOM}
        >{toastMessage}</Toast>}
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
  fetchUserSuccess: (user) => dispatch(UserActions.fetchUserSuccess(user)),
  startup: () => dispatch(StartupActions.startup()),
  hideToast: () => dispatch(ToastActions.hideToast()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)

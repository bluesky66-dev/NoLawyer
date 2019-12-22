import React, { Component } from 'react'
import auth from '@react-native-firebase/auth';
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import { EstonAssistant } from 'App/Common'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    SplashScreen.hide();
    this.props.startup();
    EstonAssistant.init();

    const {navigate} = this.props.navigation;
    this.authSubscription = auth().onAuthStateChanged(async (user) => {
      if (user) {
        //console.log('onAuthStateChanged ==== user');
      } else {
        //console.log('onAuthStateChanged ==== else');
        navigate('MainScreen');
      }
    });
  }

  render() {
    return (
      <View style={Helpers.fill}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)

import { createAppContainer, createStackNavigator } from 'react-navigation'

import WelcomeScreen from 'App/Containers/Welcome/WelcomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import TermsScreen from 'App/Containers/Terms/TermsScreen'
import SelfHelpScreen from 'App/Containers/SelfHelp/SelfHelpScreen'
import ResetPasswordScreen from 'App/Containers/ResetPassword/ResetPasswordScreen'
import RejectScreen from 'App/Containers/Reject/RejectScreen'
import RegisterScreen from 'App/Containers/Register/RegisterScreen'
import RegalJusticeScreen from 'App/Containers/RegalJustice/RegalJusticeScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import ForgetPasswordScreen from 'App/Containers/ForgetPassword/ForgetPasswordScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: WelcomeScreen,
    TermsScreen: TermsScreen,
    SelfHelpScreen: SelfHelpScreen,
    ResetPasswordScreen: ResetPasswordScreen,
    RejectScreen: RejectScreen,
    RegisterScreen: RegisterScreen,
    RegalJusticeScreen: RegalJusticeScreen,
    LoginScreen: LoginScreen,
    ForgetPasswordScreen: ForgetPasswordScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
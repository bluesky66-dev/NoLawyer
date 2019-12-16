import { createAppContainer, createStackNavigator } from 'react-navigation'

import WelcomeScreen from 'App/Containers/Welcome/WelcomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import TermsScreen from 'App/Containers/Terms/TermsScreen'
import ResetPasswordScreen from 'App/Containers/Auth/ResetPasswordScreen'
import RejectScreen from 'App/Containers/Reject/RejectScreen'
import RegisterScreen from 'App/Containers/Auth/RegisterScreen'
import LoginScreen from 'App/Containers/Auth/LoginScreen'
import AuthScreen from 'App/Containers/Auth/AuthScreen'
import ForgetPasswordScreen from 'App/Containers/Auth/ForgetPasswordScreen'
import ProfileScreen from 'App/Containers/Profile/ProfileScreen'
import EmploymentScreen from 'App/Containers/Services/EmploymentScreen'
import ProblemsScreen from 'App/Containers/Services/ProblemsScreen'
import ParkingScreen from 'App/Containers/Services/ParkingScreen'
import SubscriptionScreen from 'App/Containers/Services/SubscriptionScreen'
import HMRCScreen from 'App/Containers/Services/HMRCScreen'
import VisasScreen from 'App/Containers/Services/VisasScreen'
import SolveScreen from 'App/Containers/Solve/SolveScreen'
import DrawerNavigator from './DrawerNavigator'

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
    WelcomeScreen: WelcomeScreen,
    TermsScreen: TermsScreen,
    ResetPasswordScreen: ResetPasswordScreen,
    RejectScreen: RejectScreen,
    RegisterScreen: RegisterScreen,
    LoginScreen: LoginScreen,
    AuthScreen: AuthScreen,
    ForgetPasswordScreen: ForgetPasswordScreen,
    MainScreen: DrawerNavigator,
    ProfileScreen: ProfileScreen,
    EmploymentScreen: EmploymentScreen,
    ProblemsScreen: ProblemsScreen,
    ParkingScreen: ParkingScreen,
    SubscriptionScreen: SubscriptionScreen,
    HMRCScreen: HMRCScreen,
    VisasScreen: VisasScreen,
    SolveScreen: SolveScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'WelcomeScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  },
)

export default createAppContainer(StackNavigator)

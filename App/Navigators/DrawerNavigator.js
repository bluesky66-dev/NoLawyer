import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { DrawerMenu } from '@Components'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import ProfileScreen from 'App/Containers/Profile/ProfileScreen'
import TermsConditionsScreen from 'App/Containers/Help/TermsConditionsScreen'
import PrivacyScreen from 'App/Containers/Help/PrivacyScreen'
import SettingScreen from 'App/Containers/Help/NotificationsScreen'
import { Colors } from 'App/Theme'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'

const DrawerNavigator = createDrawerNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: () => null
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'My Profile'
      }
    },
    TermsConditionsScreen: {
      screen: TermsConditionsScreen,
      navigationOptions: {
        title: 'Terms & Conditions'
      }
    },
    PrivacyScreen: {
      screen: PrivacyScreen,
      navigationOptions: {
        title: 'Privacy'
      }
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: {
        title: 'Notificiation & Settings'
      }
    },
  },
  {
    initialRouteName: 'HomeScreen',
    contentComponent: DrawerMenu,
    drawerWidth: wp(300),
    contentOptions: {
      activeTintColor: Colors.dark,
      activeBackgroundColor: Colors.white,
    }
  },
)

export default DrawerNavigator

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'
import { Fonts, Helpers } from 'App/Theme'
import Style from './DrawerMenuStyle'

export default class DrawerMenu extends Component {

  render() {
    return (
      <View style={[Helpers.fill, Style.drawerBox]}>
        <View style={[Style.u131]}>
          <Text style={[Style.u131Text, Fonts.PoppinsMedium]}>yourname@email.com</Text>
        </View>
        <View style={Style.topHr}/>
        <DrawerItems
          {...this.props}
        />
        <View style={Style.bottomHr}/>
        <View style={[Style.u137, Helpers.center]}>
          <Text style={[Style.u137Text, Fonts.PoppinsBlack]}>nolawyer</Text>
        </View>
      </View>
    )
  }

  _toLogout() {
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
}

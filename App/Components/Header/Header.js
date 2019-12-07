import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import { Fonts, Helpers } from 'App/Theme'
import Style from './HeaderStyle'
import NavigationService from 'App/Services/NavigationService'
import ProfileIcon from '@Assets/Images/user_profile_icon_u120.png'
import BackIcon from '@Assets/Images/back_screenbtn_u174.png'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { SubPage, HideRight, title, titleStyle } = this.props;
    return (
      <View style={[Helpers.rowCenter, Style.header]}>
        {SubPage && <TouchableOpacity
          style={[Style.backBtn]}
          onPress={() => this._toHome()}
        >
          <Image style={Style.backIcon} source={BackIcon} resizeMode={'contain'}/>
        </TouchableOpacity>}
        {!SubPage && <TouchableOpacity
          style={[Helpers.center, Style.left]}
          onPress={() => this._openMenu()}
        >
          <View style={Style.listIcon}/>
        </TouchableOpacity>}
        <Text style={titleStyle ? titleStyle: [Fonts.PoppinsBlack, Style.logoTxt]}>{title ? title : 'nolawyer'}</Text>
        {!HideRight && <TouchableOpacity
          style={[Helpers.center, Style.right]}
          onPress={() => this._toProfile()}
        >
          <Image style={Style.rightImg} source={ProfileIcon} resizeMode={'contain'}/>
        </TouchableOpacity>}
      </View>
    )
  }

  _openMenu() {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }
  _toHome() {
    NavigationService.navigateAndReset('MainScreen')
  }
  _toProfile() {
    NavigationService.navigateAndReset('ProfileScreen')
  }
}
export default withNavigation(Header)

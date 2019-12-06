import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Fonts, Helpers } from 'App/Theme'
import Style from './HeaderStyle'
import ProfileIcon from '@Assets/Images/user_profile_icon_u120.png'
import NavigationService from 'App/Services/NavigationService'

export default class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[Helpers.rowCenter, Style.header]}>
        <TouchableOpacity
          style={[Helpers.center, Style.left]}
          onPress={() => this._openMenu()}
        >
          <View style={Style.listIcon}/>
        </TouchableOpacity>
        <Text style={[Fonts.PoppinsBlack, Style.logoTxt]}>nolawyer</Text>
        <TouchableOpacity
          style={[Helpers.center, Style.right]}
          onPress={() => this._toProfile()}
        >
          <Image style={Style.rightImg} source={ProfileIcon} resizeMode={'contain'}/>
        </TouchableOpacity>
      </View>
    )
  }

  _openMenu() {
  }

  _toProfile() {
    NavigationService.navigateAndReset('ProfileScreen')
  }
}

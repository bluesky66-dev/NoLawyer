import React from 'react'
import { View } from 'react-native'
import styles from './SplashScreenStyle'
import { PoppinsText } from '@Components'
import { Helpers } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <PoppinsText style={[styles.logoTxt]}>nolawyer</PoppinsText>
        </View>
      </View>
    )
  }
}

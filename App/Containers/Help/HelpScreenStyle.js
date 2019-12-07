import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: hp(18),
    color: Colors.dark,
  },
  u259: {
    paddingLeft: wp(25),
    paddingRight: wp(48),
    marginBottom: hp(17),
  },
  u259Text: {
    marginTop: hp(18),
    fontWeight: '400',
    fontSize: hp(12),
    color: Colors.text,
  },
})

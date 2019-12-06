import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  home: {
    paddingLeft: wp(15),
    paddingRight: wp(15),
    paddingTop: hp(33),
  },
  u142: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(15),
    paddingRight: wp(15),
    height: hp(92),
    backgroundColor: Colors.primary,
    borderTopLeftRadius: hp(8),
    borderTopRightRadius: hp(8)
  },
  u142Text: {
    alignContent: 'flex-start',
    width: wp(175),
    paddingLeft: wp(10),
    fontWeight: '600',
    fontSize: hp(18),
    color: Colors.white,
  },
  u142Img: {
    alignContent: 'flex-end',
    marginLeft: wp(55),
    width: hp(75),
    height: hp(75)
  }
})

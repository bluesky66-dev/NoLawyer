import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  u35: {
    paddingLeft: wp(30),
    paddingRight: wp(30),
  },
  u37: {
    marginTop: hp(14)
  },
  u37Text: {
    fontWeight: '600',
    fontSize: hp(22),
    color: Colors.primary,
  },
  u38: {
    marginTop: hp(50),
    paddingBottom: hp(15),
    paddingTop: hp(16),
  },
  u38Text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: hp(12),
    color: Colors.dark,
    lineHeight: hp(30)
  },
  u41: {
    marginTop: hp(6),
  },
  u41Input: {
    color: '#999999',
    fontSize: hp(13),
    height: hp(35),
    width: wp(315),
    marginTop: hp(14),
    paddingBottom: hp(1),
    paddingTop: hp(1),
    paddingLeft: wp(10),
    paddingRight: wp(10),
    borderWidth: hp(1),
    borderColor: '#cccccc',
    fontWeight: '400',
    borderRadius: hp(5),
  },
  u48: {
    marginTop: hp(14),
    height: hp(35),
    width: wp(315),
  }
})

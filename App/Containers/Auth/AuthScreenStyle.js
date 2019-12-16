import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

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
    fontSize: hp(16),
    color: Colors.dark,
    lineHeight: hp(30)
  },
  u39Text: {
    fontSize: hp(12),
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
    backgroundColor: Colors.primary,
    borderRadius: hp(5),
  },
  u48Text: {
    fontWeight: '500',
    fontSize: hp(14),
    color: Colors.white,
  },
  u49: {
    marginTop: hp(20),
    paddingTop: hp(6),
  },
  u49Text: {
    marginRight: wp(20),
    marginLeft: wp(-20),
    fontWeight: '500',
    fontSize: hp(13),
    color: Colors.dark,
  },
  u50: {
    marginTop: hp(-3),
  },
  u50Text: {
    fontWeight: '700',
    fontSize: hp(13),
    color: Colors.success,
  },
  hr: {
    marginTop: hp(20),
    marginBottom: hp(20),
    width: wp(174),
    height: 1,
    backgroundColor: '#d0daeb',
  },

  u51: {
    marginTop: hp(2),
    paddingLeft: wp(28),
    paddingRight: wp(28),
  },
  u51Text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: hp(13),
    color: Colors.dark,
  },
})

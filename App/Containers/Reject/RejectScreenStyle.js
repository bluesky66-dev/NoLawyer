import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  u1View: {
    paddingLeft: wp(16),
    paddingRight: wp(16),
  },
  u28: {
    marginTop: hp(32),
    paddingLeft: wp(40),
    paddingRight: wp(40),
  },
  u28Text: {
    fontWeight: '600',
    fontSize: hp(24),
    color: Colors.dark,
  },
  u29Text: {
    fontWeight: '500',
    fontSize: hp(14),
    color: Colors.dark,
    textAlign: 'center'
  },
  u30: {
    marginTop: hp(100),
  },
  u30Text: {
    fontWeight: '600',
    fontSize: hp(22),
    color: Colors.primary,
  },
  u31: {
    marginTop: hp(16),
  },
  u31Text: {
    fontWeight: '500',
    fontSize: hp(16),
    color: Colors.dark,
  },
  u33: {
    marginTop: hp(92),
  },
  u33Text: {
    fontWeight: '600',
    fontSize: hp(14),
    color: Colors.dark,
  },
  copyright: {
    marginTop: hp(21),
  },
  u9Img: {
    width: wp(12),
    height: wp(12),
    marginRight: wp(6),
  },
  copyrightText: {
    fontWeight: '400',
    fontSize: hp(14),
    color: Colors.text,
  },
  u34: {
    position: 'absolute',
    bottom: hp(5),
    width: wp(330),
    left: wp(15),
    backgroundColor: '#25d366',
    height: hp(50),
    borderRadius: hp(6)
  },
  u34Text: {
    fontWeight: '400',
    fontSize: hp(15),
    color: Colors.white,
  },
})

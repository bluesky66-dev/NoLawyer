import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  header: {
    width: wp(360),
    height: hp(60),
  },
  logoTxt: {
    fontWeight: '600',
    fontSize: hp(22),
    color: Colors.primary,
  },
  backBtn: {
    position: 'absolute',
    top: hp(18),
    left: wp(15),
    width: hp(19),
    height: hp(60),
  },
  backIcon: {
    width: '100%',
    height: hp(19),
  },
  left: {
    position: 'absolute',
    top: 0,
    left: wp(15),
    width: hp(20),
    height: hp(60),
    paddingTop: hp(20),
    paddingBottom: hp(20),
  },
  listIcon: {
    height: 1,
    width: hp(20),
    backgroundColor: Colors.primary,
  },
  listIconMTop: {
    marginTop: hp(7)
  },
  right: {
    position: 'absolute',
    top: 0,
    right: wp(20),
    width: hp(25),
    height: hp(60),
  },
  rightImg: {
    width: '100%',
    height: hp(25),
  }
})

// packages
import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  rootWrapper: {
    position: 'relative'
  },
  profile: {
    // height: hp(535),
    paddingTop: hp(5),
    paddingLeft: wp(30),
    paddingRight: wp(30),
  },
  u240: {
    alignItems: 'center',
    position: 'relative'
  },
  u240Img: {
    width: hp(80),
    height: hp(80),
    borderRadius: hp(40)
  },
  avatarBtn: {
    position: 'absolute',
    right: hp(5),
    bottom: hp(8),
    width: hp(30),
    height: hp(20),
  },
  cameraIcon: {
    width: '100%',
    height: '100%'
  },
  u243: {
    marginTop: hp(43)
  },
  profileInput: {
    color: '#333333',
    fontSize: hp(13),
    height: hp(35),
    width: wp(300),
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
  u246: {
    marginTop: hp(55),
    paddingLeft: wp(10)
  },
  u246Text: {
    fontWeight: '500',
    fontSize: hp(16),
    color: Colors.dark,
  },
  u248: {
    paddingBottom: hp(16),
  },
  u21: {
    width: wp(360),
    height: hp(50),
    backgroundColor: Colors.primary,
  },
  u21Text: {
    fontWeight: '500',
    fontSize: hp(14),
    color: Colors.white,
  }
})

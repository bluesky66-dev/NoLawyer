import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  profile: {
    height: hp(535),
    paddingTop: hp(5),
    paddingLeft: wp(30),
    paddingRight: wp(30),
  },
  u240: {
    alignItems: 'center',
  },
  u240Img: {
    width: hp(80),
    height: hp(80),
    borderRadius: hp(40)
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

  },
  u21: {
    position: 'absolute',
    bottom: 0,
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

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
    paddingRight: wp(25),
    marginBottom: hp(17),
  },
  u259Text: {
    marginTop: hp(18),
    fontWeight: '400',
    fontSize: hp(12),
    color: Colors.text,
  },
  u308: {
    paddingLeft: wp(30),
    paddingRight: wp(30),
  },
  helpButton: {
    height: hp(35),
    width: '100%',
    borderWidth: hp(1),
    borderRadius: hp(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: hp(18),
  },
  primaryBtn: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary
  },
  errorBtn: {
    backgroundColor: Colors.error,
    borderColor: Colors.error
  },
  u48Text: {
    fontWeight: '500',
    fontSize: hp(14),
    color: Colors.white,
  },
  whiteText: {
    color: Colors.white
  },
})

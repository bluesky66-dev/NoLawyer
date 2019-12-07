import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  serviceWrapper: {
    paddingLeft: wp(15),
    paddingRight: wp(15)
  },
  spaceTop: {
    height: hp(20),
  },
  spaceBottom: {
    height: hp(35),
  },
  borderPrimary: {
    borderColor: Colors.primary,
  },
  bgPrimary: {
    backgroundColor: Colors.primary,
  },
  borderSecond: {
    borderColor: Colors.secondary,
  },
  bgSecond: {
    backgroundColor: Colors.secondary,
  },
  borderThird: {
    borderColor: Colors.third,
  },
  bgThird: {
    backgroundColor: Colors.third,
  },
  borderRed: {
    borderColor: Colors.error,
  },
  bgRed: {
    backgroundColor: Colors.error,
  },
  borderSuccess: {
    borderColor: Colors.success,
  },
  bgSuccess: {
    backgroundColor: Colors.success,
  },
  card: {
    borderRadius: hp(5),
    borderWidth: 1,
    paddingLeft: wp(10),
    paddingRight: wp(10)
  },
  cardMarginTop: {
    marginTop: hp(23),
  },
  cardTop: {
    height: hp(200),
    paddingLeft: wp(6),
    paddingRight: wp(6)
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: hp(18),
    color: Colors.dark,
  },
  cardDesc: {
    marginTop: hp(30),
    fontWeight: '400',
    fontSize: hp(12),
    color: Colors.dark,
    lineHeight: hp(30),
    textAlign: 'center'
  },
  CardButton: {
    width: '100%',
    height: hp(43),
    borderRadius: hp(150),
    marginBottom: hp(10),
  },
  ButtonText: {
    fontWeight: '400',
    fontSize: hp(13),
  },
  TextWhite: {
    color: Colors.white,
  },
  TextDark: {
    color: Colors.dark,
  },
})

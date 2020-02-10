import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors, Helpers } from 'App/Theme'

export default StyleSheet.create({
  authWrapper: {

  },
  u35: {
    flex: 1,
    paddingLeft: wp(30),
    paddingRight: wp(30),
  },
  u37: {
    ...Helpers.center,
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
  confirmInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(5),
    height: hp(35),
    width: wp(315),
    marginTop: hp(14),
  },
  confirmInput: {
    borderColor: '#d0daeb',
    width: wp(35),
    height: hp(25),
    color: Colors.dark,
    borderWidth: hp(1),
  },
  u48: {
    marginTop: hp(14),
    marginBottom: hp(18),
    height: hp(35),
    width: wp(315),
    backgroundColor: Colors.primary,
    borderRadius: hp(5),
  },
  authButton: {
    height: hp(35),
    width: wp(315),
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
  authWithPhone: {
    backgroundColor: Colors.white,
    borderColor: Colors.success
  },
  authWithFaceBook: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary
  },
  authWithGoogle: {
    backgroundColor: Colors.error,
    borderColor: Colors.error
  },
  authWithEmail: {
    backgroundColor: Colors.white,
    borderColor: Colors.secondary
  },
  whiteText: {
    color: Colors.white
  },
  darkText: {
    color: Colors.dark
  },
  u48Text: {
    fontWeight: '500',
    fontSize: hp(14),
    color: Colors.white,
  },
  u49: {
    ...Helpers.center,
    marginTop: hp(2),
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
    alignSelf: 'center',
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
  u43: {
    marginTop: hp(2),
    paddingTop: hp(6),
    paddingBottom: hp(6),
  },
  u43Text: {
    fontWeight: '500',
    fontSize: hp(13),
    color: Colors.dark,
  },
  u45: {
    marginTop: hp(20),
  },
  u148: {
    width: '100%',
    height: hp(67),
    paddingLeft: wp(44),
    paddingRight: wp(44),
    backgroundColor: Colors.primary,
  },
  u148Text: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: hp(13),
    color: Colors.white,
  }
})

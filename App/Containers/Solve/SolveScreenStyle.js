import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  u271: {
    alignSelf: 'center',
    marginTop: hp(8),
    minWidth: wp(218),
    backgroundColor: Colors.dark,
    height: hp(30),
    width: wp(218),
    borderRadius: hp(5),
  },
  u271Text: {
    fontWeight: '600',
    fontSize: hp(11),
    color: Colors.white,
  },
  solve: {
    paddingLeft: wp(12),
    paddingRight: wp(12),
    marginBottom: hp(60),
  },
  topSpace: {
    height: hp(20)
  },
  bottomSpace: {
    height: hp(35)
  },
  msgMargin: {
    marginTop: hp(18),
  },
  actionMargin: {
    marginTop: hp(9),
  },
  msgItem: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: wp(6),
    paddingLeft: wp(6),
  },
  answerItem: {
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
  },
  questionItem: {
    alignItems: 'flex-start',
  },
  questionTxt: {
    backgroundColor: Colors.primary,
    color: Colors.white
  },
  msg: {
    paddingLeft: wp(20),
    paddingRight: wp(20),
    paddingTop: hp(11),
    paddingBottom: hp(10),
    fontWeight: '400',
    fontSize: hp(11),
    color: Colors.text,
    borderRadius: hp(24),
  },
  fontBold: {
    fontWeight: '700',
  },
  linkStyle: {
    color: Colors.primary
  },
  shadow: {
    shadowColor: "#000",
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  msgBig: {
    maxWidth: wp(278),
  },
  msgSmall: {
    maxWidth: wp(172),
  },
  msgBold: {
    fontWeight: '600',
    fontSize: hp(11),
    color: Colors.dark,
  },
  action: {
    paddingLeft: wp(10),
    paddingRight: wp(10),
    paddingTop: hp(7),
    paddingBottom: hp(6),
    borderColor: Colors.primary,
    borderRadius: hp(54),
    borderWidth: 1,
    minWidth: wp(108),
  },
  actionText: {
    fontWeight: '400',
    fontSize: hp(11),
    color: Colors.primary,
  },
  sendBox: {
    position: 'absolute',
    marginTop: hp(10),
    left: wp(15),
    bottom: hp(10),
    height: hp(40),
    width: wp(335),
    borderRadius: hp(150),
  },
  emoji: {
    marginLeft: wp(7),
    marginRight: wp(7),
    height: hp(25),
    width: wp(25),
  },
  emojiIcon: {
    height: '100%',
    width: '100%',
  },
  msgInput: {
    flex: 1,
    fontWeight: '400',
    fontSize: hp(13),
    color: Colors.text,
    marginRight: wp(7),
    paddingLeft: wp(18),
  },
  sendBtn: {
    width: wp(62),
    backgroundColor: Colors.primary,
    height: '100%',
    borderTopRightRadius: hp(150),
    borderBottomRightRadius: hp(150),
  },
  sendBtnTxt: {
    fontWeight: '400',
    fontSize: hp(13),
    color: Colors.white,
  },
})

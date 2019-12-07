import { StyleSheet } from 'react-native'
import {widthPercentage as wp, heightPercentage as hp} from '@Common';
import { Colors } from '@Theme';

export default StyleSheet.create({
  pager: {
    marginTop: hp(80),
    height: hp(374),
    width: '100%'
  },
  u8: {
  },
  imgContainer: {
    alignSelf: 'center',
    width: hp(185),
    height: hp(185),
  },
  u9Img: {
    width: '100%',
    height: '100%',
  },
  u10: {
    paddingLeft: wp(18),
    paddingRight: wp(18),
    marginTop: hp(20),
  },
  u10Text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: hp(18),
    color: Colors.primary,
  },
  u11: {
    marginTop: hp(13),
    paddingLeft: wp(18),
    paddingRight: wp(18),
  },
  u11Text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: hp(14),
    color: Colors.text,
  },
  indicator: {
    marginTop: hp(10),
  },
  iActive: {
    backgroundColor: Colors.primary,
  },
  iItem: {
    width: hp(7),
    height: hp(7),
    borderRadius: hp(4),
    backgroundColor: '#14449933',
    marginLeft: wp(3),
    marginRight: wp(3),
  },
  u21: {
    position: 'absolute',
    bottom: 0,
    width: wp(360),
    height: hp(50),
    backgroundColor: Colors.primary,
  },
  u21Text: {
    fontWeight: '600',
    fontSize: hp(16),
    color: Colors.white,
  }
})

import { StyleSheet } from 'react-native'
import {widthPercentage as wp, heightPercentage as hp} from '@Common';
import { Colors } from '@Theme';

export default StyleSheet.create({
  u1View: {
    paddingLeft: wp(16),
    paddingRight: wp(16),
  },
  u22: {
    marginTop: hp(14),
    paddingTop: hp(5),
    paddingLeft: wp(25),
    paddingBottom: hp(5)
  },
  u22Text: {
    fontWeight: '800',
    fontSize: hp(18),
    color: '#0C1021',
  },
  u23: {
    marginTop: hp(10),
    paddingTop: hp(21),
    paddingLeft: wp(10),
    paddingRight: wp(42),
    paddingBottom: hp(21)
  },
  u23Text: {
    fontWeight: '400',
    fontSize: hp(12),
    color: Colors.text,
  },
  u26: {
    position: 'absolute',
    bottom: hp(5),
    width: wp(328),
    left: wp(16),
  },
  u27: {
    flex: 1,
    height: hp(50),
    backgroundColor: Colors.success,
    borderBottomLeftRadius: wp(5),
    borderTopLeftRadius: wp(5)
  },
  u28: {
    flex: 1,
    height: hp(50),
    backgroundColor: Colors.error,
    borderTopRightRadius: wp(5),
    borderBottomRightRadius: wp(5)
  },
  u26Text: {
    fontWeight: '600',
    fontSize: hp(16),
    color: Colors.white,
  },
})

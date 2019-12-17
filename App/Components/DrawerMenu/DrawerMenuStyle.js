import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  drawerBox: {
  },
  u131: {
    width: '100%',
    paddingTop: hp(10),
    height: hp(127),
  },
  topHr: {
    width: '100%',
    height: 1,
    backgroundColor: '#e8edf5'
  },
  u131Text: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: hp(14),
    color: Colors.primary,
  },
  u132: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: wp(94),
    height: hp(38),
    backgroundColor: Colors.dark,
    borderBottomLeftRadius: hp(47)
  },
  u132Text: {
    fontWeight: '500',
    fontSize: hp(10),
    color: Colors.white,
  },
  bottomHr: {
    width: '100%',
    height: 1,
    backgroundColor: '#e8edf5',
    position: 'absolute',
    bottom: hp(119),
  },
  u137: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: hp(119),
  },
  u137Text: {
    fontWeight: '600',
    fontSize: hp(22),
    color: Colors.primary,
  },
})

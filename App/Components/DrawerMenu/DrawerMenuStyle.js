import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  drawerBox: {
    // width: wp(300),
    // backgroundColor: Colors.white
  },
  u131: {
    paddingLeft: wp(20),
    paddingRight: wp(97),
    paddingTop: hp(10),
    height: hp(127),
    borderBottomWidth: 1,
    borderColor: Colors.text
  },
  u131Text: {
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
  u137: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: hp(119),
    borderTopWidth: 1,
    borderColor: Colors.text
  },
  u137Text: {
    fontWeight: '600',
    fontSize: hp(22),
    color: Colors.primary,
  },
})

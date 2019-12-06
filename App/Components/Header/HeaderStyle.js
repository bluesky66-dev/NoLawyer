import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  header: {
    width: wp(360),
    height: hp(60),
  },
  logoTxt: {
    fontWeight: '600',
    fontSize: hp(22),
    color: Colors.primary,
  },
  left: {
    position: 'absolute',
    top: hp(18),
    left: wp(15),
    width: hp(21),
    height: hp(19),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.primary
  },
  listIcon: {
    height: 1,
    width: hp(21),
    backgroundColor: Colors.primary,
  },
  right: {
    position: 'absolute',
    top: hp(18),
    right: wp(20),
    width: hp(25),
    height: hp(25),
  },
  rightImg: {
    width: '100%',
    height: '100%',
  }
})

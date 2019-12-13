// packages
import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;
// let statusBarHeight = ExtraDimensions.getStatusBarHeight();
// let softMenuBarHeight = ExtraDimensions.getSoftMenuBarHeight();
// let smartBarHeight = ExtraDimensions.getSmartBarHeight();


export default StyleSheet.create({
  rootWrapper: {
    height: screenHeight - StatusBar.currentHeight,
    position: 'relative'
  },
  profile: {
    // height: hp(535),
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

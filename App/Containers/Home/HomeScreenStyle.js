import { StyleSheet } from 'react-native'
import { heightPercentage as hp, widthPercentage as wp } from '@Common'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  home: {
    paddingLeft: wp(15),
    paddingRight: wp(15),
    paddingTop: hp(33),
  },
  u142: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(15),
    paddingRight: wp(15),
    height: hp(92),
    backgroundColor: Colors.primary,
    borderTopLeftRadius: hp(8),
    borderTopRightRadius: hp(8)
  },
  u142Text: {
    alignContent: 'flex-start',
    width: wp(175),
    paddingLeft: wp(10),
    fontWeight: '600',
    fontSize: hp(18),
    color: Colors.white,
  },
  u142Img: {
    alignContent: 'flex-end',
    marginLeft: wp(55),
    width: hp(75),
    height: hp(75)
  },
  u145: {
    padding: hp(17),
    borderColor: '#e8edf5',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  u145Text: {
    fontWeight: '400',
    fontSize: hp(12),
    color: Colors.dark,
  },
  u146: {
    paddingBottom: hp(17),
    paddingTop: hp(17),
    borderColor: '#e8edf5',
    borderWidth: 1,
    borderRadius: hp(15),
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  u146Text: {
    fontWeight: '600',
    fontSize: hp(16),
    color: Colors.primary,
  },
  u147: {
    alignItems: 'stretch',
    marginTop: hp(30),
    borderColor: '#e8edf5',
    borderWidth: 1,
    borderRadius: hp(15),
  },
  u147Text: {
    paddingTop: hp(23),
    paddingBottom: hp(23),
    flex: 1,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: hp(14),
    color: Colors.dark,
    paddingLeft: wp(10),
  },
  u149: {
    alignContent: 'flex-start',
    justifyContent: 'center',
    width: wp(46),
    borderRightWidth: 1,
    borderColor: '#e8edf5',
  },
  u149Img: {
    width: '100%',
    height: hp(26),
  },
  u150Text: {
    alignContent: 'flex-end',
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: hp(30),
    color: Colors.dark,
    paddingLeft: wp(22),
    paddingRight: wp(22),
  },
  space: {
    height: hp(66)
  },
})

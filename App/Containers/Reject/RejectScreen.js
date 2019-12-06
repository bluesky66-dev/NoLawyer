import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './RejectScreenStyle'
import { Helpers, Fonts } from 'App/Theme'
import { PoppinsText } from '@Components'
import CopyrightIcon from '@Assets/Images/copyright_icon_u32.png'

class RejectScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fillColCross,
          Style.u1View
        ]}
      >
        <View style={[Helpers.colCross, Style.u28]}>
          <Text style={[Fonts.PoppinsBlack, Style.u28Text]}>We're Sorry</Text>
          <Text style={[Fonts.PoppinsMedium, Style.u29Text]}>
            As you've rejected our terms of use, you cannot use our service
          </Text>
        </View>
        <View style={[Helpers.colCross, Style.u30]}>
          <Text style={[Fonts.PoppinsBlack, Style.u30Text]}>nolawyer</Text>
        </View>
        <View style={[Helpers.colCross, Style.u31]}>
          <Text style={[Fonts.PoppinsMedium, Style.u31Text]}>Your Self Help to Legal Justice</Text>
        </View>
        <View style={[Helpers.colCross, Style.u33]}>
          <Text style={[Fonts.PoppinsBold, Style.u33Text]}>Version 1.0</Text>
          <View style={[Helpers.rowCenter, Style.copyright]}>
            <Image style={Style.u9Img} source={CopyrightIcon} resizeMode={'contain'}/>
            <Text style={[Fonts.PoppinsRegular, Style.u33Text]}>{"2019 nolawyer.co.uk"}</Text>
          </View>
          <Text style={[Fonts.PoppinsRegular, Style.u33Text]}>All rights reserved.</Text>
        </View>
        <TouchableOpacity
          style={[Helpers.center, Style.u34]}
          onPress={() => this._toTerms()}
        >
          <Text style={[Fonts.PoppinsRegular, Style.u34Text]}>Accept Our Terms of Use</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _toTerms() {
    const {navigate} = this.props.navigation;
    navigate('TermsScreen');
  }
}

RejectScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RejectScreen)

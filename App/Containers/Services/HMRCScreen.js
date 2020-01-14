import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Style from './ServicesScreenStyle'
import { Header } from '@Components'
import { Fonts, Helpers } from 'App/Theme'

class HMRCScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
        ]}
      >
        <Header SubPage />
        <ScrollView style={[Style.serviceWrapper]}>
          <View style={Style.spaceTop}/>
          <View style={[Helpers.colCross, Style.card, Style.borderPrimary]}>
            <View style={[Style.cardTop, Helpers.center]}>
              <Text style={[Fonts.PoppinsSemiBold, Style.cardTitle]}>Dispute Congestion Charge</Text>
              <Text style={[Fonts.PoppinsRegular, Style.cardDesc]}>
                Did you miss the payment for reason beyon your control? You may be able to cancel the Congestion Charge.
              </Text>
            </View>
            <TouchableOpacity
              style={[Helpers.center, Style.CardButton, Style.bgPrimary]}
              onPress={() => this._toSolve()}
            >
              <Text style={[Fonts.PoppinsRegular, Style.ButtonText, Style.TextWhite]}>
                SOLVE MY PROBLEM
              </Text>
            </TouchableOpacity>
          </View>
          <View style={Style.spaceBottom}/>
        </ScrollView>
      </View>
    )
  }

  _toSolve() {
    const {navigate} = this.props.navigation;
    navigate('SolveScreen');
  }
}

HMRCScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HMRCScreen)

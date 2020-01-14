import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Style from './ServicesScreenStyle'
import { Header } from '@Components'
import { Fonts, Helpers } from 'App/Theme'

class ParkingScreen extends React.Component {
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
          <View style={[Helpers.colCross, Style.card, Style.cardMarginTop, Style.borderSecond]}>
            <View style={[Style.cardTop, Helpers.center]}>
              <Text style={[Fonts.PoppinsSemiBold, Style.cardTitle]}>Disciplinary Meeting at Work</Text>
              <Text style={[Fonts.PoppinsRegular, Style.cardDesc]}>
                Have you been invited to attend a disciplinary hearing or meeting?
              </Text>
            </View>
            <TouchableOpacity
              style={[Helpers.center, Style.CardButton, Style.bgSecond]}
              onPress={() => this._toSolve()}
            >
              <Text style={[Fonts.PoppinsRegular, Style.ButtonText, Style.TextDark]}>
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

ParkingScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkingScreen)

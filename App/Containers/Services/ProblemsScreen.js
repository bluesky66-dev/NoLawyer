import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Style from './ServicesScreenStyle'
import { Header } from '@Components'
import { Fonts, Helpers } from 'App/Theme'

class ProblemsScreen extends React.Component {
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
          <View style={[Helpers.colCross, Style.card, Style.borderRed]}>
            <View style={[Style.cardTop, Helpers.center]}>
              <Text style={[Fonts.PoppinsSemiBold, Style.cardTitle]}>Suspension from Work</Text>
              <Text style={[Fonts.PoppinsRegular, Style.cardDesc]}>
                Have been suspended from work due and you feel that you have done nothing wrong?
              </Text>
            </View>
            <TouchableOpacity
              style={[Helpers.center, Style.CardButton, Style.bgRed]}
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

ProblemsScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProblemsScreen)

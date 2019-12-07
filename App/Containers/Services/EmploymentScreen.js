import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ServicesScreenStyle'
import { Header } from '@Components'
import { ApplicationStyles, Helpers, Images, Fonts } from 'App/Theme'

class EmploymentScreen extends React.Component {
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
              <Text style={[Fonts.PoppinsSemiBold, Style.cardTitle]}>Unfair Dismissal</Text>
              <Text style={[Fonts.PoppinsRegular, Style.cardDesc]}>
                This is an act of employment termination made without good reason or contrary to the country's specific legislation.
              </Text>
            </View>
            <TouchableOpacity
              style={[Helpers.center, Style.CardButton, Style.bgPrimary]}
              onPress={() => this._toEmployment()}
            >
              <Text style={[Fonts.PoppinsRegular, Style.ButtonText, Style.TextWhite]}>
                SOLVE MY PROBLEM
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Helpers.colCross, Style.card, Style.cardMarginTop, Style.borderSecond]}>
            <View style={[Style.cardTop, Helpers.center]}>
              <Text style={[Fonts.PoppinsSemiBold, Style.cardTitle]}>Constructive Dismissal</Text>
              <Text style={[Fonts.PoppinsRegular, Style.cardDesc]}>
                This is when an employee resigns as a result of the employer creating a hostile work environment.
              </Text>
            </View>
            <TouchableOpacity
              style={[Helpers.center, Style.CardButton, Style.bgSecond]}
              onPress={() => this._toEmployment()}
            >
              <Text style={[Fonts.PoppinsRegular, Style.ButtonText, Style.TextDark]}>
                SOLVE MY PROBLEM
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Helpers.colCross, Style.card, Style.cardMarginTop, Style.borderThird]}>
            <View style={[Style.cardTop, Helpers.center]}>
              <Text style={[Fonts.PoppinsSemiBold, Style.cardTitle]}>Discrimination</Text>
              <Text style={[Fonts.PoppinsRegular, Style.cardDesc]}>
                Treating a person unfairly because their Age, Gender, Race, Disability, Religion, Pregnancy/Maternity, Sexualty, Marriage or civil partnership
              </Text>
            </View>
            <TouchableOpacity
              style={[Helpers.center, Style.CardButton, Style.bgThird]}
              onPress={() => this._toEmployment()}
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

  _fetchUser() {
  }
}

EmploymentScreen.propTypes = {
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
)(EmploymentScreen)

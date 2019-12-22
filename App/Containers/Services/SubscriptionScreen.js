import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import { liveInEurope } from 'App/Stores/User/Selectors'
import Style from './ServicesScreenStyle'
import { Header } from '@Components'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics } from 'App/Theme'

class SubscriptionScreen extends React.Component {
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
          <View style={[Helpers.colCross, Style.card, Style.borderSuccess]}>
            <View style={[Style.cardTop, Helpers.center]}>
              <Text style={[Fonts.PoppinsSemiBold, Style.cardTitle]}>Dispute Parking Tickets</Text>
              <Text style={[Fonts.PoppinsRegular, Style.cardDesc]}>
                Have you been sent a parking tickets because you over stayed your welcome? You may be able to cancle the parking charge
              </Text>
            </View>
            <TouchableOpacity
              style={[Helpers.center, Style.CardButton, Style.bgSuccess]}
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

SubscriptionScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  userIsLoading: state.user.userIsLoading,
  userErrorMessage: state.user.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(UserActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionScreen)

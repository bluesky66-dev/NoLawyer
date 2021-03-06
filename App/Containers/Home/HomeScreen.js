import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Style from './HomeScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import { Header } from '@Components'
import { AssistantIds } from 'App/Common'
import u143Icon from '@Assets/Images/u143onboarding.png'
import u149Icon from '@Assets/Images/onboarding_icon2_u12.png'
import u154Icon from '@Assets/Images/suspension_from_work_icon_u154.png'
import u158Icon from '@Assets/Images/disciplinary_issues_at_work_icon_u158.png'
import u162Icon from '@Assets/Images/parking_ticket_icon_u162.png'
import u169Icon from '@Assets/Images/parking_ticket_icon_u169.png'
import u170Icon from '@Assets/Images/request_refund_tv_subscription_icon_u170.png'

class HomeScreen extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
        ]}
      >
        <Header />
        <ScrollView style={[Style.home]}>
          <View style={Style.topSpace} />
          <View style={[Style.u142]}>
            <Text style={[Fonts.PoppinsBlack, Style.u142Text]}>Your Self Help to Legal Justice</Text>
            <Image style={Style.u142Img} source={u143Icon} resizeMode={'contain'}/>
          </View>
          <View style={Style.u145}>
            <Text style={[Fonts.PoppinsRegular, Style.u145Text]}>
              When you need a lawyer, you'll be surprised how much it cost to hire one. That is why nolawyer is created to provide a platform for legal information and self-help so you can get the right direction to justice that you truly deserve without giving up or breaking the bank. So find answers to your legal questions with more options, and less headaches
            </Text>
          </View>
          <View style={[Helpers.center, Style.u146]}>
            <Text style={[Fonts.PoppinsBold, Style.u146Text]}>
              What's Your Legal Problem?
            </Text>
          </View>
          <TouchableOpacity
            style={[Helpers.row, Style.u147]}
            onPress={() => this._toEmployment()}
          >
            <View style={[Style.u149]}>
              <Image style={Style.u149Img} source={u149Icon} resizeMode={'contain'}/>
            </View>
            <Text style={[Fonts.PoppinsSemiBold, Style.u147Text]}>
              Employment Tribunal Claim
            </Text>
            <Text style={[Fonts.PoppinsRegular, Style.u150Text]}>></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.row, Style.u147]}
            onPress={() => this._toProblems()}
          >
            <View style={[Style.u149]}>
              <Image style={Style.u149Img} source={u154Icon} resizeMode={'contain'}/>
            </View>
            <Text style={[Fonts.PoppinsSemiBold, Style.u147Text]}>
              Problems at Work
            </Text>
            <Text style={[Fonts.PoppinsRegular, Style.u150Text]}>></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.row, Style.u147]}
            onPress={() => this._toParking()}
          >
            <View style={[Style.u149]}>
              <Image style={Style.u149Img} source={u158Icon} resizeMode={'contain'}/>
            </View>
            <Text style={[Fonts.PoppinsSemiBold, Style.u147Text]}>
              Parking Ticket & PCN's
            </Text>
            <Text style={[Fonts.PoppinsRegular, Style.u150Text]}>></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.row, Style.u147]}
            onPress={() => this._toSubscription()}
          >
            <View style={[Style.u149]}>
              <Image style={Style.u149Img} source={u162Icon} resizeMode={'contain'}/>
            </View>
            <Text style={[Fonts.PoppinsSemiBold, Style.u147Text]}>
              Subscription Refund
            </Text>
            <Text style={[Fonts.PoppinsRegular, Style.u150Text]}>></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.row, Style.u147]}
            onPress={() => this._toHMRC()}
          >
            <View style={[Style.u149]}>
              <Image style={Style.u149Img} source={u169Icon} resizeMode={'contain'}/>
            </View>
            <Text style={[Fonts.PoppinsSemiBold, Style.u147Text]}>
              HMRC Tax and Fines
            </Text>
            <Text style={[Fonts.PoppinsRegular, Style.u150Text]}>></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.row, Style.u147]}
            onPress={() => this._toVisas()}
          >
            <View style={[Style.u149]}>
              <Image style={Style.u149Img} source={u170Icon} resizeMode={'contain'}/>
            </View>
            <Text style={[Fonts.PoppinsSemiBold, Style.u147Text]}>
              Visas & Immigration Problems
            </Text>
            <Text style={[Fonts.PoppinsRegular, Style.u150Text]}>></Text>
          </TouchableOpacity>
          <View style={Style.bottomSpace} />
        </ScrollView>
      </View>
    )
  }

  _toEmployment() {
    const {navigate} = this.props.navigation;
    // navigate('EmploymentScreen');
    navigate('SolveScreen', {assistantId: AssistantIds.EMPLOYMENT, title: 'Employment Tribunal Claim'});
  }
  _toProblems() {
    const {navigate} = this.props.navigation;
    // navigate('ProblemsScreen');
    navigate('SolveScreen', {assistantId: AssistantIds.PROBLEMS, title: 'Problems at Work'});
  }
  _toParking() {
    const {navigate} = this.props.navigation;
    // navigate('ParkingScreen');
    navigate('SolveScreen', {assistantId: AssistantIds.PARKING, title: 'Parking Ticket & PCN\'s'});
  }
  _toSubscription() {
    const {navigate} = this.props.navigation;
    // navigate('SubscriptionScreen');
    navigate('SolveScreen', {assistantId: AssistantIds.PARKING, title: 'Subscription Refund'});
  }
  _toHMRC() {
    const {navigate} = this.props.navigation;
    // navigate('HMRCScreen');
    navigate('SolveScreen', {assistantId: AssistantIds.HMRC, title: 'HMRC Tax and Fines'});
  }
  _toVisas() {
    const {navigate} = this.props.navigation;
    // navigate('VisasScreen');
    navigate('SolveScreen', {assistantId: AssistantIds.VISAS, title: 'Visas & Immigration Problems'});
  }
}

HomeScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

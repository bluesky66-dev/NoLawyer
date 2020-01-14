import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import ViewPager from '@react-native-community/viewpager';
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import { liveInEurope } from 'App/Stores/User/Selectors'
import Style from './WelcomeScreenStyle'
import { Helpers } from 'App/Theme'
import { PoppinsText } from '@Components'
import OnBoardingIcon from '@Assets/Images/onboarding_icon1_u9.png'
import OnBoardingIcon1 from '@Assets/Images/onboarding_icon2_u12.png'
import OnBoardingIcon2 from '@Assets/Images/onboarding_icon3_u15.png'
import OnBoardingIcon3 from '@Assets/Images/onboarding_icon4_u18.png'

class WelcomeScreen extends React.Component {
  viewPager: React.Ref<typeof ViewPager>;

  constructor(props: any) {
    super(props);

    this.state = {
      page: 0,
    };
    this.viewPager = React.createRef();
  }

  componentDidMount() {
  }

  onPageSelected = (e: PageSelectedEvent) => {
    this.setState({page: e.nativeEvent.position});
  };

  render() {
    const {page} = this.state;
    return (
      <View
        style={[
          Helpers.fillColCross,
        ]}
      >
        <ViewPager
          initialPage={0}
          onPageSelected={this.onPageSelected}
          style={Style.pager}
        >
          <View style={Style.u8}>
            <View style={Style.imgContainer}>
              <Image style={Style.u9Img} source={OnBoardingIcon} resizeMode={'contain'}/>
            </View>
            <View style={Style.u10}>
              <PoppinsText style={Style.u10Text}>No Lawyer? Don't Worry</PoppinsText>
            </View>
            <View style={Style.u11}>
              <PoppinsText style={Style.u11Text}>
                When you need a lawyer, you'll be surprise how much it cost to hire one. find answers to your legal questions with more options, and less headaches
              </PoppinsText>
            </View>
          </View>
          <View style={Style.u8}>
            <View style={Style.imgContainer}>
              <Image style={Style.u9Img} source={OnBoardingIcon1} resizeMode={'contain'}/>
            </View>
            <View style={Style.u10}>
              <PoppinsText style={Style.u10Text}>Never Miss Out On Justice</PoppinsText>
            </View>
            <View style={Style.u11}>
              <PoppinsText style={Style.u11Text}>
                nolawyer is created to provide a platform for legal information and self-help so you can get the right direction to justice that you truely deserve without breaking the bank.
              </PoppinsText>
            </View>
          </View>
          <View style={Style.u8}>
            <View style={Style.imgContainer}>
              <Image style={Style.u9Img} source={OnBoardingIcon2} resizeMode={'contain'}/>
            </View>
            <View style={Style.u10}>
              <PoppinsText style={Style.u10Text}>Trust and Confidence</PoppinsText>
            </View>
            <View style={Style.u11}>
              <PoppinsText style={Style.u11Text}>
                At everystep of the way, nolawyer will point you to the right direction and help you find the answers to your legal questions with more options, and less headaches
              </PoppinsText>
            </View>
          </View>
          <View style={Style.u8}>
            <View style={Style.imgContainer}>
              <Image style={Style.u9Img} source={OnBoardingIcon3} resizeMode={'contain'}/>
            </View>
            <View style={Style.u10}>
              <PoppinsText style={Style.u10Text}>Free From Anxiety</PoppinsText>
            </View>
            <View style={Style.u11}>
              <PoppinsText style={Style.u11Text}>
                When you need a lawyer, you'll be surprise how much it cost to hire one, we've got your back, so you can relax and never let that legal dispute ruin your life.
              </PoppinsText>
            </View>
          </View>
        </ViewPager>
        <View style={[Helpers.rowCross, Style.indicator]}>
          <View style={[Style.iItem, page === 0 ? Style.iActive: {}]}/>
          <View style={[Style.iItem, page === 1 ? Style.iActive: {}]}/>
          <View style={[Style.iItem, page === 2 ? Style.iActive: {}]}/>
          <View style={[Style.iItem, page === 3 ? Style.iActive: {}]}/>
        </View>
        <TouchableOpacity
          style={[Helpers.center, Style.u21]}
          onPress={() => this._toSignup()}
        >
          <PoppinsText style={Style.u21Text}>Get Started</PoppinsText>
        </TouchableOpacity>
      </View>
    )
  }

  _toSignup() {
    const {navigate} = this.props.navigation;
    navigate('TermsScreen');
  }
}

WelcomeScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen)

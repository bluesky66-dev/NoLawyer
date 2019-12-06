import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './WelcomeScreenStyle'
import { Helpers } from 'App/Theme'
import { PoppinsText } from '@Components'
import OnBoardingIcon from '@Assets/Images/onboarding_icon1_u9.png'

class WelcomeScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fillCenter,
        ]}
      >
        <View tyle={Style.u8}>
          <View style={Style.imgContainer}>
            <Image style={Style.u9Img} source={OnBoardingIcon} resizeMode={'cover'}/>
          </View>
          <View style={Style.u10}>
            <PoppinsText style={Style.u10Text}>No Lawyer? Don't Worry</PoppinsText>
          </View>
          <View style={Style.u11}>
            <PoppinsText style={Style.u11Text}>When you need a lawyer, you'll be surprise how much it cost to hire one. find answers to your legal questions with more options, and less headaches</PoppinsText>
          </View>
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
)(WelcomeScreen)

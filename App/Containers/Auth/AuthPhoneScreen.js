import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import auth from '@react-native-firebase/auth';
import PhoneInput from "react-native-phone-input";
import CountryPicker from 'react-native-country-picker-modal';
import Style from './AuthScreenStyle'
import { widthPercentage as wp } from '@Common'
import { Fonts, Helpers } from 'App/Theme'
import { ConfirmationCodeInput } from '../../Components'
import ToastActions from '../../Stores/Toast/Actions'
import UserActions from '../../Stores/User/Actions'

class AuthPhoneScreen extends React.Component {
  constructor(props) {
    super(props)
    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.state = {
      phone: '',
      confirmCode: '',
      step: 1,
      openCountry: false,
      cca2: 'US',
    }
    this.confirmation = null;
  }

  componentDidMount() {
  }

  onPressFlag() {
    this.setState({openCountry: true})
  }

  selectCountry(country) {
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2 });
  }

  async _toAuthPhone() {
    const { confirmCode, step } = this.state;
    const { showToast, showLoading } = this.props;
    showLoading(true);
    if (step === 1){
      try {
        const phone = this.phone.getValue();
        this.confirmation = await auth().signInWithPhoneNumber(phone);
        showLoading(false);
        this.setState({step: 2});
      } catch (e) {
        let errorMessage = e.message.replace(e.code, '').replace('[]', '');
        // console.log('auth phone ==', errorMessage);
        showLoading(false);
        showToast("Phone number entered is invalid")
      }
    } else if (step === 2) {
      if (confirmCode && confirmCode.length === 6) {
        try {
          await this.confirmation.confirm(confirmCode);
          showLoading(false);
        } catch (e) {
          let errorMessage = e.message.replace(e.code, '').replace('[]', '');
          showLoading(false);
          showToast('Code entered is invalid');
        }
      } else {
        showLoading(false);
        showToast('Code entered is invalid');
        return false;
      }
    }
  }

  render() {
    const { phone, confirmCode, step } = this.state;
    // console.log('confirmCode === ', confirmCode);
    return (
      <View
        style={[Helpers.fillColCross, Style.authWrapper]}
      >
        <ScrollView
          style={[
            Helpers.fill,
            Style.u35
          ]}
        >
          <View style={Style.u37}>
            <Text style={[Fonts.PoppinsBold, Style.u37Text]}>nolawyer</Text>
          </View>
          <View style={Style.u38}>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text]}>
              Welcome to nolawyer
            </Text>
            <Text style={[Fonts.PoppinsRegular, Style.u38Text, Style.u39Text]}>
              Create your nolawyer account here
            </Text>
          </View>
          <View style={Style.u41}>
            {step === 1 && <PhoneInput
              ref={(ref) => {
                this.phone = ref;
              }}
              textProps={{
                placeholder:'Mobile number'
              }}
              placeholder={'Mobile number'}
              style={[Fonts.PoppinsRegular, Style.u41Input]}
              onPressFlag={this.onPressFlag}
            />}
            {step === 2 && <ConfirmationCodeInput
              ref="codeInputRef2"
              secureTextEntry
              codeLength={6}
              space={wp(15)}
              autoFocus={true}
              ignoreCase={true}
              inputPosition='center'
              onCodeChange={(code) => { this.setState({confirmCode: code})}}
              onFulfill={(isValid) => console.log(isValid)}
              containerStyle={Style.confirmInputContainer}
              codeInputStyle={Style.confirmInput}
            />}
          </View>
          <TouchableOpacity
            style={[Helpers.center, Style.u48]}
            onPress={() => this._toAuthPhone()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text]}>{step === 1? 'Connect with Mobile Number': 'Enter Verification Code'}</Text>
          </TouchableOpacity>
          <View style={[Helpers.colCross, Style.u43]}>
            <Text style={[Fonts.PoppinsRegular, Style.u43Text]}>Already have an Account?</Text>
            <TouchableOpacity
              style={[Helpers.center, Style.u45]}
              onPress={() => this._toLogin()}
            >
              <Text style={[Fonts.PoppinsBold, Style.u50Text]}>Login with Email</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={[Helpers.center, Style.u148]}>
          <Text style={[Fonts.PoppinsRegular, Style.u148Text]}>
            By signing up, you're agreeing to nolawyer terms and conditions
          </Text>
        </View>
        {this.state.openCountry && <CountryPicker
          ref={(ref) => {
            this.countryPicker = ref;
          }}
          onSelect={value => this.selectCountry(value)}
          translation="eng"
          withFilter={true}
          withCallingCode={true}
          visible={this.state.openCountry}
          countryCode={this.state.cca2}
          onClose={() => this.setState({openCountry: false})}
        />}
      </View>
    )
  }

  _toLogin() {
    const {navigate} = this.props.navigation;
    navigate('LoginScreen');
  }
}

AuthPhoneScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  showToast: (text) => dispatch(ToastActions.showToast(text)),
  showLoading: (isShow) => dispatch(UserActions.showLoading(isShow)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPhoneScreen)

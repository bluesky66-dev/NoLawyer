import React from 'react'
import { Text, Platform, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import { liveInEurope } from 'App/Stores/User/Selectors'
import Style from './TermsScreenStyle'
import { Helpers, Fonts } from 'App/Theme'
import { PoppinsText } from '@Components'

class TermsScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Style.u1View
        ]}
      >
        <View style={Style.u22}>
          <Text style={[Style.u22Text, Fonts.PoppinsExtraBold]}>Terms of Use</Text>
        </View>
        <View style={Style.u23}>
          <PoppinsText style={Style.u23Text}>
            NoLawyer provides a platform for legal information and self-help. The information provided by NoLawyer along with the content on our website and mobile app relates to legal matters (“Legal Information”) is provided for your private and self help use only, and does not constitute or to be taken as a legal advice. NoLawyer do not review any information you provide to us for legal accuracy or sufficiency, draw legal conclusions, provide opinions about your selection of claim, cases or forms, or apply the law to the facts of your situation.
            {"\n"}
            {"\n"}
            {"\n"}
            NoLawyer strongly advice that you upon reading the information provided, that you seek legal advice for a specific problem(s), you should consult with licensed solicitors, barrister, or lawyer. As NoLawyer is not a law firm, please note that any communications between you and a NoLawyer may not be protected under the attorney-client privilege doctrine.
          </PoppinsText>
        </View>
        <View style={[Helpers.row, Style.u26]}>
          <TouchableOpacity
            style={[Helpers.center, Style.u27]}
            onPress={() => this._acceptTerm()}
          >
            <PoppinsText style={[Style.u26Text]}>Accept</PoppinsText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.center, Style.u28]}
            onPress={() => this._rejectTerm()}
          >
            <PoppinsText style={[Style.u26Text]}>Reject</PoppinsText>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _acceptTerm() {
    const {navigate} = this.props.navigation;
    navigate('AuthScreen');
  }

  _rejectTerm() {
    const {navigate} = this.props.navigation;
    navigate('RejectScreen');
  }
}

TermsScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermsScreen)

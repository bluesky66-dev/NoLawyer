import React from 'react'
import { ScrollView, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { Header } from '@Components'
import Style from './ProfileScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import UserImage from '@Assets/Images/user_image_u242.png'

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'jamesorior@gmail.com',
      password: '*************',
      phone: '+444235851499',
      pinEmail: '',
      pinPass: '',
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView>
        <View
          style={[
            Helpers.fill,
          ]}
        >
          <Header SubPage HideRight tilte={'Profile'}/>
          <View style={[Style.profile]}>
            <View style={Style.u240}>
              <Image style={Style.u240Img} source={UserImage} resizeMode={'contain'}/>
            </View>
            <View style={Style.u243}>
              <TextInput
                style={[Fonts.PoppinsRegular, Style.profileInput]}
                placeholder={'Email address'}
                keyboardType={'email-address'}
                onChangeText={text => this.setState({email: text})}
                value={this.state.email}
              />
              <TextInput
                style={[Fonts.PoppinsRegular, Style.profileInput]}
                placeholder={'Password'}
                keyboardType={'default'}
                secureTextEntry={true}
                onChangeText={text => this.setState({password: text})}
                value={this.state.password}
              />
              <TextInput
                style={[Fonts.PoppinsRegular, Style.profileInput]}
                placeholder={'Phone number'}
                keyboardType={'numeric'}
                onChangeText={text => this.setState({phone: text})}
                value={this.state.phone}
              />
            </View>
            <View style={Style.u246}>
              <Text style={Style.u246Text}>Choose pin code fast login</Text>
            </View>
            <View style={Style.u248}>
              <TextInput
                style={[Fonts.PoppinsRegular, Style.profileInput]}
                placeholder={'Password'}
                keyboardType={'default'}
                secureTextEntry={true}
                onChangeText={text => this.setState({pinPass: text})}
                value={this.state.pinPass}
              />
              <TextInput
                style={[Fonts.PoppinsRegular, Style.profileInput]}
                placeholder={'Email address'}
                keyboardType={'email-address'}
                onChangeText={text => this.setState({pinEmail: text})}
                value={this.state.pinEmail}
              />
            </View>
            <TouchableOpacity
              style={[Helpers.center, Style.u21]}
              onPress={() => this._updateProfile()}
            >
              <Text style={[Fonts.PoppinsMedium, Style.u21Text]}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }

  _updateProfile() {
  }
}

ProfileScreen.propTypes = {
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
)(ProfileScreen)

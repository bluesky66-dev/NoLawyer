import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import { liveInEurope } from 'App/Stores/User/Selectors'
import { Header } from '@Components'
import Style from './ProfileScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import UserImage from '@Assets/Images/user_image_u242.png'
import CameraIcon from '@Assets/Images/camera-icon.png'

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'jamesorior@gmail.com',
      password: '*************',
      phone: '+444235851499',
      pinEmail: '',
      pinPass: '',
      avatar: {
        uri: '',
        path: 'users'
      },
      isLoading: false,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ScrollView>
        <View
        style={[
          Style.rootWrapper,
          Helpers.fill,
        ]}
        >
          <Header SubPage HideRight tilte={'Profile'}/>
          <View style={[Helpers.colCross, Style.profile]}>
            <TouchableOpacity
              onPress={() => this._handleChoosePhoto()}
              style={Style.u240}>
              <Image style={Style.u240Img} source={UserImage} resizeMode={'contain'}/>
              {/*<TouchableOpacity*/}
              {/*  style={[Helpers.center, Style.avatarBtn]}*/}
              {/*  onPress={() => this._updateAvatar()}*/}
              {/*>*/}
              {/*  <Image style={Style.cameraIcon} source={CameraIcon} resizeMode={'contain'}/>*/}
              {/*</TouchableOpacity>*/}
            </TouchableOpacity>
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
          </View>
          <TouchableOpacity
            style={[Helpers.center, Style.u21]}
            onPress={() => this._updateProfile()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u21Text]}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  _updateProfile() {
  }
  _handleChoosePhoto = () => {
    let mainThis = this;
    const options = {
      title: 'Select Avatar',
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        skipBackup: true,
      },
    };
    try {
      mainThis.setState({isLoading: true});
      ImagePicker.showImagePicker(options, (response) => {
        //console.log('======= Response = ', response);
        if (response.didCancel) {
          //console.log('======= User cancelled image picker');
        } else if (response.error) {
          //console.log('======= ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          //console.log('======= User tapped custom button: ', response.customButton);
        } else {
          if (typeof response.uri !== 'undefined') {
            ImageResizer.createResizedImage(response.uri, 300, 300, 'JPEG', 70).then(async (newImage) => {
              //console.log('newImage ===', newImage);
              try {
                let image: any = {};
                image.uri = newImage.uri;
                //console.log('image.uri', image.uri);
                // const uploadPath = await authActions.uploadFile(newImage.uri, 'users');
                // console.log(uploadPath);
                // modalThis.setState({isLoading: false});
                // if (uploadPath) {
                //   modalThis.props.onChange({avatar: uploadPath});
                // }

                mainThis.setState({avatar: image});
              } catch (e) {
                console.log(e.message);
                mainThis.setState({isLoading: false});
              }
            }).catch((err) => {
              console.log(err.message);
              mainThis.setState({isLoading: false});
            });
          } else {
            mainThis.setState({isLoading: false});
          }
        }
        mainThis.setState({isLoading: false});
      });
    } catch (e) {
      console.log(e.message);
      mainThis.setState({isLoading: false});
    }
  };
}

ProfileScreen.propTypes = {
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
)(ProfileScreen)

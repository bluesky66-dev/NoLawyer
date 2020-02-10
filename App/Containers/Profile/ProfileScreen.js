import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'
import ImageResizer from 'react-native-image-resizer'
import { Header } from '@Components'
import Style from './ProfileScreenStyle'
import { Fonts, Helpers } from 'App/Theme'
import UserImage from '@Assets/Images/u143onboarding.png'
import CameraIcon from '@Assets/Images/camera-icon.png'

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: '',
      email: '',
      password: '',
      phone: '',
      pinRCode: '',
      pinCode: '',
      avatar: {
        uri: '',
        path: 'users'
      },
      photoURL: null,
      isLoading: false,
    }
  }

  componentDidMount() {
    const { userInfo } = this.props;
    console.log('userInfo ===', userInfo);
    const user = typeof userInfo.user !== 'undefined' ? userInfo.user: userInfo;
    this.setState({
      email: user.email,
      phone: user.phoneNumber,
      uid: user.uid,
      photoURL: user.photoURL,
    });
  }

  render() {
    const { email, phone, photoURL } = this.state;
    const userPhoto = photoURL ? { uri: photoURL } : UserImage;
    return (
      <View
        style={[
          Helpers.fill,
        ]}
      >
        <ScrollView
        style={[
          Style.rootWrapper,
          Helpers.fill,
        ]}
        >
          <Header SubPage HideRight tilte={'Profile'}/>
          <View style={[Helpers.colCross, Style.profile]}>
            <View
              style={Style.u240}>
              <Image style={Style.u240Img} source={userPhoto} resizeMode={'contain'}/>
              <TouchableOpacity
                style={[Helpers.center, Style.avatarBtn]}
                onPress={() => this._handleChoosePhoto()}
              >
                <Image style={Style.cameraIcon} source={CameraIcon} resizeMode={'contain'}/>
              </TouchableOpacity>
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
                placeholder={'Choose 6 digit code'}
                keyboardType={'numeric'}
                secureTextEntry={true}
                onChangeText={text => this.setState({pinCode: text})}
                value={this.state.pinCode}
              />
              <TextInput
                style={[Fonts.PoppinsRegular, Style.profileInput]}
                placeholder={'Confirm your 6 digit code'}
                keyboardType={'numeric'}
                onChangeText={text => this.setState({pinRCode: text})}
                value={this.state.pinRCode}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={[Helpers.center, Style.u21]}
          onPress={() => this._updateProfile()}
        >
          <Text style={[Fonts.PoppinsMedium, Style.u21Text]}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _updateProfile() {
  }
  _handleChoosePhoto = () => {
    let mainThis = this;
    const options = {
      title: 'Select Picture',
      takePhotoButtonTitle: 'Take your picture',
      chooseFromLibraryButtonTitle: 'Choose picture from phone',
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
}

const mapStateToProps = (state) => ({
  userInfo: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)

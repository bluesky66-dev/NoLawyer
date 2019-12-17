import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'
import ImageResizer from "react-native-image-resizer"
import DocumentPicker from 'react-native-document-picker';
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { Header } from '@Components'
import Style from './HelpScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class UploadScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
        ]}
      >
        <Header
          SubPage
          HideRight
          title={'Upload Documents for Review'}
          titleStyle={[Fonts.PoppinsExtraBold, Style.title]}/>
        <View style={[Helpers.fillCenter, Style.u308]}>
          <TouchableOpacity
            style={[Helpers.center, Style.helpButton, Style.primaryBtn]}
            onPress={() => this._openCamera()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.whiteText]}>
              Take a picture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Helpers.center, Style.helpButton, Style.errorBtn]}
            onPress={() => this._pickDocument()}
          >
            <Text style={[Fonts.PoppinsMedium, Style.u48Text, Style.whiteText]}>
              Upload document on your phone
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _openCamera() {
    let mainThis = this;
    const options = {
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        skipBackup: true,
      },
    };
    try {
      mainThis.setState({isLoading: true});
      ImagePicker.launchCamera(options, (response) => {
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
  }
  async _pickDocument() {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }

  }
}

UploadScreen.propTypes = {
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
)(UploadScreen)

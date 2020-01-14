import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Header } from '@Components'
import Style from './HelpScreenStyle'
import { Fonts, Helpers } from 'App/Theme'

class PrivacyScreen extends React.Component {
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
          title={'Privacy'}
          titleStyle={[Fonts.PoppinsExtraBold, Style.title]}/>
        <ScrollView style={Style.u259}>
          <Text style={[Style.u259Text, Fonts.PoppinsRegular]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget
          </Text>
          <Text style={[Style.u259Text, Fonts.PoppinsRegular]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget
          </Text>
          <Text style={[Style.u259Text, Fonts.PoppinsRegular]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget
          </Text>
          <Text style={[Style.u259Text, Fonts.PoppinsRegular]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget
          </Text>
        </ScrollView>
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

PrivacyScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacyScreen)

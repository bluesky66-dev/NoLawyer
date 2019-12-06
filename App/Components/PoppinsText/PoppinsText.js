import React, { Component } from 'react'
import { Text } from 'react-native'
import styles from './PoppinsTextStyle'

export default class PoppinsText extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let style = [];
        style.push(styles.PoppinsRegular);
        if (typeof this.props.style !== 'undefined') {
            style = style.concat(this.props.style);
        }

        return (
          <Text style={style}>{this.props.children}</Text>
        );
    }
}

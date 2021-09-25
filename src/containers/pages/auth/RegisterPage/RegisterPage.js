import React, {Component} from 'react';
import {View} from 'react-native';
import {colour} from '../../../../assets/styles';
import RegisterTemp from '../../../templates/auth/RegisterTemp';

class RegisterPage extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colour.WHITE}}>
        <RegisterTemp />
      </View>
    );
  }
}

export default RegisterPage;

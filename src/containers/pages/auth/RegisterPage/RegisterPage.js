import React, {Component} from 'react';
import {View} from 'react-native';
import {colour} from '../../../../assets/styles';
import {_replace} from '../../../../config/routes/NavigationServices';
import {screens} from '../../../../config/routes/screens';
import RegisterTemp from '../../../templates/auth/RegisterTemp';

class RegisterPage extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colour.WHITE}}>
        <RegisterTemp onSubmit={() => _replace(screens.register)} />
      </View>
    );
  }
}

export default RegisterPage;

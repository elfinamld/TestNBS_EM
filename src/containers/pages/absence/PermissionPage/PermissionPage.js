import React, {Component} from 'react';
import {View} from 'react-native';
import {styling} from '../../../../assets/styles';
import PermitSickTemp from '../../../templates/absence/PermitSickTemp';

class PermissionPage extends Component {
  render() {
    return (
      <View style={styling.bodyFlex}>
        <PermitSickTemp
          title={'Permission'}
          type={'Type of Disease'}
          placeholder={'Example: Cuti'}
        />
      </View>
    );
  }
}

export default PermissionPage;

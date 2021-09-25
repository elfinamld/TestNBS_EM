import React, {Component} from 'react';
import {View} from 'react-native';
import {styling} from '../../../../assets/styles';
import PermitSickTemp from '../../../templates/absence/PermitSickTemp/PermitSickTemp';

class SickPage extends Component {
  render() {
    return (
      <View style={styling.bodyFlex}>
        <PermitSickTemp
          title={'Sick'}
          type={'Reason'}
          placeholder={'Example: Covid'}
        />
      </View>
    );
  }
}

export default SickPage;

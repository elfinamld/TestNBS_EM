import React, {Component} from 'react';
import {View} from 'react-native';
import {styling} from '../../../../assets/styles';
import CheckInOutTemp from '../../../templates/absence/CheckInOutTemp';

class CheckInPage extends Component {
  render() {
    return (
      <View style={styling.bodyFlex}>
        <CheckInOutTemp title={'Check In'} />
      </View>
    );
  }
}

export default CheckInPage;

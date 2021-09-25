import React from 'react';
import {View} from 'react-native';
import {styling} from '../../../../assets/styles';
import CheckInOutTemp from '../../../templates/absence/CheckInOutTemp';

const CheckOutPage = () => {
  return (
    <View style={styling.bodyFlex}>
      <CheckInOutTemp title={'Check Out'} />
    </View>
  );
};

export default CheckOutPage;

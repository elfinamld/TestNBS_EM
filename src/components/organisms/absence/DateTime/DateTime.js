import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import {fonts} from '../../../../assets/styles';
import {widthScreen} from '../../../../assets/styles/styling';

const DateTime = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{...fonts.semiBold_14, width: widthScreen * 0.2}}>
        Date/Time
      </Text>
      <Text style={{...fonts.medium_14}}>
        {moment().format('DD MMMM YYYY HH:mm')}
      </Text>
    </View>
  );
};

export default DateTime;

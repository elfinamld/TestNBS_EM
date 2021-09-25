import React from 'react';
import {View} from 'react-native';
import {styling} from '../../../../assets/styles';
import HeaderBack from '../../../../components/molecules/headers/HeaderBack/HeaderBack';
import TabHistory from '../../../../components/organisms/history/TabHistory';
import {_goBack} from '../../../../config/routes/NavigationServices';

const HistoryTemp = () => {
  return (
    <View style={styling.bodyFlex}>
      <HeaderBack handleBack={_goBack} />
      <TabHistory />
    </View>
  );
};

export default HistoryTemp;

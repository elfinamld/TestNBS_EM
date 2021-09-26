import React from 'react';
import {View, Text} from 'react-native';
import {fonts, styling} from '../../../../assets/styles';
import HeaderBack from '../../../../components/molecules/headers/HeaderBack/HeaderBack';
import TabHistory from '../../../../components/organisms/history/TabHistory';
import {_goBack} from '../../../../config/routes/NavigationServices';

const HistoryTemp = () => {
  return (
    <View style={styling.bodyFlex}>
      <HeaderBack handleBack={_goBack} />
      <Text
        style={{
          textAlign: 'center',
          ...fonts.bold_24,
          marginTop: 20,
        }}>
        History
      </Text>
      <TabHistory />
    </View>
  );
};

export default HistoryTemp;

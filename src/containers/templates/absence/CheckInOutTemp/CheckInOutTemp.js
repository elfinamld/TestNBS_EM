import React from 'react';
import {Text, View} from 'react-native';
import {fonts, styling} from '../../../../assets/styles';
import ButtonContained from '../../../../components/molecules/button/ButtonContained/ButtonContained';
import HeaderBack from '../../../../components/molecules/headers/HeaderBack/HeaderBack';
import ToggleRow from '../../../../components/molecules/toggle/ToggleRow/ToggleRow';
import DateTime from '../../../../components/organisms/absence/DateTime/DateTime';
import Remarks from '../../../../components/organisms/absence/Remarks';
import TakePhoto from '../../../../components/organisms/absence/TakePhoto';
import {_goBack} from '../../../../config/routes/NavigationServices';

const CheckInOutTemp = ({title, onPress}) => {
  return (
    <View style={styling.bodyFlex}>
      <HeaderBack handleBack={_goBack} />
      <View style={{padding: 20}}>
        <Text style={{textAlign: 'center', ...fonts.bold_24, marginBottom: 20}}>
          {title}
        </Text>
        <DateTime />
        <ToggleRow />
        <TakePhoto />
        <Remarks />
        <ButtonContained style={{marginTop: 50}} onPress={onPress}>
          SUBMIT
        </ButtonContained>
      </View>
    </View>
  );
};

CheckInOutTemp.defaultProps = {
  title: 'Check In',
};

export default CheckInOutTemp;

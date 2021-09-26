import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
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
    <KeyboardAvoidingView
      style={{flex: 1, marginBottom: Platform.OS === 'ios' ? 50 : 0}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <SafeAreaView style={styling.bodyFlex}>
        <HeaderBack handleBack={_goBack} />
        <ScrollView style={{padding: 20, flex: 1}}>
          <Text
            style={{textAlign: 'center', ...fonts.bold_24, marginBottom: 20}}>
            {title}
          </Text>
          <DateTime />
          <ToggleRow />
          <TakePhoto />
          <Remarks title={'Remarks'} placeholder={'Example: Fixing view'} />
          <ButtonContained
            style={{marginTop: 50, marginBottom: 50}}
            onPress={onPress}>
            SUBMIT
          </ButtonContained>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

CheckInOutTemp.defaultProps = {
  title: 'Check In',
};

export default CheckInOutTemp;

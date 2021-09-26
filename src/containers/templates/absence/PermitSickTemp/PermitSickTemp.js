import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {fonts, styling} from '../../../../assets/styles';
import ButtonContained from '../../../../components/molecules/button/ButtonContained/ButtonContained';
import HeaderBack from '../../../../components/molecules/headers/HeaderBack/HeaderBack';
import FromToDate from '../../../../components/organisms/absence/FromToDate';
import Remarks from '../../../../components/organisms/absence/Remarks';
import {_goBack} from '../../../../config/routes/NavigationServices';

const PermitSickTemp = ({title, onPress, type, placeholder}) => {
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
          <FromToDate />
          <Remarks title={type} placeholder={placeholder} />
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

PermitSickTemp.defaultProps = {
  title: 'Check In',
};

export default PermitSickTemp;

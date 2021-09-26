import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../../assets/styles';
import {widthScreen} from '../../../../assets/styles/styling';
import styles from './styles';

const RowText = ({text, date, setDate, setShow, show, mode, setMode}) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const dates = date.toString().split('').slice(4, 15).join('');
  return (
    <View
      style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center'}}>
      <View style={{width: widthScreen * 0.15}}>
        <Text style={{...fonts.medium_13}}>{text || 'From'}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.press} onPress={() => setShow(true)}>
          <Text style={{...fonts.reg_13}}>{`${dates}`}</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

export default RowText;

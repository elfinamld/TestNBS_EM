import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {fonts} from '../../../../assets/styles';
import styles from './styles';

const RowText = ({text, setOpen, open, date, setDate, start, startOne}) => {
  return (
    <View
      style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center'}}>
      <View style={{flex: 0.3}}>
        <Text style={{...fonts.medium_13}}>{text || 'From'}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.press} onPress={() => setOpen(true)}>
          <Text style={{...fonts.reg_13}}>{`${startOne ? start : date}`}</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode={'date'}
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </View>
  );
};

export default RowText;

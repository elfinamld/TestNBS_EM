import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {fonts} from '../../../../assets/styles';
import {widthScreen} from '../../../../assets/styles/styling';
import styles from './styles';

const RowText = ({
  text,
  setOpen,
  open,
  date,
  setDate,
  setOpen2,
  open2,
  date2,
  setDate2,
  start2,
  startFrom,
}) => {
  return (
    <View
      style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center'}}>
      <View style={{width: widthScreen * 0.15}}>
        <Text style={{...fonts.medium_13}}>{text || 'From'}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.press} onPress={() => setOpen(true)}>
          <Text style={{...fonts.reg_13}}>{`${startFrom ? date : date2}`}</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode={'date'}
          open={startFrom ? open : open2}
          date={startFrom ? date : date2}
          onConfirm={newDate => {
            if (startFrom) {
              setOpen(false);
              setDate(newDate);
            } else {
              setOpen2(false);
              setDate2(newDate);
            }
          }}
          onCancel={() => {
            if (startFrom) {
              setOpen(false);
            } else {
              setOpen2(false);
            }
          }}
        />
      </View>
    </View>
  );
};

export default RowText;

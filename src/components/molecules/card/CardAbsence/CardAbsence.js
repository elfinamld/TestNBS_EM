import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {fonts} from '../../../../assets/styles';
import styles from './styles';

const CardAbsence = () => {
  const absence = useMemo(
    () => [
      {
        label: 'Permission',
        total: 0,
      },
      {
        label: 'Sick',
        total: 0,
      },
      {
        label: 'Leave',
        total: 0,
      },
    ],
    [],
  );
  return (
    <View>
      <Text style={{...fonts.semiBold_14}}>Absence</Text>
      <Card style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {absence.map((el, id) => {
            return (
              <View key={id} style={{alignItems: 'center'}}>
                <Text style={{...fonts.reg_13}}>{el.total}</Text>
                <Text style={{...fonts.medium_12}}>{el.label}</Text>
              </View>
            );
          })}
        </View>
      </Card>
    </View>
  );
};

export default CardAbsence;

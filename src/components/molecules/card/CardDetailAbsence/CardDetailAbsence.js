import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {fonts} from '../../../../assets/styles';
import {widthScreen} from '../../../../assets/styles/styling';

const CardDetailAbsence = ({item, datas}) => {
  return (
    <Card
      style={{
        marginHorizontal: 20,
        padding: 15,
        marginTop: 20,
        borderWidth: 0.4,
        borderRadius: 10,
      }}>
      <View>
        {datas.map((el, id) => (
          <View
            key={id}
            style={{
              flexDirection: 'row',
              marginBottom: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: widthScreen * 0.25,
                ...fonts.medium_12,
              }}>{`${el?.label}:`}</Text>
            <Text
              style={{
                width: widthScreen * 0.6,
                ...fonts.reg_12,
              }}>
              {el?.detail}
            </Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default CardDetailAbsence;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import {colour, fonts} from '../../../../assets/styles';

const ToggleRow = () => {
  const [value, setValue] = React.useState('In the Office');
  return (
    <Card
      style={{
        borderRadius: 8,
        borderWidth: 0.5,
        marginTop: 20,
        borderColor: colour.GREEN[6],
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRightColor: colour.GREEN[6],
        borderBottomColor: colour.GREEN[6],
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            flex: 0.5,
            padding: 10,
            borderRadius: 8,
            backgroundColor:
              value === 'In the Office' ? colour.GREEN[6] : 'transparent',
          }}
          activeOpacity={0.5}
          onPress={() => setValue('In the Office')}>
          <Text
            style={{
              ...fonts.semiBold_13,
              textAlign: 'center',
              color: value === 'In the Office' ? colour.WHITE : colour.TEXT,
            }}>
            In the Office
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            flex: 0.5,
            padding: 10,
            borderRadius: 8,
            backgroundColor:
              value === 'Outside the Office' ? colour.GREEN[6] : 'transparent',
          }}
          onPress={() => setValue('Outside the Office')}>
          <Text
            style={{
              ...fonts.semiBold_13,
              textAlign: 'center',
              color:
                value === 'Outside the Office' ? colour.WHITE : colour.TEXT,
            }}>
            Outside the Office
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default ToggleRow;

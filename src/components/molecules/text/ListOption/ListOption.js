/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const ListOption = ({length, index, name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        borderBottomColor:
          length - 1 === index ? 'transparent' : colour.GREEN[3],
        borderBottomWidth: 1,

        paddingHorizontal: 15,
        marginHorizontal: 15,
        paddingVertical: 20,
      }}>
      <Text
        style={{...fonts.medium_14, textAlign: 'center', color: colour.TEXT}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

ListOption.defaultProps = {
  name: 'Text',
  onPress: () => {},
};
export default ListOption;

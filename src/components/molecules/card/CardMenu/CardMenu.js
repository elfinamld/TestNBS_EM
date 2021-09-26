import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colour, fonts} from '../../../../assets/styles';
import styles from './styles';

const CardMenu = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => onPress(item?.screen)}>
      <View style={styles.bgColor}>
        <Icon name={item?.icon} size={30} color={colour.GREEN[6]} />
      </View>
      <Text style={{...fonts.reg_12, marginTop: 7}}>{item?.label}</Text>
    </TouchableOpacity>
  );
};

export default CardMenu;

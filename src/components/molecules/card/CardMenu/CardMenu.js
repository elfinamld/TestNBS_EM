import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {fonts} from '../../../../assets/styles';
import styles from './styles';

const CardMenu = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => onPress(item?.screen)}>
      <Icon name={item?.icon} size={30} />
      <Text style={{...fonts.reg_12, marginTop: 7}}>{item?.label}</Text>
    </TouchableOpacity>
  );
};

export default CardMenu;

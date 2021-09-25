import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const CardMenu = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <Icon name={item?.icon} size={30} />
      <Text>{item?.label}</Text>
    </View>
  );
};

export default CardMenu;

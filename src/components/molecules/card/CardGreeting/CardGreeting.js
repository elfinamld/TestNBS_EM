import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-paper';
import {fonts} from '../../../../assets/styles';
import styles from './styles';

const CardGreeting = ({style}) => {
  return (
    <Card style={[styles.wrap, style]}>
      <Text style={{...fonts.reg_14}}>Good Morning!</Text>
      <Text style={{...fonts.bold_15}}>Lorem Ipsum</Text>
    </Card>
  );
};

export default CardGreeting;

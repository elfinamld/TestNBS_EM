import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './styles';

const CardGreeting = ({style}) => {
  return (
    <Card style={[styles.wrap, style]}>
      <Text>Good Morning!</Text>
      <Text>Jay Park</Text>
    </Card>
  );
};

export default CardGreeting;

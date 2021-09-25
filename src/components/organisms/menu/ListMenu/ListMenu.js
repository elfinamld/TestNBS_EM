import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {fonts} from '../../../../assets/styles';
import ListNoScroll from '../../../molecules/list/ListNoScroll';
import styles from './styles';

const iconMenu = [
  {
    icon: 'sign-in',
    label: 'Check-In',
  },
  {
    icon: 'sign-in',
    label: 'Check-Out',
  },
  {
    icon: 'sign-in',
    label: 'Permission',
  },
  {
    icon: 'sign-in',
    label: 'Sick',
  },
  {
    icon: 'sign-in',
    label: 'Leave',
  },
  {
    icon: 'sign-in',
    label: 'Exit',
  },
];

const ListMenu = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{...fonts.semiBold_14}}>Quick Access</Text>

      <ListNoScroll
        data={iconMenu}
        contentContainerStyle={[
          styles.list,
          {paddingHorizontal: 15, marginTop: 10},
        ]}
        component={'CardMenu'}
        horizontal
      />
    </View>
  );
};

export default ListMenu;

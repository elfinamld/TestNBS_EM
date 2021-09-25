import React from 'react';
import {Text, View} from 'react-native';
import {fonts} from '../../../../assets/styles';
import {_push} from '../../../../config/routes/NavigationServices';
import {screens} from '../../../../config/routes/screens';
import ListNoScroll from '../../../molecules/list/ListNoScroll';
import styles from './styles';

const iconMenu = [
  {
    icon: 'sign-in',
    label: 'Check-In',
    screen: screens.check_in,
  },
  {
    icon: 'sign-out',
    label: 'Check-Out',
    screen: screens.check_out,
  },
  {
    icon: 'archive',
    label: 'Permission',
    screen: screens.login,
  },
  {
    icon: 'stethoscope',
    label: 'Sick',
    screen: screens.sick,
  },
  {
    icon: 'list-alt',
    label: 'History',
    screen: screens.login,
  },
  {
    icon: 'close',
    label: 'Exit',
    screen: screens.login,
  },
];

const ListMenu = () => {
  const _goTo = screen => {
    _push(screen);
  };
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
        itemProps={{
          onPress: _goTo,
        }}
      />
    </View>
  );
};

export default ListMenu;

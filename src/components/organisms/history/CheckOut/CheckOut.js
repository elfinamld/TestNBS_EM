import React from 'react';
import {View} from 'react-native';
import ListNoScroll from '../../../molecules/list/ListNoScroll';

const CheckOut = ({data}) => {
  return (
    <View>
      <ListNoScroll
        data={[0, 1, 2, 3]}
        component={'CardDetailAbsence'}
        itemProps={{datas: data}}
      />
    </View>
  );
};

export default CheckOut;

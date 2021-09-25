import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ListNoScroll from '../../../molecules/list/ListNoScroll';

const CheckIn = ({data}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, marginTop: 20}}>
        <ListNoScroll
          data={[0, 1, 2, 3, 4]}
          component={'CardDetailAbsence'}
          itemProps={{datas: data}}
          contentContainerStyle={{paddingBottom: 20}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckIn;

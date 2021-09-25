import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {colour, fonts, styling} from '../../../../assets/styles';
import {widthScreen} from '../../../../assets/styles/styling';
import Remarks from '../../absence/Remarks';
import CheckIn from '../CheckIn';
import {
  CheckInData,
  CheckLeaveData,
  CheckOutData,
  CheckPermissionData,
  CheckSickData,
} from './ListData';

const _TabBar = ({jumpTo, navigationState}) => {
  const {routes} = navigationState;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      {routes.map((route, index) => {
        const focused = index === navigationState.index;
        const isMidUnactive = navigationState.index !== 1 && index === 1;
        const isMidActive = navigationState.index === 1 && index === 0;
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={{marginRight: 24}}
            onPress={() => !focused && jumpTo(route.key)}
            containerStyle={[
              S.tab,
              styling.itemCentered,
              (isMidUnactive || isMidActive) && {
                backgroundColor: colour.WHITE,
              },
              focused && {
                backgroundColor: colour.WHITE,
              },
            ]}>
            <View>
              <Text style={[S.label, focused && {color: colour.BLUE[2]}]}>
                {route.title}
              </Text>
              <View
                style={[
                  focused && {
                    width: 20,
                    alignSelf: 'center',
                    height: 6,
                    marginTop: 8,
                    borderRadius: 8,
                    backgroundColor: colour.BLUE[3],
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabHistory = ({...other}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Check In'},
    {key: 'second', title: 'Check Out'},
    {key: 'third', title: 'Permission'},
    {key: 'fourth', title: 'Sick'},
    {key: 'fifth', title: 'Leave'},
  ]);

  const renderScene = SceneMap({
    first: () => <CheckIn data={CheckInData} />,
    second: () => <CheckIn data={CheckOutData} />,
    third: () => <CheckIn data={CheckPermissionData} />,
    fourth: () => <CheckIn data={CheckSickData} />,
    fifth: () => <CheckIn data={CheckLeaveData} />,
  });
  return (
    <TabView
      style={{flex: 1, marginTop: 25}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: widthScreen}}
      renderTabBar={_TabBar}
      swipeEnabled
    />
  );
};

const S = StyleSheet.create({
  contain: {
    paddingHorizontal: 13,
    flex: 1,
    overflow: 'visible',
    // backgroundColor: 'yellow',
    backgroundColor: colour.BLUE[2],
  },
  tabBar: {
    height: 40,
    backgroundColor: colour.RED,
    width: '100%',
  },
  tab: {
    borderRadius: 0,
    backgroundColor: 'transparent',
    flex: 1,
    height: '100%',
  },
  label: {
    ...fonts.semiBold_14,
    fontSize: 16,
    color: colour.TEXT,
    textTransform: 'capitalize',
    borderRadius: 0,
  },
});

export default TabHistory;

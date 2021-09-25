import React from 'react';
import {View} from 'react-native';
import * as Components from '../../card';
import styles from './styles';
const ListNoScroll = ({
  data,
  component,
  render,
  contentContainerStyle,
  itemProps,
  horizontal,
  ...other
}) => {
  const Component = Components[component];
  return (
    <View style={[contentContainerStyle, horizontal && styles.horizontal]}>
      {data.map((el, id) => {
        return (
          <Component key={id.toString()} item={el} index={id} {...itemProps} />
        );
      })}
    </View>
  );
};
ListNoScroll.defaultProps = {
  data: [],
  itemProps: null,
};

export default ListNoScroll;

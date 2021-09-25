import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {colour, styling} from '../../../../assets/styles';

const HeaderBack = ({
  handleBack,
  style,
  styleContent,
  onPress,
  titleHeader,
  titleStyle,
  noShadow,
  title,
}) => {
  return (
    <Appbar.Header style={[noShadow && styling.noShadow, S.container, style]}>
      <Appbar.BackAction onPress={handleBack} />
      <Appbar.Content
        title={title || titleHeader}
        titleStyle={titleStyle}
        onPress={onPress ? onPress : () => {}}
        style={styleContent}
      />
    </Appbar.Header>
  );
};

const S = StyleSheet.create({
  container: {
    backgroundColor: colour.WHITE,
  },
});

export default HeaderBack;

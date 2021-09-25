import React from 'react';
import {View, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {colour, fonts} from '../../../../assets/styles';

const TextWithLink = ({
  style,
  text,
  textLink,
  onPress,
  textStyle,
  textLinkStyle,
  loading,
}) => {
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
      <Text style={[{...fonts.reg_12, color: colour.NORMAL}, textStyle]}>
        {text}{' '}
        <Text
          style={[{...fonts.semiBold_12, color: colour.PRIMARY}, textLinkStyle]}
          onPress={onPress}>
          {textLink}
        </Text>
      </Text>
      {loading ? (
        <ActivityIndicator
          size={12}
          animating={true}
          color={colour.PRIMARY}
          style={{marginLeft: 10}}
        />
      ) : null}
    </View>
  );
};

TextWithLink.defaultProps = {
  onPress: () => {},
  loading: false,
};

export default TextWithLink;

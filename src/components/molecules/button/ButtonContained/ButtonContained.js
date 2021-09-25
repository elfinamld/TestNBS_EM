/* eslint-disable react-native/no-inline-styles */
import {debounce} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {colour, styling} from '../../../../assets/styles';
import styles from './styles';
const ThemeColor = [
  {primary: colour.GREEN[3], text: colour.WHITE}, //outlined 0
  {primary: colour.WHITE, text: colour.GREEN[2]}, //text 1
  {primary: colour.SOFT[2], text: colour.TEXT}, //text 1
];

const ButtonContained = ({
  mode,
  style,
  loading,
  labelStyle,
  themeColor,
  btnStyle,
  color,
  radius,
  disabled,
  onPress,
  children,
  ...otherProps
}) => {
  const isOutlined = mode === 'outlined';
  const isText = mode === 'text';
  const debouncedFunction = debounce(() => {
    onPress();
    console.log('debounced');
  }, 300);
  return (
    <View style={style}>
      <Button
        loading={loading}
        labelStyle={[
          styles.label,
          isText && styles.noMargin,
          ThemeColor[themeColor].text && {
            color: ThemeColor[themeColor].text,
          },
          labelStyle,
        ]}
        style={[
          styling.noShadow,
          isOutlined && {
            borderColor: ThemeColor[themeColor].primary,
            ...styles.outlined,
          },
          disabled && {
            backgroundColor: isOutlined
              ? 'transparent'
              : color
              ? color
              : colour.PRIMARY,
            opacity: 0.6,
          },
          btnStyle,
        ]}
        mode={mode}
        onPress={debouncedFunction}
        disabled={disabled}
        color={color}
        theme={{roundness: radius, colors: ThemeColor[themeColor]}}
        title={children}
        {...otherProps}>
        {children}
      </Button>
    </View>
  );
};

ButtonContained.propTypes = {
  themeColor: PropTypes.number,
  onPress: PropTypes.func,
  mode: PropTypes.oneOf(['contained', 'outlined', 'text']).isRequired,
};

ButtonContained.defaultProps = {
  themeColor: 0,
  onPress: () => {},
  mode: 'contained',
  radius: 8,
};

export default ButtonContained;

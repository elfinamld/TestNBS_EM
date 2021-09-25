/* eslint-disable react-native/no-inline-styles */
import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import {FontFamily} from '../../../../assets/styles/fonts';
import colour from '../../../../assets/styles/colour';
import styles from './styles';

const themeInput = {
  colors: {
    primary: colour.GREEN[6],
    placeholder: colour.GREEN[1],
  },
  fonts: {
    regular: {...FontFamily.regular},
  },
};

const InputText = forwardRef(
  (
    {
      style,
      styleInput,
      value,
      handleChange,
      handleBlur,
      handleTouch,
      error,
      textRule,
      adorment,
      label,
      placeholder,
      mode,
      editable,
      name,
      message,
      theme,
      errorAppear,
      modalFunc,
      ...otherProps
    },
    ref,
  ) => {
    const [hide, setHide] = useState(true);
    const [themeDefault, setThemeDefault] = useState(themeInput);
    const [focused, setFocused] = useState(false);
    const isSecure = mode === 'secure';
    const isModal = mode === 'modal';
    const adorStartExist = adorment && adorment.hasOwnProperty('start');
    const adorEndExist = adorment && adorment.hasOwnProperty('end');
    const inputRef = createRef();
    const focus = () => inputRef.current.focus();
    const blur = () => inputRef.current.blur();

    useEffect(() => {
      if (error && error.message) {
        setThemeDefault({
          ...themeDefault,
          colors: {
            primary: colour.RED,
            underlineColor: colour.RED,
            placeholder: colour.SUBTLE2,
          },
        });
      } else {
        setThemeDefault(themeInput);
      }
    }, [error]);
    useImperativeHandle(ref, () => ({
      focus,
      blur,
      inputRef,
    }));
    return (
      <View
        style={[
          {
            marginBottom: error
              ? 0
              : textRule && !error && value !== ''
              ? 0
              : 20,
          },
          style,
        ]}>
        {label && <Text style={styles.label}>{label} </Text>}
        <View
          style={[
            styles.container,
            {
              borderColor: error
                ? colour.RED
                : focused
                ? colour.PRIMARY
                : 'transparent',
            },
          ]}>
          <TextInput
            ref={inputRef}
            style={[
              styles.input,
              adorStartExist && styles.inputStart,
              {paddingRight: isSecure ? 40 : 28},
              styleInput,
            ]}
            underlineColor={error ? colour.ALERT : colour.FIFTH}
            onChangeText={handleChange}
            onBlur={() => {
              handleBlur();
              setFocused(false);
            }}
            onTouchEnd={handleTouch}
            focusable={true}
            placeholder={placeholder}
            onFocus={event => {
              console.log('event1', event.nativeEvent);
              setFocused(true);
            }}
            editable={!editable || isModal ? false : true}
            numberOfLines={1}
            value={value}
            theme={theme ? theme : themeDefault}
            secureTextEntry={isSecure && hide}
            {...otherProps}
          />
          {isSecure && (
            <View style={styles.adorEnd}>
              {/* <IcPassword see={hide} onPress={() => setHide(!hide)} /> */}
            </View>
          )}
          {isModal && (
            <TouchableRipple
              onPress={modalFunc}
              style={styles.fullBtn}
              rippleColor="rgba(0, 0, 0, .1)">
              <View />
            </TouchableRipple>
          )}
        </View>
        {textRule && !error && value !== '' ? (
          <View style={styles.wrapRule}>
            <Text style={[styles.textRule]}>{message}</Text>
          </View>
        ) : errorAppear ? (
          errorAppear &&
          error &&
          error.message && <Text style={styles.error}>{error.message}</Text>
        ) : null}
      </View>
    );
  },
);

export default InputText;

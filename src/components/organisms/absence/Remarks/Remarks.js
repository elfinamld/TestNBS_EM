/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const Remarks = ({title, placeholder}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
    ...propsForm
  } = useForm({
    defaultValues: {
      email: 'elfina38@gmail.com',
      password: '123444444JJ',
    },

    mode: 'onChange',
  });
  return (
    <View style={{marginTop: 30}}>
      <Text style={{...fonts.semiBold_13, marginBottom: 10}}>{title}</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          console.log(value);
          return (
            <TextInput
              style={{
                borderWidth: 0.5,
                borderRadius: 8,
                paddingHorizontal: 20,
                minHeight: 150,
                borderColor: colour.BLUE[1],
              }}
              handleChange={value => onChange(value)}
              handleBlur={onBlur}
              multiline={true}
              placeholder={placeholder}
            />
          );
        }}
        name={'remarks'}
        defaultValue={''}
      />
    </View>
  );
};

export default Remarks;

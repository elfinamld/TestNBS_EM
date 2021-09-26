import {yupResolver} from '@hookform/resolvers/yup';
import React, {useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as yup from 'yup';
import {fonts} from '../../../../assets/styles';
import ButtonContained from '../../../../components/molecules/button/ButtonContained/ButtonContained';
import {
  valConfPassword,
  valEmail,
  valGender,
  valName,
  valRegPassword,
} from '../../../../config/misc/validation/validationInput';
import GenerateForm from '../../forms/GenerateForm';
import styles from './styles';

const schema = yup.object().shape({
  ...valName('fullName'),
  ...valGender('gender'),
  ...valEmail('email'),
  ...valRegPassword('password'),
  ...valConfPassword('confPassword'),
});

const RegisterTemp = ({onSubmit, loading}) => {
  const formData = useMemo(
    () => ({
      fullName: {
        label: 'Full Name',
        placeholder: 'Fill your full name',
        name: 'nama depan',
      },
      email: {
        label: 'email',
        placeholder: 'Fill your email',
        name: 'Email',
      },
      gender: {
        label: 'Gender',
        placeholder: 'Choose your gender',
        name: 'jenis kelamin',
        mode: 'modal',
      },
      password: {
        label: 'password',
        placeholder: 'Fill your password',
        name: 'pass_reg',
        mode: 'secure',
        textRule: true,
        message: 'Minimal 8 karakter',
      },
      confPassword: {
        label: 'password confirmation',
        placeholder: 'Fill your password confirmation',
        name: 'Password konfirmasi',
        mode: 'secure',
      },
    }),
    [],
  );

  const {
    handleSubmit,
    formState: {errors},
    ...propsForm
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.wrap}>
            <Text style={{...fonts.bold_24}}>Register</Text>
            <View style={styles.wrapInput}>
              <GenerateForm
                formData={formData}
                errorAppear={true}
                errors={errors}
                handleSubmit={handleSubmit(onSubmit)}
                {...propsForm}
              />
            </View>
            <ButtonContained
              onPress={handleSubmit(onSubmit)}
              loading={loading}
              disabled={loading}
              style={{marginTop: 40}}>
              Register
            </ButtonContained>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterTemp;

import {yupResolver} from '@hookform/resolvers/yup';
import React, {useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {View, Text} from 'react-native';
import * as yup from 'yup';
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
        label: 'nama lengkap',
        placeholder: 'Masukkan Nama Anda',
        name: 'nama depan',
      },
      gender: {
        label: 'jenis kelamin',
        placeholder: 'Pilih jenis kelamin',
        name: 'jenis kelamin',
        mode: 'modal',
      },
      email: {
        label: 'email',
        placeholder: 'Masukkan Email Anda',
        name: 'Email',
      },
      password: {
        label: 'password',
        placeholder: 'Masukkan Password Anda',
        name: 'pass_reg',
        mode: 'secure',
        textRule: true,
        message: 'Minimal 8 karakter',
      },
      confPassword: {
        label: 'konfirmasi password',
        placeholder: 'Masukkan Konfirmasi Password Anda',
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
    <View style={styles.wrap}>
      <Text>Register</Text>
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
  );
};

export default RegisterTemp;

import {yupResolver} from '@hookform/resolvers/yup';
import React, {useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, Text, View} from 'react-native';
import * as yup from 'yup';
import ButtonContained from '../../../../components/molecules/button/ButtonContained/ButtonContained';
import TextWithLink from '../../../../components/molecules/text/TextWithLink/TextWithLink';
import {
  valEmail,
  valPassword,
} from '../../../../config/misc/validation/validationInput';
import {_push} from '../../../../config/routes/NavigationServices';
import {screens} from '../../../../config/routes/screens';
import GenerateForm from '../../forms/GenerateForm';
import styles from './styles';

const schema = yup.object().shape({
  ...valEmail('email'),
  ...valPassword('password'),
});

const LoginTemp = ({onSubmit, loading}) => {
  const formData = useMemo(
    () => ({
      email: {
        label: 'email',
        placeholder: 'Masukkan email di sini',
        name: 'Email',
      },
      password: {
        label: 'password',
        placeholder: 'Masukkan password di sini',
        name: 'Password',
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
    <ScrollView style={styles.wrap} showsVerticalScrollIndicator={false}>
      <Text>Login</Text>
      <View style={styles.wrapInput}>
        <GenerateForm
          formData={formData}
          errorAppear={true}
          errors={errors}
          handleSubmit={handleSubmit(onSubmit)}
          {...propsForm}
        />
      </View>

      <View style={{paddingBottom: 120}}>
        <ButtonContained
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          disabled={loading}
          style={{marginTop: 40}}>
          Login
        </ButtonContained>
        <TextWithLink
          style={styles.textLink}
          text={'Not Register?'}
          textLink={'Register Now!'}
          onPress={() => _push(screens.register)}
        />
      </View>
    </ScrollView>
  );
};

export default LoginTemp;

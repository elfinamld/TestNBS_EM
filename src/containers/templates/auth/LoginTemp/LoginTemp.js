import {yupResolver} from '@hookform/resolvers/yup';
import React, {useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import * as yup from 'yup';
import {fonts} from '../../../../assets/styles';
import ButtonContained from '../../../../components/molecules/button/ButtonContained/ButtonContained';
import TextWithLink from '../../../../components/molecules/text/TextWithLink/TextWithLink';
import {
  valNoId,
  valPassword,
} from '../../../../config/misc/validation/validationInput';
import {_push} from '../../../../config/routes/NavigationServices';
import {screens} from '../../../../config/routes/screens';
import GenerateForm from '../../forms/GenerateForm';
import styles from './styles';

const schema = yup.object().shape({
  ...valNoId('id_number'),
  ...valPassword('password'),
});

const LoginTemp = ({onSubmit, loading}) => {
  const formData = useMemo(
    () => ({
      id_number: {
        label: 'No ID',
        placeholder: 'Fill your id number',
        name: 'email',
      },
      password: {
        label: 'password',
        placeholder: 'Fill your password',
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
    defaultValues: {
      id_number: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.wrap} showsVerticalScrollIndicator={false}>
        <Text style={{...fonts.bold_24}}>Login</Text>
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
            textLink={'Register Now'}
            onPress={() => _push(screens.register)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginTemp;

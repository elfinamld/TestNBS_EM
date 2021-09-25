import React, {createRef} from 'react';
import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import InputText from '../../../../components/molecules/text/InputText';
// import InputText from '../../../../components/molecules/input/InputText';
const GenerateForm = ({
  style,
  formData,
  inputStyle,
  control,
  errors,
  clearErrors,
  errorAppear,
  setValue,
  handleSubmit,
  modal,
  formStyle,
  label,
  ...propsForm
}) => {
  let arrFormData = Object.keys(formData);
  // console.log(`arrFormData`, setValue);
  let inputRef = {};

  // auto focus ke input setelahnya
  const _goToNext = (id, el) => {
    // handleSubmit();
    if (id + 1 < arrFormData.length) {
      inputRef[arrFormData[id + 1]].current.focus();
    } else {
      inputRef[arrFormData[id]].current.blur();
      handleSubmit();
    }
  };

  const _openModalGender = key => {
    modal({
      modalMode: 'ModalOption',
      data: {
        field: key,
        title: key,
        onSelected: _handleOptionPicked,
      },
    });
  };

  const _handleOptionPicked = (field, data) => {
    console.log(`field, data`, field, data);
    setValue(field, data);
  };

  return (
    <View style={style}>
      {arrFormData.map((el, id) => {
        inputRef[el] = createRef();
        const isModalBottom = formData && formData[el].mode === 'modal';
        return (
          <Controller
            key={id}
            control={control}
            render={({field: {onChange, onBlur, value}}) => {
              console.log(value);
              return (
                <InputText
                  key={id}
                  ref={inputRef[el]}
                  styleInput={inputStyle}
                  styleContainer={formStyle}
                  handleChange={value => onChange(value)}
                  handleBlur={onBlur}
                  label={el}
                  handleTouch={() => clearErrors(el)}
                  value={
                    typeof value === 'object'
                      ? value
                        ? value.name
                        : ''
                      : value
                  }
                  // name={name}
                  deleteBtn={true}
                  error={errors && errors[el]}
                  mode={formData[el].mode}
                  modalFunc={
                    isModalBottom
                      ? () => _openModalGender(el)
                      : () => console.log('fungsi belum diset')
                  }
                  errorAppear={errorAppear}
                  onSubmitEditing={() => _goToNext(id, formData[el])}
                  {...formData[el]}
                  {...arrFormData[el]}
                />
              );
            }}
            name={el}
            defaultValue={''}
          />
        );
      })}
    </View>
  );
};

GenerateForm.defaultProps = {
  formData: [],
};

export default GenerateForm;

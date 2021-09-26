import * as yup from 'yup';

export const valEmail = key => ({
  [key]: yup
    .string()
    .email('Format email yang benar: name@email.com')
    .required('Email is required'),
});

export const valNoId = key => ({
  [key]: yup.string().required('ID Number is required'),
});
export const valPassword = key => ({
  [key]: yup.string().required('Password is required'),
});

export const valName = key => ({
  [key]: yup.string().required('Full Name is required'),
});

export const valGender = key => ({
  [key]: yup.object().required('Gender is required').nullable(),
});

export const valCurrentPass = key => ({
  [key]: yup.string().required('Password lama wajib diisi'),
});

export const valNewPassword = key => ({
  [key]: yup
    .string()
    .required('Password baru wajib diisi')
    .min(8, 'Minimal 8 character'),
});

export const valRegPassword = key => ({
  [key]: yup
    .string()
    .required('Password is required')
    .min(8, 'Minimal 8 karakter'),
});

export const valConfPassword = key => ({
  [key]: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password not match')
    .required('Password Confirmation is required'),
});

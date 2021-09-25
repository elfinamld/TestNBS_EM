import * as yup from 'yup';

export const valEmail = key => ({
  [key]: yup
    .string()
    .email('Format email yang benar: name@email.com')
    .required('Email wajib diisi'),
});
export const valPassword = key => ({
  [key]: yup.string().required('Password wajib diisi'),
});

export const valName = key => ({
  [key]: yup.string().required('Nama wajib diisi'),
});

export const valGender = key => ({
  [key]: yup.object().required('Jenis Kelamin wajib diisi').nullable(),
});

export const valCurrentPass = key => ({
  [key]: yup.string().required('Password lama wajib diisi'),
});

export const valNewPassword = key => ({
  [key]: yup
    .string()
    .required('Password baru wajib diisi')
    .min(8, 'Minimal 8 karakter'),
});

export const valRegPassword = key => ({
  [key]: yup
    .string()
    .required('Password wajib diisi')
    .min(8, 'Minimal 8 karakter'),
});

export const valConfPassword = key => ({
  [key]: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password tidak cocok')
    .required('Konfirmasi Password baru wajib diisi'),
});

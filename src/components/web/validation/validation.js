import * as yup from 'yup';
export const registerSchema = yup.object({
    userName:yup.string().required("user name is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
})
export const loginSchema = yup.object({
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
})

export const sendCodeSchema = yup.object({
    email:yup.string().required("email is required").email(),
})

export const ForgetPasswordSchema = yup.object({
    code:yup.string().required("user code is required").length(4,"must be 4 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
})

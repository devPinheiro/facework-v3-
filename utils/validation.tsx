import { UseFormStateReturn } from "react-hook-form";
import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required")
});

export const registerSchema = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  phone: yup.string().required('Enter your phone number'),
  username: yup.string().required('Enter your username'),
  email: yup
    .string()
    .email('enter a valid email')
    .required('email is required'),
  password: yup.string().required('password is required').min(8),
});

// export function isFieldValid<TFieldValues, K extends keyof TFieldValues>(
//   formState: UseFormStateReturn<TFieldValues>,
//   field: K
// ) {
//   return formState.dirtyFields[field] && !formState.errors[field];
// }

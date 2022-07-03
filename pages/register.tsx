/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from 'react';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useForm, Controller, FormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../utils/validation';
import { RegisterFields } from '../utils/types';
import axios from 'axios';
import Router from 'next/router';

export default function Register() {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFields>({
    resolver: yupResolver(registerSchema),
  });

  const handleFormComplete = async (registerData: RegisterFields) => {
    if (registerData) {
     
      try {
        setLoading(true);
        const {data} = await axios.post(
          'https://burnham.pennee.tech/api/register',
          registerData
        );

        
        if(data.errors && data.message){
          setError(data.message)
          setLoading(false)
         return;
        }
        if(data.status){
           setLoading(false);
           // persist to memory
           localStorage.setItem('FACEWORK_USER', data);
           Router.push('/');
        }
        
      } catch (e: any) {
        console.log('====================================');
        console.log(e.response.data);
        console.log('====================================');
        setError(e.response.data.errors);
         setLoading(false);
      }
    }
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Create an account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Get unlimited access
            </p>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='last-name' className=''>
                  First Name
                </label>
                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ref },
                    formState,
                  }) => (
                    <input
                      onChange={onChange}
                      value={value}
                      id='first-name'
                      name='firstname'
                      type='text'
                      autoComplete='text'
                      required
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='First Name'
                      onBlur={() => setError(null)}
                    />
                  )}
                  name='first_name'
                />
                {errors?.first_name && <p>{errors?.first_name.message}</p>}
              </div>
              <div>
                <label htmlFor='last-name' className='sr-only'>
                  Last Name
                </label>
                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ref },
                    formState,
                  }) => (
                    <input
                      onChange={onChange}
                      value={value}
                      id='last-name'
                      name='lastname'
                      type='text'
                      autoComplete='text'
                      required
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Last Name'
                      onBlur={() => setError(null)}
                    />
                  )}
                  name='last_name'
                />
                {errors?.last_name && <p>{errors?.last_name.message}</p>}
              </div>
              <div>
                <label htmlFor='phone' className='sr-only'>
                  Phone Number
                </label>
                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ref },
                    formState,
                  }) => (
                    <input
                      onChange={onChange}
                      value={value}
                      id='phone'
                      name='phone'
                      type='phone'
                      autoComplete='text'
                      required
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Phone Number'
                      onBlur={() => setError(null)}
                    />
                  )}
                  name='phone'
                />
                {errors?.phone && <p>{errors?.phone.message}</p>}
                {error?.phone && <p>{error?.phone[0]}</p>}
              </div>
              <div>
                <label htmlFor='username' className='sr-only'>
                  Username
                </label>
                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ref },
                    formState,
                  }) => (
                    <input
                      onChange={onChange}
                      value={value}
                      id='username'
                      name='username'
                      type='username'
                      autoComplete='text'
                      required
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Username'
                      onBlur={() => setError(null)}
                    />
                  )}
                  name='username'
                />
                {errors?.username && <p>{errors?.username.message}</p>}
                {error?.username && <p>{error?.username[0]}</p>}
              </div>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ref },
                    formState,
                  }) => (
                    <input
                      onChange={onChange}
                      value={value}
                      id='email-address'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Email address'
                      onBlur={() => setError(null)}
                    />
                  )}
                  name='email'
                />
                {errors?.email && <p>{errors?.email.message}</p>}
                {error?.email && <p>{error?.email[0]}</p>}
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ref },
                    formState,
                  }) => (
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Password'
                      onChange={onChange}
                      value={value}
                      onBlur={() => setError(null)}
                    />
                  )}
                  name='password'
                />
                {errors?.password && <p>{errors?.password.message}</p>}
              </div>
              {/* <p>{error}</p> */}
            </div>

            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <Link
                  href='/login'
                  className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Already have an account? Login here
                </Link>
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit(handleFormComplete)}
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                {/* <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span> */}
                {loading ? 'Loading...' : 'Sign up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

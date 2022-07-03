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
import React, { useEffect } from 'react';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useForm, Controller, FormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../utils/validation';
import { LoginFields } from '../utils/types';
import axios from 'axios';
import Router from 'next/router';

export default function Login() {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFields>({
    resolver: yupResolver(loginSchema),
  });

  const handleFormComplete = async (loginData: LoginFields) => {
    if (loginData) {
      try {
        setLoading(true);
        const {data, status} = await axios.post(
          'https://burnham.pennee.tech/api/login',
          loginData
        );
        if(!data.status && data.message){
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
        setError(e);
      }
    }
  };

  // useEffect(() => {}, []);

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
              Sign in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'></p>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
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
              <p>{error}</p>
            </div>

            <div className='flex items-center justify-between'>
              {/* <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div> */}

              <div className='text-sm'>
                <Link
                  href='/register'
                  className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Don&apos;t have an account? Register
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
                {loading ? 'Loading...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

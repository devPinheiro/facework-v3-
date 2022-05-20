import React from 'react'

const ProfileCard = () => {
  return (
    <div className='max-w-sm mx-auto'>
      <div className='card  max-w-sm mx-auto border border-gray-100 bg-white  transition-shadow shadow-sm hover:shadow-md  rounded-md'>
        <div className='w-full card__media'>
          <img
            src='https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg'
            className='h-48 w-96 rounded-t-md'
          />
        </div>
        <div className='  card__media--aside '></div>
        <div className='flex items-center p-4'>
          <div className='relative flex flex-col items-center w-full'>
            <div className='h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white'>
              <img
                className='h-24 w-24 md rounded-full relative border border-2 border-gray-100'
                src='https://avatars3.githubusercontent.com/u/11801238?v=4'
                alt=''
              />
              <div className='absolute'></div>
            </div>
            <div className='flex flex-col space-y-1 justify-center items-center -mt-12 w-full'>
              <span className='text-md whitespace-nowrap text-gray-800 font-semibold'>
                Anthonio Jones
              </span>
              <span className='text-sm whitespace-nowrap text-gray-600'>
                CTO, Facework Inc. 🚀
              </span>
              <p className='text-sm text-gray-500 py-4'>
                Open to mentoring junior software engineers
              </p>
              <div className='py-2 flex space-x-2'>
                <button className='flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-700 text-purple-700 hover:border-purple-800 hover:border-purple-800 px-4 py-1 flex items-center hover:shadow-lg'>
                  <span className='mr-2'></span>Connect
                  <span className='ml-2'></span>
                </button>
              </div>
              <div className='py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid'>
                {/* <span className='text-center px-2'>
                  <span className='font-bold text-gray-700'>56</span>
                  <span className='text-gray-600'> followers</span>
                </span>
                <span className='text-center px-2'>
                  <span className='font-bold text-gray-700'>112</span>
                  <span className='text-gray-600'> following</span>
                </span>
                <span className='text-center px-2'>
                  <span className='font-bold text-gray-700'>27</span>
                  <span className='text-gray-600'> repos</span>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard
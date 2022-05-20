import { HomeIcon, InboxIcon, PencilIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Footer = () => {
  return (
    <div>
      <div
        className='
        flex flex-row
        w-full
        justify-between
        fixed
        -bottom-0
        overflow-scroll
        bg-gray-900
        text-white
        z-30
        pl-4
        pr-2
        py-2
        md:hidden
      '>
        <Link
          href='#'
          className='
          flex flex-col
          justify-center
          items-center
          text-sm
          leading-none
          sm:px-4
          pt-2
          pb-1
          lg:mt-0
          opacity-70
          
        '>
          <div
            className='flex flex-col
          justify-center
          items-center
          text-sm
          leading-none '>
            <HomeIcon className='text-white h-6' />
            <span className='px-2 pt-1  text-xs sm:text-sm text-white hover:text-gray-400'>
              {/* {{ $t('nav.home') }} */}
              Feeds
            </span>
          </div>
        </Link>
        <Link
          href='#'
          className='
          flex flex-col
          justify-center
          items-center
          text-sm
          sm:px-4
          pt-2
          pb-1
          leading-none
          lg:mt-0
          opacity-70
        '>
          <div
            className='flex flex-col
          justify-center
          items-center
          text-sm
          leading-none'>
            <PencilIcon className='h-6 text-white' />
            <span className='px-2 pt-1 text-xs sm:text-sm hover:text-gray-500'>
              {/* {{ $t('nav.upComing') }} */}
              Create
            </span>
          </div>
        </Link>

        <Link
          // :to="localePath('/mobile/mobile-search')"
          href={'#'}
          className='
          flex flex-col
          justify-center
          items-center
          text-sm
          leading-none
          sm:px-4
          pt-2
          pb-1
          lg:mt-0
          opacity-70
        '>
          {/* <search></search> */}
          <div
            className='flex flex-col
          justify-center
          items-center
          text-sm
          leading-none'>
            <InboxIcon className=' h-6   text-white cursor-pointer' />
            <span className='px-2 pt-1  text-xs sm:text-sm hover:text-gray-500'>
              {/* {{ $t('nav.search') }} */}
              Inbox
            </span>
          </div>
        </Link>
        <Link
          href={'#'}
          className='
          flex flex-col
          justify-center
          items-center
          text-sm
          sm:px-4
          pt-2
          pb-1
          leading-none
          lg:mt-0
          opacity-70
        '>
          <div
            className='flex flex-col
          justify-center
          items-center
          text-sm
          leading-none'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 24'
              className=' hover:text-gray-500 text-white cursor-pointer h5'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20 18.0668L19.7718 17.8612C19.1245 17.272 18.5578 16.5964 18.0872 15.8526C17.5733 14.8261 17.2653 13.705 17.1812 12.5553V9.16881C17.1857 7.36289 16.5443 5.61746 15.3777 4.26048C14.211 2.90349 12.5994 2.02835 10.8456 1.79949V0.915167C10.8456 0.67245 10.7512 0.439673 10.5832 0.268046C10.4152 0.0964192 10.1873 0 9.94966 0C9.71204 0 9.48414 0.0964192 9.31612 0.268046C9.14809 0.439673 9.05369 0.67245 9.05369 0.915167V1.8132C7.31561 2.05856 5.72347 2.93899 4.57217 4.29142C3.42086 5.64384 2.78841 7.37662 2.79195 9.16881V12.5553C2.70789 13.705 2.39985 14.8261 1.88591 15.8526C1.42341 16.5946 0.865903 17.2701 0.228188 17.8612L0 18.0668V20H20V18.0668Z'
                fill='#ffffff'
                className='hover:text-gray-500'
              />
              <path
                d='M6.95001 21.2246C7.03353 21.779 7.33267 22.2869 7.79219 22.6545C8.25171 23.0221 8.84057 23.2246 9.45001 23.2246C10.0595 23.2246 10.6483 23.0221 11.1078 22.6545C11.5674 22.2869 11.8665 21.779 11.95 21.2246H6.95001Z'
                fill='#ffffff'
                className='hover:text-gray-500'
              />
            </svg>
            <span className='px-2 pt-1 text-xs sm:text-sm'>
              {/* {{ $t('nav.settings') }} */}
              Notifications
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer
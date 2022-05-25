/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from '@heroicons/react/solid';
// import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';

import Link from 'next/link';
import MomentHelper from './moment';
import styles from '../styles/PostCard.module.css';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface IOpportunityCard {
  avatar: string;
  name: string;
  roleType: string;
  time: string;
  role: string;
  location: string;
  occupation: string;
  company: string;
}

const OpportunityCard: React.FC<IOpportunityCard> = ({ avatar, occupation, role, roleType, name, time, company, location}) => {
  return (
    <div className='lg:flex lg:items-center lg:justify-between px-8 py-12 bg-white  border border-1 border-gray-100 rounded-md my-10 max-w-5xl  transition-shadow hover:shadow-md hover:bg-gray-50 '>
      <div className='flex-1 min-w-0'>
        <div className='flex flex-row items-center'>
          <Link
            href={'#'}
            
            className='flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg'>
            <Image
              className='rounded-full h-10 w-10 object-cover relative'
              src={avatar}
              alt=''
              width={40}
              height={40}
            />
          </Link>
          <div className='flex-column '>
            <p className='ml-3 text-sm font-bold text-grey-dark'>{name}</p>
            <div className='flex  items-center'>
              <div className='flex items-center'>
                <p
                  className={`flex ml-3 text-xs font-medium text-grey-light ${styles.elipsable}`}>
                  {occupation}
                </p>
                {'・'}
                <p className={`flex ml-1 text-xs font-medium text-grey-light`}>
                  {company} 🚀
                </p>
                {'・'}
              </div>
              <p className='text-xs font-normal text-gray-400 ml-1'>
                <MomentHelper time={time} />
              </p>
            </div>
          </div>
        </div>
        <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate py-4'>
         {role}
        </h2>
        <div className='mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6'>
          <div className='mt-2 flex items-center text-sm text-gray-500'>
            <BriefcaseIcon
              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
            {roleType}
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-500'>
            <LocationMarkerIcon
              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
            {location}
          </div>
          {/* <div className='mt-2 flex items-center text-sm text-gray-500'>
            <CurrencyDollarIcon
              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
            $120k &ndash; $140k
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-500'>
            <CalendarIcon
              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
            Closing on January 9, 2020
          </div> */}
        </div>
      </div>
      <div className='mt-5 flex  lg:mt-0 lg:ml-4'>
        {/* <span className='hidden sm:block'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <PencilIcon
              className='-ml-1 mr-2 h-5 w-5 text-gray-500'
              aria-hidden='true'
            />
            Edit
          </button>
        </span>

        <span className='hidden sm:block ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <LinkIcon
              className='-ml-1 mr-2 h-5 w-5 text-gray-500'
              aria-hidden='true'
            />
            View
          </button>
        </span> */}

        <span className='sm:ml-3 w-full'>
          <button
            type='button'
            className='flex w-full justify-center lg:inline-flex items-center px-4 py-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <CheckIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
            Express Interest
          </button>
        </span>

        {/* Dropdown */}
        {/* <Menu as='div' className='ml-3 relative sm:hidden'>
          <Menu.Button className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            More
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5 text-gray-500'
              aria-hidden='true'
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}>
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}>
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu> */}
      </div>
    </div>
  );
}

export default OpportunityCard
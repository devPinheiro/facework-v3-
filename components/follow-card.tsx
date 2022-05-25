import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import styles from '../styles/PostCard.module.css';

interface IFollowCard {
  avatar: string;
  name: string;
  occupation: string;
  company: string;
}
const FollowCard: React.FC<IFollowCard> = ({avatar, name, occupation, company}) => {
  return (
    <div className='flex flex-row items-center justify-between px-4 py-8 bg-white  border border-1 border-gray-100 rounded-md my-10 max-w-xl  transition-shadow hover:shadow-md hover:bg-gray-50'>
      <div className='flex flex-row '>
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
            </div>
          </div>
        </div>
      </div>

      <div className='py-2 flex space-x-2'>
        <button className='flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-700 text-purple-700 hover:border-purple-800 hover:border-purple-800 px-4 py-1 flex items-center hover:shadow-lg'>
          <span className='mr-2'></span>Connect
          <span className='ml-2'></span>
        </button>
      </div>
    </div>
  );
}

export default FollowCard
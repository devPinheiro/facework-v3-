import React from 'react';
import Link  from 'next/link';
import ErrorBoundary from './error-boundary';
import MomentHelper from './moment';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  image: string;
  avatar: string;
  time: string;
  description: string;
  id: string;
  occupation: string;
  name: string;
  setModalVisibility: string;
  slug: string;
  profilePage: string;
  modalVisibility: Boolean;
  video: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  image,
  avatar,
  time,
  description,
  id,
  occupation,
  name,
  setModalVisibility,
  slug,
  profilePage,
  modalVisibility,
  video,
}) => {
 
  return (
    <>
      <ErrorBoundary>
      
            <div
              className={`${
                profilePage
                  ? 'object-cover w-full rounded-lg'
                  : 'max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg my-10'
              }`}>
              <div className='py-2 flex flex-row items-center justify-between'>
                {profilePage ? null : (
                  <>
                    <div className='flex flex-row items-center'>
                      <Link
                      href={'#'}
                        // to={`/feeds/p/${slug}/${title
                        //   .toLowerCase()
                        //   .replace(/ /g, '-')
                        //   .replace(/[^\w-]+/g, '')}`}
                        className='flex items-center focus:outline-none focus:shadow-outline no-underline appearance-none rounded-lg'>
                       <>
                        <Image
                          className='rounded-full h-10 w-10 object-cover'
                          src={avatar}
                          alt=''
                          layout='fill'
                        />
                        <div className='flex-column '>
                          <p className='ml-3 text-sm font-medium  text-grey-dark'>
                            {name}
                          </p>
                          <p className='ml-3 text-xs py-1 text-grey-light'>
                            {occupation}
                          </p>
                        </div>
                        </>
                      </Link>
                    </div>
                    <div className='flex flex-row items-center'>
                      <p className='text-xs font-semibold text-gray-500'>
                        <MomentHelper time={time} />
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
       
      </ErrorBoundary>
    </>
  );
};



export default PostCard;

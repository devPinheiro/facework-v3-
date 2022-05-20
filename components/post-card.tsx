import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import ErrorBoundary from './error-boundary';
import MomentHelper from './moment';
import { FlagIcon, ShareIcon, UserAddIcon } from '@heroicons/react/outline';
import styles from '../styles/PostCard.module.css';



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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
              ? 'object-cover w-full rounded-md'
              : 'max-w-xl mx-auto px-4 py-4 bg-white shadow-sm border border-1 border-gray-100 rounded-md my-10'
          }`}>
          <div className='py-2 flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center'>
              <Link
                href={'#'}
                // to={`/feeds/p/${slug}/${title
                //   .toLowerCase()
                //   .replace(/ /g, '-')
                //   .replace(/[^\w-]+/g, '')}`}
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
                    <p
                      className={`flex ml-1 text-xs font-medium text-grey-light`}>
                      {'Facework Inc.'} 🚀
                    </p>
                    {'・'}
                  </div>
                  <p className='text-xs font-normal text-gray-400 ml-1'>
                    <MomentHelper time={time} />
                  </p>
                </div>
              </div>
            </div>

            <Popover.Group>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      id='post-option'
                      className='flex flex-row items-center justify-center w-10 h-10 hover:bg-gray-50 rounded-full'>
                      <DotsVerticalIcon
                        className={classNames(
                          open ? 'text-gray-400' : 'text-gray-400',
                          'h-5 group-hover:text-gray-500'
                        )}
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'>
                      <Popover.Panel className='absolute z-10  -left-full transform -translate-x-1/2 mt-3 px-2 w-48 max-w-md sm:px-0'>
                        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div className='relative grid gap-6 bg-white px-2 py-6 sm:gap-8 sm:px-5'>
                            <a
                              key={'share'}
                              href={'#'}
                              className='-m-3 px-3 py-2 flex items-start rounded-lg hover:bg-gray-50'>
                              <ShareIcon
                                className='flex-shrink-0 h-5 w-5 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-sm font-normal text-gray-900'>
                                  {'Share Post'}
                                </p>
                              </div>
                            </a>

                            <a
                              key={'follow'}
                              href={'#'}
                              className='-m-3 px-3 py-2 flex items-start rounded-lg hover:bg-gray-50'>
                              <UserAddIcon
                                className='flex-shrink-0 h-5 w-5 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-sm font-normal text-gray-900'>
                                  {'Follow Facework'}
                                </p>
                              </div>
                            </a>

                            <a
                              key={'flag'}
                              href={'#'}
                              className='-m-3 px-3 py-2 flex items-start rounded-lg hover:bg-gray-50'>
                              <FlagIcon
                                className='flex-shrink-0 h-5 w-5 text-red-400'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-sm font-normal text-red-400'>
                                  {'Report Post'}
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>

          <div className='py-2 flex-row items-center'>
            {/* loop here */}
            <span className='p-2 text-xs font-bold text-green-700 bg-green-200 rounded-md '>
              ⚛︎ Expressed Opinion
            </span>
            <span className='ml-2 p-2 text-xs font-bold text-orange-600 bg-orange-200 rounded-md '>
              🗒 Wrote a blog post
            </span>
          </div>

          <div className='py-2 flex-column items-center'>
            <>
              {description && description.length > 600 ? (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Panel
                        static
                        className={classNames(
                          open
                            ? 'text-expand flex text-sm '
                            : 'text-expand flex text-sm max-h-36 overflow-hidden transition-all'
                        )}>
                        <p>{description}</p>
                      </Disclosure.Panel>
                      <Disclosure.Button
                        id='post-option'
                        className={classNames(
                          open
                            ? 'hidden'
                            : `${styles.textToggle} font-medium text-black hover:text-gray-500 text-sm flex items-center justify-center bg-gray-200 h-16 w-full -top-4 `
                        )}
                        disabled={open}>
                        Read more
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              ) : (
                <p className='flex text-sm '>{description}</p>
              )}
            </>
          </div>

          <div className='mt-2'>
            {profilePage ? (
              <Link
                href={`/profile/${title
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^\w-]+/g, '')}/p/${id}/member_profile_view`}>
                <div className='flex justify-center'>
                  {video ? (
                    <video
                      controls
                      src={video}
                      className='max-h-screen-sm max-w-sm'
                    />
                  ) : (
                    <Image
                      className='max-h-screen-sm rounded-lg'
                      src={image}
                      layout='responsive'
                      alt=''
                      // onClick={() =>
                      //     setModalVisibility(
                      //         !modalVisibility
                      //     )
                      // }
                    />
                  )}
                </div>
              </Link>
            ) : (
              <Link
                href={`/feeds/p/${slug}/${title
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^\w-]+/g, '')}`}>
                <div className='flex justify-center '>
                  {video ? (
                    <video
                      controls
                      src={video}
                      className='max-h-screen-sm max-w-sm'
                    />
                  ) : (
                    <div>
                      <img
                        className='max-h-screen-sm  rounded-lg object-cover'
                        src={image}
                        alt=''
                        // width='100%'
                        // height='100%'
                        // layout='intrinsic'
                      />
                    </div>
                  )}
                </div>
              </Link>
            )}
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default PostCard;

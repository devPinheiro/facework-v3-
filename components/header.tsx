import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  AcademicCapIcon,
  UserIcon,
  LogoutIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon
} from '@heroicons/react/outline';
import { ChevronDownIcon, InboxIcon, BellIcon, PencilIcon } from '@heroicons/react/solid';
import Search from './search';
import Image from 'next/image';
import Button from './button';

// const solutions = [
//   {
//     name: 'Analytics',
//     description:
//       'Get a better understanding of where your traffic is coming from.',
//     href: '#',
//     icon: ChartBarIcon,
//   },
//   {
//     name: 'Engagement',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     href: '#',
//     icon: CursorClickIcon,
//   },
//   {
//     name: 'Security',
//     description: "Your customers' data will be safe and secure.",
//     href: '#',
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: 'Integrations',
//     description: "Connect with third-party tools that you're already using.",
//     href: '#',
//     icon: ViewGridIcon,
//   },
//   {
//     name: 'Automations',
//     description:
//       'Build strategic funnels that will drive your customers to convert',
//     href: '#',
//     icon: RefreshIcon,
//   },
// ];
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ];

const post = [
  {
    name: 'Past Activity',
    description: 'Share your past project or gig with others',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'New Activity',
    description: 'What are you currently working on?',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Share an Opportunity',
    description: 'Get the best hand to partner on your next project.',
    href: '#',
    icon: AcademicCapIcon,
  },
];

const profile = [
  {
    name: 'My Account',
    href: '#',
    icon: UserCircleIcon,
  },
  {
    name: 'Requests',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Profile Settings',
    href: '#',
    icon: RefreshIcon,
  },

  {
    name: 'Help Center',
    href: '#',
    icon: QuestionMarkCircleIcon,
  },

  {
    name: 'Log Out',
    href: '#',
    icon: LogoutIcon,
  },
];

const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <header>
      <Popover className='relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center  py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start items-center lg:w-0 lg:flex-1'>
              <a href='#'>
                <span className='sr-only'>Facework Logo</span>
                <Image
                  className='h-8 w-auto sm:h-10'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                  alt=''
                  width={48}
                  height={48}
                />
              </a>
              <Search />
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                      )}>
                      <span>Home</span>
                    </Popover.Button>
                  </>
                )}
              </Popover>

              <a
                href='#'
                className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Connections
              </a>
              <a
                href='#'
                className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Opportunities
              </a>
            </Popover.Group>

            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <Popover.Group>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        id='create-post'
                        className='ml-8 mr-6  inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                        <div className='flex justify-between'>
                          <div className='flex items-center justify-between '>
                            <PencilIcon className='h-4 w-4 mr-1 group-hover:text-gray-500 text-white' />
                            <span>Post</span>
                          </div>
                          <ChevronDownIcon
                            className={classNames(
                              open
                                ? 'text-gray-400 rotate-180 transform'
                                : 'text-white',
                              'ml-2 h-5 w-5 text-white'
                            )}
                            aria-hidden='true'
                          />
                        </div>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'>
                        <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-96 max-w-md sm:px-0'>
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                              {post.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                  <item.icon
                                    className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                    aria-hidden='true'
                                  />
                                  <div className='ml-4'>
                                    <p className='text-sm font-medium text-gray-900'>
                                      {item.name}
                                    </p>
                                    <p className='mt-1 text-xs text-gray-500'>
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>

              <InboxIcon className='ml-2 h-8 w-8 mr-6 hover:text-gray-500 text-[#2a2a2b] cursor-pointer' />
              <svg
                width='24'
                height='24'
                viewBox='0 0 20 24'
                className='mr-6 hover:text-gray-500 text-[#2a2a2b] cursor-pointer'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M20 18.0668L19.7718 17.8612C19.1245 17.272 18.5578 16.5964 18.0872 15.8526C17.5733 14.8261 17.2653 13.705 17.1812 12.5553V9.16881C17.1857 7.36289 16.5443 5.61746 15.3777 4.26048C14.211 2.90349 12.5994 2.02835 10.8456 1.79949V0.915167C10.8456 0.67245 10.7512 0.439673 10.5832 0.268046C10.4152 0.0964192 10.1873 0 9.94966 0C9.71204 0 9.48414 0.0964192 9.31612 0.268046C9.14809 0.439673 9.05369 0.67245 9.05369 0.915167V1.8132C7.31561 2.05856 5.72347 2.93899 4.57217 4.29142C3.42086 5.64384 2.78841 7.37662 2.79195 9.16881V12.5553C2.70789 13.705 2.39985 14.8261 1.88591 15.8526C1.42341 16.5946 0.865903 17.2701 0.228188 17.8612L0 18.0668V20H20V18.0668Z'
                  fill='#2a2a2b'
                  className='hover:text-gray-500'
                />
                <path
                  d='M6.95001 21.2246C7.03353 21.779 7.33267 22.2869 7.79219 22.6545C8.25171 23.0221 8.84057 23.2246 9.45001 23.2246C10.0595 23.2246 10.6483 23.0221 11.1078 22.6545C11.5674 22.2869 11.8665 21.779 11.95 21.2246H6.95001Z'
                  fill='#2a2a2b'
                  className='hover:text-gray-500'
                />
              </svg>

              <Popover.Group>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button id='create-post' className=''>
                        <img
                          className='inline-block w-8 rounded-full ring-2 ring-white'
                          src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
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
                        <Popover.Panel className='absolute z-10 md:-left-24 transform -translate-x-1/2 mt-3 px-2 w-64 max-w-sm sm:px-0'>
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='relative grid gap-6 bg-white px-2 py-6 sm:gap-8 sm:p-8'>
                              {profile.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                                  <item.icon
                                    className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                    aria-hidden='true'
                                  />
                                  <div className='ml-4'>
                                    <p className='text-sm font-medium text-gray-900'>
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Popover.Panel
            focus
            className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <div className='grid grid-cols-1 gap-y-4 gap-x-8 mb-8 pb-8 border-b-2 border-gray-100'>
                    <a
                      href={'#'}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'>
                      Home
                    </a>

                    <a
                      href={'#'}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'>
                      Connections
                    </a>

                    <a
                      href={'#'}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'>
                      Opportunities
                    </a>
                    {/* {post.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'>
                      {item.name}
                    </a>
                  ))} */}
                  </div>
                  <nav className='grid gap-y-8'>
                    {profile.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                        <item.icon
                          className='flex-shrink-0 h-6 w-6 text-indigo-600'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              {/* <div className='py-6 px-5 space-y-6'> */}
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                {/* {post.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'>
                      {item.name}
                    </a>
                  ))} */}
              </div>
              {/* <div>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                    Sign up
                  </a>
                  <p className='mt-6 text-center text-base font-medium text-gray-500'>
                    Existing customer?{' '}
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-500'>
                      Sign in
                    </a>
                  </p>
                </div> */}
              {/* </div> */}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}

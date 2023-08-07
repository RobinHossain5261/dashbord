"use client"
import React from 'react';
import { latestNotifications, todayNotifications, yesterdayNotifications } from '../../../../public/data/utillityData';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const Notification = () => {
    return (
        <div className='bg-bgColor dark:bg-darkBg px-3 py-5 sm:px-6 sm:pt-10 sm:pb-6'>
            <div className='flex items-center justify-center'>
                <div className='p-2 sm:px-8 sm:py-7 bg-white dark:bg-darkCard rounded'>
                    <Tab.Group>
                        <Tab.List className='flex flex-wrap gap-2 justify-between items-center'>
                            <h3 className='text-2xl sm:text-[32px] text-myBlack dark:text-myWhite font-semibold'>Notification center</h3>
                            <div className='flex flex-wrap gap-6'>
                                <Tab
                                    className='w-24 text-sm text-black dark:text-myWhite py-3 px-4 cardShadow rounded cursor-pointer outline-none'
                                    as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={
                                                selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'text-myBlack dark:text-myWhite'
                                            }
                                        >
                                            All
                                        </button>
                                    )}
                                </Tab>
                                <Tab
                                    className='w-24 text-sm text-black dark:text-myWhite py-3 px-4 cardShadow rounded cursor-pointer outline-none'
                                    as={Fragment}>
                                    {({ selected }) => (
                                        <div className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white flex' : ' text-myBlack dark:text-myWhite flex'
                                        }
                                        >
                                            <button>Latest</button>
                                            <div className='ml-3 h-[6px] w-[12px] rounded-full bg-[#FFA5A5] p-3 flex items-center justify-center'>
                                                <span className='text-[8px]'>{latestNotifications.length}</span>
                                            </div>
                                        </div>
                                    )}
                                </Tab>
                            </div>
                        </Tab.List>
                        <hr className='my-8 border-myLine dark:border-darkLine' />
                        <Tab.Panels>
                            <Tab.Panel>
                                <section>
                                    <h4 className='text-xl text-myBlack dark:text-white mb-6'>Today</h4>
                                    <div>
                                        {
                                            todayNotifications.map(notification => (<div
                                                key={notification.id}
                                                className='flex flex-wrap gap-3  bg-bgColor dark:bg-[#1E192A] py-5 px-3 mb-2 rounded'
                                            >
                                                <Image className='w-[60px] h-[60px] rounded-full' src={notification.img} alt="people" />
                                                <div>
                                                    <div className='flex flex-wrap gap-2'>
                                                        <h5 className='text-xl text-myBlack dark:text-white'>{notification.name}</h5>
                                                        <span className='text-lg text-myGrey dark:text-myLine'>{notification.des}</span>
                                                    </div>
                                                    <div className='flex flex-wrap justify-between items-center'>
                                                        <div className='flex items-center gap-1'>
                                                            <span className='text-myBlack dark:text-myLine'>{notification.time}</span>
                                                            <div className='w-[6px] h-[6px] bg-[#FFA5A5] rounded-full'></div>
                                                        </div>
                                                        <span className='text-xs text-myBlue dark:text-myGreen'>{notification.date}</span>
                                                    </div>
                                                </div>
                                            </div>))
                                        }
                                    </div>
                                </section>
                                <section className='mt-[30px]'>
                                    <h4 className='text-xl text-myBlack dark:text-myWhite mb-6'>Yesterday</h4>
                                    <div>
                                        {
                                            yesterdayNotifications.map(notification => (<div
                                                key={notification.id}
                                                className='flex flex-wrap gap-3  bg-bgColor dark:bg-[#1E192A] py-5 px-3 mt-2 rounded'
                                            >
                                                <Image className='w-[60px] h-[60px] rounded-full' src={notification.img} alt="people" />
                                                <div>
                                                    <div className='flex flex-wrap gap-2'>
                                                        <h5 className='text-xl text-myBlack dark:text-white'>{notification.name}</h5>
                                                        <span className='text-lg text-myGrey dark:text-myLine'>{notification.des}</span>
                                                    </div>
                                                    <div className='flex flex-wrap justify-between items-center'>
                                                        <div className='flex items-center gap-1'>
                                                            <span className='text-myBlack dark:text-myLine'>{notification.time}</span>
                                                            <div className='w-[6px] h-[6px] bg-[#FFA5A5] rounded-full'></div>
                                                        </div>
                                                        <span className='text-xs text-myBlue dark:text-myGreen'>{notification.date}</span>
                                                    </div>
                                                </div>
                                            </div>))
                                        }
                                    </div>
                                </section>
                            </Tab.Panel>
                            <Tab.Panel>
                                <section className='mt-[30px] min-h-[60vh]'>
                                    <h4 className='text-xl text-myBlack dark:text-white mb-6'>Latest</h4>
                                    <div>
                                        {
                                            latestNotifications.map(notification => (<div
                                                key={notification.id}
                                                className='flex flex-wrap gap-3  bg-bgColor dark:bg-[#1E192A] py-5 px-3 mb-2 rounded'
                                            >
                                                <Image className='w-[60px] h-[60px] rounded-full' src={notification.img} alt="people" />
                                                <div>
                                                    <div className='flex flex-wrap gap-2'>
                                                        <h5 className='text-xl text-myBlack dark:text-white'>{notification.name}</h5>
                                                        <span className='text-lg text-myGrey dark:text-myLine'>{notification.des}</span>
                                                    </div>
                                                    <div className='flex flex-wrap justify-between items-center'>
                                                        <div className='flex items-center gap-1'>
                                                            <span className='text-myBlack dark:text-myLine'>{notification.time}</span>
                                                            <div className='w-[6px] h-[6px] bg-[#FFA5A5] rounded-full'></div>
                                                        </div>
                                                        <span className='text-xs text-myBlue dark:text-myGreen'>{notification.date}</span>
                                                    </div>
                                                </div>
                                            </div>))
                                        }
                                    </div>
                                </section>
                            </Tab.Panel>

                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>

    );
};

export default Notification;
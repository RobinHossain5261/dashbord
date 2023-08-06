"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import settings from '@/../public/images/settings.png';
import settings1 from '@/../public/images/settings1.png';
import profile from '@/../public/images/profileThree.png';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import Account from '@/components/SettingsTab/Account/Account';
import Team from '@/components/SettingsTab/Team/Team';
import Belling from '@/components/SettingsTab/Belling/Belling';
import Notifications from '@/components/SettingsTab/Notification/Notifications';
import API from '@/components/SettingsTab/API/API';

const settingsOne = () => {
    const inputFile = useRef(null);

    const onButtonClick = () => {
        inputFile.current.click();
    }

    return (
        <div className='pt-2 bg-bgColor dark:bg-darkBg'>

            <div className='h-[300px] bg-[#1E192A] flex justify-center relative -mb-28'>
                <Image className='absolute top-2 left-[66px] object-cover hidden md:flex lg:flex' src={settings} alt='settings' />
                <h1 className='text-3xl lg:text-5xl text-white font-semibold absolute top-[60px]'>Account Settings</h1>
                <Image className='absolute top-2 right-10 object-cover hidden md:flex lg:flex' src={settings1} alt='settings' />
            </div>

            <div className='px-3 lg:px-6 pb-6'>
                <Tab.Group >
                    <div className='lg:flex gap-6 w-full relative'>

                        <div className='bg-white  dark:bg-darkCard h-full rounded cardShadow p-3 lg:py-7 lg:px-8 mb-6'>
                            <div className='relative mb-8'>
                                <Image className='lg:h-[300px] w-full object-cover' src={profile} alt='profile' />
                                <input type='file' id="file" ref={inputFile} style={{ display: 'none' }} />
                                <button onClick={onButtonClick} className="hidden md:flex lg:flex items-center gap-2 bg-myBlue dark:bg-myGreen absolute bottom-5 right-5 rounded py-3 px-4">
                                    <span className="material-symbols-outlined text-white dark:text-myBlack">edit_square</span>
                                    <span className='text-sm  text-white dark:text-myBlack'>Edit profile photo</span>
                                </button>
                            </div>
                            <Tab.List>
                                <Tab className=' hover:text-myBlue dark:hover:text-myGreen outline-none' as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={
                                                selected ? ' text-myBlue dark:text-myGreen' : 'text-myBlack dark:text-myWhite'
                                            }
                                        >
                                            <div className='flex items-center gap-2'>
                                                <span className="material-symbols-outlined">edit</span>
                                                <span className=' text-base'>Account</span>
                                            </div>
                                        </button>
                                    )}

                                </Tab>
                                <hr className='my-3 border-myLine dark:border-darkLine ' />
                                <Tab className=' hover:text-myBlue dark:hover:text-myGreen outline-none' as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={
                                                selected ? ' text-myBlue dark:text-myGreen' : 'text-myBlack dark:text-myWhite'
                                            }
                                        >
                                            <div className='flex items-center gap-2'>
                                                <span className="material-symbols-outlined">group</span>
                                                <span className=' text-base'>Team</span>
                                            </div>
                                        </button>
                                    )}

                                </Tab>
                                <hr className='my-3 border-myLine dark:border-darkLine ' />
                                <Tab className='hover:text-myBlue dark:hover:text-myGreen outline-none' as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={
                                                selected ? ' text-myBlue dark:text-myGreen' : 'text-myBlack dark:text-myWhite'
                                            }
                                        >
                                            <div className='flex items-center gap-2'>
                                                <span className="material-symbols-outlined">add_card</span>
                                                <span className=' text-base'>Billing</span>
                                            </div>
                                        </button>
                                    )}


                                </Tab>
                                <hr className='my-3 border-myLine dark:border-darkLine' />
                                <Tab className=' hover:text-myBlue dark:hover:text-myGreen outline-none' as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={
                                                selected ? ' text-myBlue dark:text-myGreen' : 'text-myBlack dark:text-myWhite'
                                            }
                                        >
                                            <div className='flex items-center gap-2'>
                                                <span className="material-symbols-outlined">notifications</span>
                                                <span className=' text-base'>Notification</span>
                                            </div>
                                        </button>
                                    )}

                                </Tab>
                                <hr className='my-3 border-myLine dark:border-darkLine ' />
                                <Tab className='hover:text-myBlue dark:hover:text-myGreen outline-none' as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={
                                                selected ? ' text-myBlue dark:text-myGreen' : 'text-myBlack dark:text-myWhite'
                                            }
                                        >
                                            <div className='flex items-center gap-2'>
                                                <span className="material-symbols-outlined">settings</span>
                                                <span className=' text-base'>API</span>
                                            </div>
                                        </button>
                                    )}

                                </Tab>
                            </Tab.List>
                        </div>

                        <Tab.Panels className='w-full'>
                            <Tab.Panel>
                                <Account />
                            </Tab.Panel>
                            <Tab.Panel >
                                <Team />
                            </Tab.Panel>
                            <Tab.Panel>
                                <Belling />
                            </Tab.Panel>
                            <Tab.Panel>
                                <Notifications />
                            </Tab.Panel>
                            <Tab.Panel>
                                <API />
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
            <hr className='sm:mt-6 sm:pb-8 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default settingsOne;
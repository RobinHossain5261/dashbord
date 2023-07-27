"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import settings from '@/../public/images/settings.png';
import settings1 from '@/../public/images/settings1.png';
import profile from '@/../public/images/profileThree.png';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const settingsOne = () => {
    const inputFile = useRef(null);

    const onButtonClick = () => {
        inputFile.current.click();
    }

    return (
        <div className='pt-2 bg-bgColor dark:bg-darkBg'>
            <div className='h-[300px] bg-[#1E192A] flex justify-center relative'>
                <Image className='absolute top-2 left-[66px]' src={settings} alt='settings' />
                <h1 className='text-5xl text-white font-semibold absolute top-[60px]'>Account Settings</h1>
                <Image className='absolute top-2 right-10' src={settings1} alt='settings' />
            </div>

            <div className='px-2 lg:px-6 pb-6 lg:flex gap-6 '>
                <sections className='bg-white dark:bg-darkCard h-full rounded cardShadow py-7 px-8'>

                    <div className='relative mb-8'>
                        <Image className='w-full ' src={profile} alt='profile' />
                        <input type='file' id="file" ref={inputFile} style={{ display: 'none' }} />
                        <button onClick={onButtonClick} className="hidden md:flex lg:flex items-center gap-2 bg-myBlue dark:bg-myGreen absolute bottom-8 right-6 rounded py-3 px-4">
                            <span class="material-symbols-outlined text-white dark:text-myBlack">edit_square</span>
                            <span className='text-sm  text-white dark:text-myBlack'>Edit profile photo</span>

                        </button>
                    </div>

                    <Tab.Group as={Fragment} >
                        <Tab.List>
                            <Tab>Tab 1</Tab>
                            <Tab>Tab 2</Tab>
                            <Tab>Tab 3</Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>Content 1</Tab.Panel>
                            <Tab.Panel>Content 2</Tab.Panel>
                            <Tab.Panel>Content 3</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                    {/* <div>
                        <div className='flex items-center gap-2 text-myBlack dark:text-myWhite hover:text-myBlue dark:hover:text-myGreen'>
                            <span class="material-symbols-outlined">edit</span>
                            <span className=' text-base'>Account</span>
                        </div>
                        <hr className='my-3 border-myLine dark:border-darkLine ' />
                        <div className='flex items-center gap-2 text-myBlack dark:text-myWhite hover:text-myBlue dark:hover:text-myGreen'>
                            <span class="material-symbols-outlined">group</span>
                            <span className=' text-base'>Team</span>
                        </div>
                        <hr className='my-3 border-myLine dark:border-darkLine ' />
                        <div className='flex items-center gap-2 text-myBlack dark:text-myWhite hover:text-myBlue dark:hover:text-myGreen'>
                            <span class="material-symbols-outlined">add_card</span>
                            <span className=' text-base'>Billing</span>
                        </div>
                        <hr className='my-3 border-myLine dark:border-darkLine ' />
                        <div className='flex items-center gap-2 text-myBlack dark:text-myWhite hover:text-myBlue dark:hover:text-myGreen'>
                            <span class="material-symbols-outlined">notifications</span>
                            <span className=' text-base'>Notification</span>
                        </div>
                        <hr className='my-3 border-myLine dark:border-darkLine ' />
                        <div className='flex items-center gap-2 text-myBlack dark:text-myWhite hover:text-myBlue dark:hover:text-myGreen'>
                            <span class="material-symbols-outlined">settings</span>
                            <span className=' text-base'>API</span>
                        </div>

                    </div> */}
                </sections>


            </div>
        </div>
    );
};

export default settingsOne;
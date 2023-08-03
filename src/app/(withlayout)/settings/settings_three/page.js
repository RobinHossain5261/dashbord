"use client"
import React, { useRef } from 'react';
import { informations } from '../../../../../public/data/profileData';
import Image from 'next/image';
import profile from '@/../public/images/profile1.png';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import Account from '@/components/SettingsTab/Account/Account';
import Team from '@/components/SettingsTab/Team/Team';
import Belling from '@/components/SettingsTab/Belling/Belling';
import Notifications from '@/components/SettingsTab/Notification/Notifications';
import API from '@/components/SettingsTab/API/API';


const SettingsThree = () => {


    const inputFile = useRef(null);

    const onButtonClick = () => {
        inputFile.current.click();
    }

    return (
        <div className='px-2 pt-11 pb-6 lg:px-6 bg-bgColor dark:bg-darkBg'>
            <h3 className='font-semibold text-myBlack text-[32px] dark:text-white'>General settings</h3>
            <span className='text-sm text-myBlack dark:text-white'   >Lorem ipsum dolor sit amet consectetur.</span>

            <div className='w-full block lg:flex gap-6 mt-8'>

                <section className='bg-white dark:bg-darkCard p-2 lg:py-7 lg:px-8 rounded cardShadow h-full mb-6'>
                    <div className='relative'>
                        <Image className='w-[130px] h-[130px] rounded-full mx-auto' src={profile} alt='profile' />
                        <input type='file' id="file" ref={inputFile} style={{ display: 'none' }} />
                        <button onClick={onButtonClick} className='absolute bottom-3 left-[46%]'>
                            <div className='w-[30px] h-[30px] rounded-full bg-myBlue dark:bg-myGreen flex items-center justify-center'>
                                <span className="material-symbols-outlined w-6 h-6 text-white">add_photo_alternate</span>
                            </div>
                        </button>
                    </div>
                    <h5 className='text-myBlack text-xl font-semibold text-center mt-3 mb-6'>Environmental Specialist</h5>
                    <div className="overflow-x-auto whitespace-nowrap ">
                        <table className="table">
                            <tbody>
                                {
                                    informations.map(info => (<tr
                                        key={info.id}
                                        className='dark:border-darkLine'
                                    >
                                        <td className='flex gap-2'>
                                            <div className='text-myGrey dark:text-myLine text-sm'>{info.icon}</div>
                                            <div className='text-myGrey dark:text-myLine text-sm'>{info.name}</div>
                                        </td>
                                        <td className='text-myBlack dark:text-white text-base'>{info.more}</td>
                                        <td className='text-myBlack dark:text-white text-base'>{info.info}</td>
                                    </tr>))
                                }
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className='w-full'>
                    <Tab.Group>
                        <Tab.List className='flex flex-wrap gap-6 bg-white dark:bg-darkCard lg:pt-8 p-3 lg:px-7 rounded'>
                            <Tab
                                className='w-[180px]  text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>Account</span>
                                            <span className="material-symbols-outlined">edit</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                            <Tab
                                className='w-[180px] text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>Team</span>
                                            <span className="material-symbols-outlined">group</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                            <Tab
                                className='w-[180px] text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>Belling</span>
                                            <span className="material-symbols-outlined">add_card</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                            <Tab
                                className='w-[180px] text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>Notifications</span>
                                            <span className="material-symbols-outlined">notifications</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                            <Tab
                                className='w-[180px] text-sm text-black dark:text-myWhite py-3 px-4 border border-myLine dark:border-darkLine rounded cursor-pointer outline-none'
                                as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={
                                            selected ? 'bg-myBlue dark:bg-myGreen text-white' : 'bg-bgColor dark:bg-darkBg text-myBlack dark:text-myWhite'
                                        }
                                    >
                                        <div className=' flex items-center justify-center gap-4'>
                                            <span className=' text-base'>API</span>
                                            <span className="material-symbols-outlined">settings</span>
                                        </div>
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>

                        <Tab.Panels>
                            <Tab.Panel>
                                <Account />
                            </Tab.Panel>

                            <Tab.Panel>
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
                    </Tab.Group>
                </section>

            </div>
            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default SettingsThree;
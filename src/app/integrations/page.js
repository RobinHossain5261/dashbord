"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companies, searchengine, socialmedia, streaming } from '../../../public/data/integrationsData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const intregrations = () => {
    return (
        <div className='px-2 lg:px-6 pt-8 pb-6 bg-bgColor dark:bg-darkBg '>
            <h3 className='text-[32px] text-myBlack font-semibold dark:text-white'>Integrations</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit amet consectetur.</span>

            <Tabs className="mt-8">
                <TabList className='flex gap-6 mb-10'>
                    <Tab className='py-3 px-4 text-sm border border-myLine dark:border-darkLine rounded bg-myBlue dark:bg-myGreen text-white dark:text-[#1E192A] outline-none cursor-pointer'>All</Tab>

                    <Tab className='flex items-center gap-4 py-3 px-4 border border-myLine dark:border-darkLine rounded outline-none cursor-pointer' >
                        <span className='text-myBlack dark:text-myWhite text-sm'>Search engine</span>
                        <span class="material-symbols-outlined dark:text-myWhite ">search</span>
                    </Tab>
                    <Tab className='flex items-center gap-4 py-3 px-4 border border-myLine dark:border-darkLine rounded outline-none cursor-pointer' >
                        <span className='text-myBlack dark:text-myWhite text-sm'>Social media</span>
                        <span class="material-symbols-outlined dark:text-myWhite ">share_reviews</span>
                    </Tab>
                    <Tab className='flex items-center gap-4 py-3 px-4 border border-myLine dark:border-darkLine rounded outline-none cursor-pointer' >
                        <span className='text-myBlack dark:text-myWhite text-sm'>Streaming</span>
                        <span class="material-symbols-outlined dark:text-myWhite ">live_tv</span>
                    </Tab>
                </TabList>
                <TabPanel className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                    {
                        companies.map(company => (<div
                            key={company.id}
                            className='bg-white dark:bg-darkCard px-2 pt-2 pb-5 lg:px-8 lg:py-7 rounded text-center'
                        >
                            <Image className='cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto' src={company.img} alt="facebook" />
                            <h4 className='text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5'>{company.name}</h4>
                            <p className='text-myGrey dark:text-myWhite text-center text-base mb-5 lg:mb-8'>{company.des}</p>
                            <Link href="#" className='text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded'>View integrations</Link>
                        </div>))
                    }
                </TabPanel>
                <TabPanel className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                    {
                        searchengine.map(company => (<div
                            key={company.id}
                            className='bg-white dark:bg-darkCard px-2 pt-2 pb-4 lg:px-8 lg:py-7 rounded text-center'
                        >
                            <Image className='cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto' src={company.img} alt="facebook" />
                            <h4 className='text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5'>{company.name}</h4>
                            <p className='text-myGrey dark:text-myWhite text-center text-base mb-4 lg:mb-8'>{company.des}</p>
                            <Link href="#" className='text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded'>View integrations</Link>
                        </div>))
                    }
                </TabPanel>
                <TabPanel className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                    {
                        socialmedia.map(company => (<div
                            key={company.id}
                            className='bg-white dark:bg-darkCard px-2 pt-2 pb-5 lg:px-8 lg:py-7 rounded text-center'
                        >
                            <Image className='cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto' src={company.img} alt="facebook" />
                            <h4 className='text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5'>{company.name}</h4>
                            <p className='text-myGrey dark:text-myWhite text-center text-base mb-5 lg:mb-8'>{company.des}</p>
                            <Link href="#" className='text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded'>View integrations</Link>
                        </div>))
                    }
                </TabPanel>
                <TabPanel className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                    {
                        streaming.map(company => (<div
                            key={company.id}
                            className='bg-white dark:bg-darkCard px-2 pt-2 pb-5 lg:px-8 lg:py-7 rounded text-center'
                        >
                            <Image className='cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto' src={company.img} alt="facebook" />
                            <h4 className='text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5'>{company.name}</h4>
                            <p className='text-myGrey dark:text-myWhite text-center text-base mb-5 lg:mb-8'>{company.des}</p>
                            <Link href="#" className='text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded'>View integrations</Link>
                        </div>))
                    }
                </TabPanel>
            </Tabs>



            <hr className='mt-6 border border-myLine dark:border-darkLine' />

        </div>
    );
};

export default intregrations;
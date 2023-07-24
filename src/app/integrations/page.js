import React from 'react';

import facebook from '@/../public/images/fb2.png';
import google from '@/../public/images/google2.png';
import linkedin from '@/../public/images/linkedin2.png';
import reddit from '@/../public/images/reddit2.png';
import dribble from '@/../public/images/dribble2.png';
import youtube from '@/../public/images/youtube2.png';
import twitch from '@/../public/images/twitch2.png';
import webflow from '@/../public/images/webflow2.png';
import github2 from '@/../public/images/github2.png';
import Link from 'next/link';
import Image from 'next/image';

const intregrations = () => {
    const companies = [
        {
            id: 1,
            img: facebook,
            name: 'Facebook',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'
        },
        {
            id: 2,
            img: google,
            name: 'Google',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'
        },
        {
            id: 3,
            img: linkedin,
            name: 'LinkedIn',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'
        },
        {
            id: 4,
            img: github2,
            name: 'GitHub',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'
        },
        {
            id: 5,
            img: twitch,
            name: 'Twitch',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'

        },
        {
            id: 6,
            img: webflow,
            name: 'Webflow',
            post: 'Customer Service Manager',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'
        },
        {
            id: 7,
            img: reddit,
            name: 'Reddit',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'
        },
        {
            id: 8,
            img: dribble,
            name: 'Dribble',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'

        },
        {
            id: 9,
            img: youtube,
            name: 'YouTube',
            post: 'Customer Service Manager',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York',
            des: 'Ut vel pretium eros, sed egestas urna. Etiam a lorem ex. Donec sit amet ex magna. Mauris sit amet dapibus purus.'
        },
    ]

    return (
        <div className='px-2 lg:px-6 pt-8 pb-6 bg-bgColor dark:bg-darkBg '>
            <h3 className='text-[32px] text-myBlack font-semibold dark:text-white'>Integrations</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit amet consectetur.</span>

            <div className='my-5 lg:my-10 py-3 lg:px-2 flex flex-wrap gap-3 lg:gap-6'>
                <Link href='/integrations' className='py-3 px-4 text-sm border border-myLine dark:border-darkLine rounded bg-myBlue dark:bg-myGreen text-white dark:text-[#1E192A]'>All</Link>

                <Link href='/integrations/searchEngine' className='flex items-center gap-4 py-3 px-4 border border-myLine dark:border-darkLine rounded' >
                    <span className='text-myBlack dark:text-myWhite text-sm'>Search engine</span>
                    <span class="material-symbols-outlined dark:text-myWhite ">search</span>
                </Link>
                <Link href='/integrations/socialMedia' className='flex items-center gap-4 py-3 px-4 border border-myLine dark:border-darkLine rounded' >
                    <span className='text-myBlack dark:text-myWhite text-sm'>Social media</span>
                    <span class="material-symbols-outlined dark:text-myWhite ">share_reviews</span>
                </Link>
                <Link href='/integrations/streaming' className='flex items-center gap-4 py-3 px-4 border border-myLine dark:border-darkLine rounded' >
                    <span className='text-myBlack dark:text-myWhite text-sm'>Streaming</span>
                    <span class="material-symbols-outlined dark:text-myWhite ">live_tv</span>
                </Link>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                {
                  companies.map(company=>(<div
                  key={company.id}
                  className='bg-white dark:bg-darkCard px-2 pt-2 pb-5 lg:px-8 lg:py-7 rounded text-center'
                  >
                    <Image className='cardShadow w-20 h-20 border-8 border-white dark:border-darkBg rounded-full mx-auto' src={company.img} alt="facebook"/>
                    <h4 className='text-myBlack dark:text-white text-2xl font-semibold text-center my-3 lg:mt-6 lg:mb-5'>{company.name}</h4>
                    <p className='text-myGrey dark:text-myWhite text-center text-base mb-5 lg:mb-8'>{company.des}</p>
                    <Link href="#" className='text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded'>View integrations</Link>
                  </div>))  
                }
            </div>
            <hr className='mt-6 border border-myLine dark:border-darkLine'/>

        </div>
    );
};

export default intregrations;
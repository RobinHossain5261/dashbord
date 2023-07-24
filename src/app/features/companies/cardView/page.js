import Link from 'next/link';
import React from 'react';
import facebook from '@/../public/images/fb.png';
import google from '@/../public/images/google.png';
import linkedin from '@/../public/images/linkedin.png';
import reddit from '@/../public/images/reddit.png';
import twitter from '@/../public/images/twitter.png';
import youtube from '@/../public/images/youtube.png';
import Image from 'next/image';

const companies = () => {
    const companies = [
        {
            id: 1,
            img: facebook,
            name: 'Facebook',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 2,
            img: google,
            name: 'Google',
            website: 'Visit website',

            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 3,
            img: linkedin,
            name: 'LinkedIn',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 4,
            img: reddit,
            name: 'Reddit',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 5,
            img: twitter,
            name: 'Twitter',
            website: 'Visit website',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 6,
            img: youtube,
            name: 'YouTube',
            post: 'Customer Service Manager',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
    ]
    return (
        <div className='px-2 md:px-6 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Companies</h3>
            <span className='text-sm text-myBlack dark:text-white '>Lorem ipsum dolor sit ammet consectetur.</span>

            <div className='mt-8'>
                <Link href='/features/companies' className='text-myBlack dark:text-myWhite border dark:border-darkLine py-3 px-4  text-sm rounded border-myLine'>Table view</Link>
                <Link href='/features/companies/cardView' className='text-white dark:text-[#1E192A] py-3 px-4 bg-myBlue dark:bg-[#00E177] text-sm rounded ml-6'>Card view</Link>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
                {
                    companies.map(buyer => (<div
                        key={buyer.id}
                        className='bg-white dark:bg-darkCard p-2 lg:px-8 lg:py-7 rounded'
                    >
                        <Image className='w-20 h-20 cardShadow border-8 border-white dark:border-darkBg rounded-full mx-auto' src={buyer.img} alt='buyer' />
                        <h4 className='text-2xl text-center text-myBlack dark:text-white font-semibold mt-6 mb-3'>{buyer.name}</h4>
                        <h6 className='text-base text-center text-myBlack dark:text-[#D1D1D1]'>{buyer.post}</h6>
                        <hr className='border dark:border-darkLine mt-7 mb-10' />

                        <div className='overflow-x-auto'>
                            <table className="table whitespace-nowrap">
                                <tbody>
                                    <tr className='dark:border-darkLine'>
                                        <th className='flex items-center gap-2'>
                                            <span className="material-symbols-outlined w-5 h-5 text-myGrey dark:text-[#D1D1D1] font-normal">outgoing_mail</span>
                                            <span className='text-myGrey dark:text-[#D1D1D1] text-sm font-normal'>Email Address</span>
                                        </th>
                                        <td className='text-myBlack dark:text-[#D1D1D1] text-base'>:</td>
                                        <td className='text-myBlack dark:text-[#D1D1D1] text-base'>{buyer.email}</td>
                                    </tr>
                                    <tr className='dark:border-darkLine'>
                                        <th className='flex items-center gap-2'>
                                            <span className="material-symbols-outlined w-5 h-5 text-myGrey dark:text-[#D1D1D1] font-normal">location_on</span>
                                            <span className='text-myGrey dark:text-[#D1D1D1] text-sm font-normal'>Location</span>
                                        </th>
                                        <td className='text-myBlack dark:text-[#D1D1D1] text-base'>:</td>
                                        <td className='text-myBlack dark:text-[#D1D1D1] text-base'>{buyer.location}</td>
                                    </tr>
                                    <tr className='dark:border-darkLine'>
                                        <th className='flex items-center gap-2'>
                                            <span className="material-symbols-outlined w-5 h-5 text-myGrey dark:text-[#D1D1D1] font-normal">language</span>
                                            <span className='text-myGrey dark:text-[#D1D1D1] text-sm font-normal'>Website</span>
                                        </th>
                                        <td className='text-myBlack dark:text-[#D1D1D1] text-base'>:</td>
                                        <td className='text-myBlue dark:text-myGreen cursor-pointer text-base flex items-center gap-2'>
                                           <span> {buyer.website}</span>
                                            <span class="material-symbols-outlined  w-5 h-5">arrow_forward</span>
                                            </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr className='border dark:border-darkLine my-10' />
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2 text-[#1E192A] hover:text-myBlue dark:hover:text-myGreen dark:text-myLine'>
                                <span className='text-sm '>View details</span>
                                <span class="material-symbols-outlined  w-5 h-5">arrow_forward</span>
                            </div>
                            <div className='text-myBlack dark:text-myWhite'>
                                <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue dark:hover:text-myGreen">auto_fix</span>
                                <span class="material-symbols-outlined cursor-pointer hover:text-red-500">delete</span>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div >
    );
};

export default companies;
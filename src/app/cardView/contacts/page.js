import Link from 'next/link';
import React from 'react';
import photo7 from '@/../public/images/photo7.png';
import photo8 from '@/../public/images/photo8.png';
import photo9 from '@/../public/images/photo9.png';
import photo10 from '@/../public/images/photo10.png';
import photo11 from '@/../public/images/photo11.png';
import photo12 from '@/../public/images/photo12.png';
import Image from 'next/image';

const contacts = () => {

    const byuers = [
        {
            id: 1,
            img: photo7,
            name: 'Mehmet Rauf Tunc',
            post: 'Chief Technology Officer',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 2,
            img: photo8,
            name: 'Sukran Memis',
            post: 'Human Resource Manager',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 3,
            img: photo9,
            name: 'Muhlis Ilter',
            post: 'Chief Executive Officer',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 4,
            img: photo10,
            name: 'Ural Olgun',
            post: 'Front End Developer',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 5,
            img: photo11,
            name: 'Sabrican Inanir',
            post: 'Senior Developer',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
        {
            id: 6,
            img: photo12,
            name: 'Saniye Ozalp',
            post: 'Customer Service Manager',
            number: '(480) 555-0103',
            email: 'info@example.com',
            location: 'New York'
        },
    ]

    return (
        <div className='px-2 md:px-6 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Contacts</h3>
            <span className='text-sm text-myBlack dark:text-white '>Lorem ipsum dolor sit ammet consectetur.</span>

            <div className='mt-8'>
                <Link href='/features/contacts' className='text-myBlack dark:text-myWhite border dark:border-darkLine py-3 px-4  text-sm rounded border-myLine'>Table view</Link>
                <Link href='/cardView/contacts' className='text-white dark:text-[#1E192A] py-3 px-4 bg-myBlue dark:bg-[#00E177] text-sm rounded ml-6'>Card view</Link>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
                {
                    byuers.map(buyer => (<div
                        key={buyer.id}
                        className='bg-white dark:bg-darkCard p-2 lg:px-8 lg:py-7 rounded'
                    >
                        <Image className='w-[120px] h-[120px] rounded-full mx-auto' src={buyer.img} alt='buyer' />
                        <h4 className='text-2xl text-center text-myBlack dark:text-white font-semibold mt-6 mb-3'>{buyer.name}</h4>
                        <h6 className='text-base text-center text-myBlack dark:text-[#D1D1D1]'>{buyer.post}</h6>
                        <hr className='border dark:border-darkLine mt-7 mb-10' />

                        <div className='overflow-x-auto'>
                            <table className="table whitespace-nowrap">
                                <tbody>
                                    <tr className='dark:border-darkLine'>
                                        <th className='flex items-center gap-2'>
                                            <span className="material-symbols-outlined w-5 h-5 text-myGrey dark:text-[#D1D1D1] font-normal">call</span>
                                            <span className='text-myGrey text-sm font-normal dark:text-[#D1D1D1]'>Phone Number</span>
                                        </th>
                                        <td className='text-myBlack text-base'>:</td>
                                        <td className='text-myBlue dark:text-myGreen text-base'>{buyer.number}</td>
                                    </tr>
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

export default contacts;
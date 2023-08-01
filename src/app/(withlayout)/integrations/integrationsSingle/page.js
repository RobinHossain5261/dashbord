import Image from 'next/image';
import React from 'react';
import banner1 from '@/../public/images/illustration.png'
import banner2 from '@/../public/images/illustration-1.png'
import banner3 from '@/../public/images/illustration-2.png'
import youtubeIcon from '@/../public/images/icon.png'
import Link from 'next/link';

const integrationsSingle = () => {
    return (
        <div className='bg-bgColor dark:bg-darkBg min-h-screen'>

            <div className='h-[300px] flex items-center justify-center bg-[#1E192A] -mb-28'>
                <Image className='h-[300px] object-cover' src={banner1} alt="banner" />
                <Image className='h-[300px] object-cover' src={banner2} alt="banner" />
                <Image className='h-[300px] object-cover' src={banner3} alt="banner" />
            </div>

            <div className='px-2 lg:px-6 pb-6  lg:flex gap-6 relative'>

                <div className='lg:w-[600px] px-2 py-4 lg:py-7 lg:px-8 bg-white dark:bg-darkCard text-center h-full cardShadow rounded mb-6'>
                    <Image className='w-[200px] mx-auto' src={youtubeIcon} alt="icon" />
                    <h4 className='text-[#1E192A]  dark:text-white text-2xl font-semibold mt-7 mb-5'>Integrate with YouTube</h4>
                    <p className='text-center text-sm text-myGrey dark:text-myLine mb-10'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ac lectus ullamcorper, vulputate dui non, ullamcorper urna. malesuada, a facilisis leo posuere.</p>
                    <Link href="#" className='text-sm text-white dark:text-[#1E192A] bg-myBlue dark:bg-myGreen px-4 py-3 rounded'>View integrations</Link>
                </div>

                <div className='p-3 lg:py-10 lg:px-8 bg-white dark:bg-darkCard rounded cardShadow'>
                    <h5 className='text-xl text-myBlack dark:text-white font-semibold'>Take use of the YouTube integration more.</h5>
                    <p className='text-base text-justify  text-myGrey dark:text-myLine my-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <ul className='list-decimal	list-inside'>
                        <li className='text-sm  text-myGrey dark:text-myLine mb-4'>Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam volutpat.</li>
                        <li className='text-sm  text-myGrey dark:text-myLine mb-4'>Lorem ipsum dolor sit amet consectetur. Eu pulvinar nibh lectus pretium.</li>
                        <li className='text-sm  text-myGrey dark:text-myLine mb-4'>Lorem ipsum dolor sit amet consectetur. Parturient mi et elit quis odio.</li>
                        <li className='text-sm  text-myGrey dark:text-myLine mb-4'>Lorem ipsum dolor sit amet consectetur. Leo in cursus consectetur at.</li>
                        <li className='text-sm  text-myGrey dark:text-myLine'>Lorem ipsum dolor sit amet consectetur. Eleifend scelerisque nisl proin.</li>
                    </ul>
                    <h5 className='text-xl text-myBlack dark:text-white font-semibold mt-7'>Guidelines for automating apps and processes.</h5>

                    <p className='text-base text-justify text-myGrey dark:text-myLine my-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <p className='text-base text-justify text-myGrey dark:text-myLine'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
        </div>
    );
};

export default integrationsSingle;
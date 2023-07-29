"use client"
import React, { useState } from 'react';
import profile from '@/../public/images/profileThree.png';
import facebook from '@/../public/images/fb.png';
import google from '@/../public/images/google.png';
import telegram from '@/../public/images/telegram.png';
import Image from 'next/image';
import { informations } from '../../../../public/data/profileData';

const profileThree = () => {

    return (
        <div className='px-2 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
            <div className='block lg:flex gap-6'>
                <section className='bg-white dark:bg-darkCard p-2 lg:py-7 lg:px-5 h-full rounded cardShadow mb-6'>

                    {/* modal start */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                        <form method="dialog" className="modal-box dark:bg-darkCard">
                            <h3 className="font-bold text-2xl text-myBlue dark:text-myGreen">Edit Profile</h3>
                            <hr className='border-myLine dark:border-darkLine my-3' />
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-semibold text-myBlack dark:text-myWhite ">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Type your number" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-semibold text-myBlack dark:text-myWhite ">Location</span>
                                </label>
                                <input type="text" placeholder="Type your location" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-semibold text-myBlack dark:text-myWhite ">Email</span>
                                </label>
                                <input type="text" placeholder="Type your email" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-lg text-semibold text-myBlack dark:text-myWhite ">Website</span>
                                </label>
                                <input type="text" placeholder="Type your website link" className="input input-bordered w-full" />
                            </div>
                            <div className="modal-action">
                                <button className="text-white rounded py-3 px-4 bg-myBlue dark:bg-myGreen">Close</button>
                            </div>
                        </form>
                    </dialog>
                    {/* modal end */}

                    <div className='relative'>
                        <Image className='w-full' src={profile} alt='profile' />
                        <button className="hidden md:flex lg:flex items-center gap-2 bg-myBlue dark:bg-myGreen absolute bottom-8 right-6 rounded py-2 px-4" onClick={() => window.my_modal_5.showModal()}>
                            <span class="material-symbols-outlined text-white dark:text-myBlack">edit_square</span>
                            <span className='text-sm  text-white dark:text-myBlack'>Edit profile</span>
                        </button>
                    </div>



                    <h3 className='text-[#1E192A] dark:text-white text-2xl md:text-3xl lg:text-[32px] mt-[30px] font-semibold '>Profile details</h3>
                    <span className='text-sm text-myGrey dark:text-myWhite mt-2 '>Bluth CEO</span>

                    <div className="overflow-x-auto whitespace-nowrap mt-5 lg:mt-10">
                        <table className="table">
                            <tbody>
                                {
                                    informations.map(info => (<tr
                                        key={info.id}
                                        className='dark:border-darkLine border-myLine'
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

                <section className=''>
                    {/* About part  */}
                    <div className='p-3 lg:py-10 lg:px-8 rounded bg-white dark:bg-darkCard cardShadow'>
                        <h4 className='text-2xl text-myBlack dark:text-white mb-4 lg:mb-8 font-semibold'>About Us</h4>
                        <p className='text-base mb-7 dark:text-myWhite text-justify	'>Lorem ipsum dolor sit amet consectetur. Volutpat mattis turpis lorem luctus. Et sed ornare at fermentum vestibulum sit. A sem faucibus cursus pretium vel vitae pellentesque sed vulputate. In turpis leo dictum est id. Sed mi sed neque quam sit.</p>
                        <p className='text-base mb-7 dark:text-myWhite text-justify	'>Lorem ipsum dolor sit amet consectetur. Volutpat sed gravida ultrices elit lectus odio nunc natoque. Ut aliquam cursus consectetur urna nunc nunc tellus. </p>
                        <p className='text-base mb-7 dark:text-myWhite text-justify	'>Lorem ipsum dolor sit amet consectetur. Euismod vel ut aliquet cursus arcu quisque suspendisse vel tincidunt. </p>
                        <p className='text-base dark:text-myWhite text-justify	'>Lorem ipsum dolor sit amet consectetur. Euismod vel ut aliquet cursus arcu quisque suspendisse vel tincidunt. Sagittis aliquet dignissim tortor et purus. Risus diam pharetra enim sit ut dis ut cursus eget. Massa bibendum nec ut enim id erat arcu.</p>
                    </div>
                    {/* Skills part  */}
                    <div className='p-3 lg:py-10 md:px-8 lg:px-8 my-6 rounded bg-white dark:bg-darkCard cardShadow'>
                        <h4 className='text-myBlack text-2xl font-semibold dark:text-white'>Skills</h4>
                        <hr className='border-myLine dark:border-darkLine my-5 lg:my-10' />
                        <div className='flex flex-wrap gap-3 md:gap-5 lg:gap-5'>
                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-4 border border-myLine rounded'>UI/UX Degsign</span>
                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-4 border border-myLine rounded'>Web Degsign</span>
                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-4  border border-myLine rounded'>Development</span>
                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300 text-center py-3 px-4 border border-myLine rounded'>Development</span>
                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-4 border border-myLine rounded'>Product Design</span>
                            <span className='text-sm text-[#252525] dark:text-white dark:border-darkLine hover:bg-myBlue hover:text-white ease-in dark:hover:bg-myGreen duration-300  text-center py-3 px-4 border border-myLine rounded'>Branding Design</span>
                        </div>
                    </div>
                    {/* Experience part  */}
                    <div className='p-3 lg:py-7 lg:px-8 rounded bg-white dark:bg-darkCard cardShadow'>
                        <h4 className='text-2xl text-myBlack font-semibold dark:text-white mb-5 lg:mb-10'>Experience</h4>
                        <div className='flex items-center justify-between flex-wrap'>
                            <div className='flex items-center gap-3'>
                                <Image className='w-10 h-10 rounded-full' src={google} alt="google" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-myBlack dark:text-white'>Google</h4>
                                    <span className='text-lg text-myGrey dark:text-myWhite'>New York, NY</span>

                                </div>
                            </div>
                            <span className='text-sm text-myBlue dark:text-myGreen'>Jun 2022 - Apr 2023</span>
                        </div>
                        <p className='text-lg text-myGrey mt-4 lg:mt-8 dark:text-myLine text-justify'>Lorem ipsum dolor sit amet consectetur. Et eu facilisi facilisi quis lobortis tincidunt in neque eget. Sed malesuada orci risus risus.</p>
                        <hr className='my-6 border-myLine dark:border-darkLine' />

                        <div className='flex items-center justify-between flex-wrap'>
                            <div className='flex items-center gap-3'>
                                <Image className='w-10 h-10 rounded-full' src={facebook} alt="google" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-myBlack dark:text-white'>Facebook</h4>
                                    <span className='text-lg text-myGrey dark:text-myWhite'>New York, NY</span>

                                </div>
                            </div>
                            <span className='text-sm text-myBlue dark:text-myGreen'>Jun 2022 - Apr 2023</span>
                        </div>
                        <p className='text-lg text-myGrey mt-4 lg:mt-8 dark:text-myLine text-justify'>Lorem ipsum dolor sit amet consectetur. Et eu facilisi facilisi quis lobortis tincidunt in neque eget. Sed malesuada orci risus risus.</p>
                        <hr className='my-6 border-myLine dark:border-darkLine' />

                        <div className='flex items-center justify-between flex-wrap'>
                            <div className='flex items-center gap-3'>
                                <Image className='w-10 h-10 rounded-full' src={telegram} alt="google" />
                                <div>
                                    <h4 className='text-2xl font-semibold text-myBlack dark:text-white'>Telegram</h4>
                                    <span className='text-lg text-myGrey dark:text-myWhite'>New York, NY</span>

                                </div>
                            </div>
                            <span className='text-sm text-myBlue dark:text-myGreen'>Jun 2022 - Apr 2023</span>
                        </div>
                        <p className='text-lg text-myGrey mt-4 lg:mt-8 dark:text-myLine text-justify'>Lorem ipsum dolor sit amet consectetur. Et eu facilisi facilisi quis lobortis tincidunt in neque eget. Sed malesuada orci risus risus.</p>
                    </div>
                </section>
            </div>
            <hr className='mt-6 border-myLine dark:border-darkLine' />
        </div>
    );
};

export default profileThree;
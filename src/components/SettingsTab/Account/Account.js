import React from 'react';
import profile from '@/../public/images/profile1.png';
import Image from 'next/image';

const Account = () => {
    return (
        <div className='bg-white dark:bg-darkCard p-3 lg:px-7 lg:py-8 w-full rounded'>
            <div className='flex flex-wrap gap-3 justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <Image className='w-20 h-20 rounded-full' src={profile} alt="profile" />
                    <div>
                        <h5 className='text-myBlack dark:text-white text-xl font-semibold'>Angel Alvarado</h5>
                        <span className='text-myGrey dark:text-myLine text-sm'>Edit profile Photo</span>
                    </div>

                </div>
                <button className='px-4 py-3 border border-myLine dark:border-darkLine rounded hover:bg-myBlue dark:hover:bg-myGreen text-myBlack dark:text-myWhite hover:text-white'>Upload new</button>
            </div>
            <hr className='my-4 lg:my-8 border-myLine dark:border-darkLine ' />
            <h5 className='text-xl text-myBlack dark:text-white font-semibold'>Basic information</h5>
            <p className='text-base text-myGrey dark:text-myWhite mt-5 mb-8 text-justify'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            <form className='p-3 lg:py-7 lg:px-8 border border-myWhite dark:border-darkLine rounded'>
                <h4 className='text-myBlack dark:text-white text-2xl font-semibold'>Account</h4>
                <hr className='border-myLine dark:border-darkLine my-4 lg:my-7' />

                <div className='lg:flex block gap-6 mb-2 lg:mb-7'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg text-myBlack dark:text-white">Full name</span>
                        </label>
                        <input type="text" defaultValue='Angel' className="w-full px-[18px] py-2 outline-none bg-[#F7F8FD] text-myGrey dark:bg-[#1E192A] dark:text-myLine rounded" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg text-myBlack dark:text-white">Last name</span>
                        </label>
                        <input type="text" defaultValue='Alvarado' className="w-full outline-none px-[18px] py-2 text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded" />
                    </div>
                </div>
                <div className='lg:flex gap-6 mb-2 lg:mb-7'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg text-myBlack dark:text-white">Email address</span>
                        </label>
                        <input type="text" defaultValue='info@example.com' className="w-full px-[18px] py-2 outline-none bg-[#F7F8FD] text-myGrey dark:bg-[#1E192A] dark:text-myLine rounded" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg text-myBlack dark:text-white">Phone number</span>
                        </label>
                        <input type="text" defaultValue='(+33)7 35 55 45 43' className="w-full outline-none px-[18px] py-2 text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded" />
                    </div>
                </div>
                <div className='lg:flex gap-6 mb-2 lg:mb-7'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg text-myBlack dark:text-white">Location</span>
                        </label>
                        <input type="text" defaultValue='New York, NY' className="w-full px-[18px] py-2 outline-none text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-lg text-myBlack dark:text-white">Website</span>
                        </label>
                        <input type="text" defaultValue='Website.com' className="w-full outline-none px-[18px] py-2 text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded" />
                    </div>
                </div>
                <div className="form-control mb-7">
                    <label className="label">
                        <span className="text-lg text-myBlack dark:text-white">About biography</span>
                    </label>
                    <textarea className="h-28 text-myGrey bg-[#F7F8FD] dark:bg-[#1E192A] dark:text-myLine rounded outline-none py-2 px-[18px]" defaultValue='Say something about you...'></textarea>
                </div>
                <div className='flex flex-wrap gap-6'>
                    <button className='py-3 px-4 bg-myBlue dark:bg-myGreen text-white text-sm rounded'>Update profile</button>
                    <button className='py-3 px-4 bg- text-myBlack dark:text-myWhite text-sm rounded border border-myLine dark:border-darkLine hover:bg-myBlue dark:hover:bg-myGreen hover:text-white'>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default Account;
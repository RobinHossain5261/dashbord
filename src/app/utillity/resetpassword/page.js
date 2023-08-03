import React from 'react';

const ResetPassword = () => {
    return (
        <div className='bg-bgColor dark:bg-darkBg min-h-screen '>
            <div className=' flex h-[100vh] items-center justify-center text-center'>
                <div className='bg-white dark:bg-darkCard cardShadow roundded p-3 sm:px-10 sm:py-8 relative'>
                    <span className="material-symbols-outlined text-myBlack dark:text-white absolute top-8 right-10 cursor-pointer">close</span>
                    <div className='w-20 h-20 md:w-32 md:h-32 lg:w-[160px] lg:h-[160px] bg-white dark:bg-[#1E192A] p-10 cardShadow rounded-full mx-auto flex items-center justify-center'>
                        <span className="material-symbols-outlined text-5xl md:text-7xl lg:text-[80px] text-myBlack dark:text-myWhite ">lock_reset</span>
                    </div>
                    <h2 className='text-2xl sm:text-[40px] text-myBlack dark:text-myWhite font-semibold mt-3 mb-3 sm:mb-6 sm:mt-8'>Reset your password</h2>
                    <span className='text-lg text-myGrey dark:text-myLine'>Please enter your email address or mobile number to search <br /> for your account.</span>
                    <div className="form-control mt-2 sm:mt-10">
                        <label className="label">
                            <span className="text-lg text-myBlack dark:text-white">E-mail</span>
                        </label>
                        <div className='relative'>
                            <input type='text' placeholder="Email address or mobile number   " className="px-[18px] py-2 text-myBlack dark:text-myWhite bg-[#ECEEFB] dark:bg-[#1E192A] outline-none rounded w-full" />
                        </div>
                    </div>
                    <button className="w-full px-4 py-3 text-sm bg-myBlue dark:bg-myGreen text-white dark:text-[#1E192A] rounded mt-3 sm:mt-7">Reset password</button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
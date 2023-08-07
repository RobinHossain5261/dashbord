"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import signUp from '@/../public/images/pages/signUp.png';
import darkSignUp from '@/../public/images/pages/darkSignUp.png';
import signIn from '@/../public/images/pages/signIn.png';
import darkSignIn from '@/../public/images/pages/darkSignUp.png';
import darkVerify from '@/../public/images/pages/darkVerify.png';
import verify from '@/../public/images/pages/verify.png';
import notification from '@/../public/images/pages/notification.png';
import darkNotification from '@/../public/images/pages/darkNotification.png';
import notes from '@/../public/images/pages/notes.png';
import darkNotes from '@/../public/images/pages/darkNotes.png';
import resetPass from '@/../public/images/pages/resetPass.png';
import darkResetPass from '@/../public/images/pages/darkResetPass.png';
import passProtected from '@/../public/images/pages/passProtected.png';
import darkPassProtected from '@/../public/images/pages/darkPassProtected.png';
import error from '@/../public/images/pages/error.png';
import darkError from '@/../public/images/pages/darkError.png';

const utilityPage = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }
    return (
        <div className='px-3 lg:px-6 pb-6 pt-10 bg-bgColor dark:bg-darkBg min-h-screen '>
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Utility Pages</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>
            <div className='flex flex-wrap gap-6 mt-8'>
                <Link href="/utillity/signup" className="card  bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkSignUp : signUp} alt="page" className="rounded group-hover:scale-125 transition-all duration-500 object-cover w-[270px] h-[150px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Sign Up</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/utillity/signin" className="card  bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkSignIn : signIn} alt="page" className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Sign In</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/utillity/verifyemail" className="card  bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkVerify : verify} alt="page" className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Email Verify</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/notification" className="card bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkNotification : notification} alt="page" className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Notification</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/notes" className="card bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkNotes : notes} alt="page" className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Notes</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/utillity/resetpassword" className="card bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkResetPass : resetPass} alt="page" className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Reset Password</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/utillity/protected" className="card bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkPassProtected : passProtected} alt="page" className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Password Protected</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/utillity/errorpage" className="card bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkError : error} alt="page" className="rounded group-hover:scale-125 transition-all duration-500 w-[270px] h-[150px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">404 Error</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default utilityPage;
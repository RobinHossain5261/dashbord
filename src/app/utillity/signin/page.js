"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/../public/images/authLogo.png';
import animation from '@/../public/images/animation.png';
import authApple from '@/../public/images/authApple.png';
import authFacebook from '@/../public/images/authFacebook.png';
import authGoogle from '@/../public/images/authGoogle.png';
import authTwiter from '@/../public/images/authTwiter.png';
import warth from '@/../public/images/warth.png';
import Image from 'next/image';

import { FaApple, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const SignIn = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className="">
            <div className="flex flex-wrap min-h-screen bg-[#ECEEFB] dark:bg-darkBg">

                <div className="lg:w-1/2  w-full bg-[#4F45B6] dark:bg-gradient-to-r from-authColor to-darkBg relative">
                    <Link href='/' className="flex items-center gap-2 ml-10 mt-10 mb-[60px] cursor-pointer">
                        <Image
                            className="w-[31px] h-[36px]"
                            src={logo}
                            alt="company logo"
                        />
                        <h1 className="text-white text-2xl font font-bold">Dashpro</h1>
                    </Link>
                    <div className='flex h-[70vh] items-center justify-center'>
                        <Image
                            className=' object-cover'
                            src={animation}
                            alt='animation'
                        />
                    </div>

                    <div className='text-center pb-[60px] sm:block hidden'>
                        <div className='flex flex-wrap gap-[10px] items-center justify-center'>
                            <h4 className='text-2xl text-white font-semibold'>Welcome to</h4>
                            <div className="flex items-center gap-2">
                                <Image
                                    className="w-[31px] h-[36px]"
                                    src={logo}
                                    alt="company logo"
                                />
                                <h1 className="text-white text-2xl font-bold">Dashpro</h1>
                            </div>
                        </div>
                        <h5 className='text-xl text-white mt-5'>Start your Dashpro journey now!</h5>
                    </div>

                    <Image className='w-15 h-15 lg:w-[129px] lg:h-[127px] absolute left-10 top-[172px] sm:flex hidden' src={warth} alt="circel" />
                    <Image className='w-[129px] h-[127px] absolute right-[67px] top-[133px] sm:flex hidden' src={warth} alt="circel" />
                    <Image className='w-[72px] h-[71px] absolute right-[34px] bottom-[35px]' src={warth} alt="circel" />
                    <Image className='w-[59px] h-[59px] absolute left-[18%] bottom-[20%]' src={warth} alt="circel" />
                    <Image className='w-[59px] h-[59px] absolute left-[75px] bottom-[64px]' src={warth} alt="circel" />

                    <Image className='absolute top-[30%] left-[33%] w-[37px] h-[37px] rounded-full run1' src={authFacebook} alt="Facebook" />
                    <Image className='absolute top-[43%] right-[28%] w-[37px] h-[37px] rounded-full run' src={authApple} alt="apple" />
                    <Image className='absolute top-[28%] right-[23%] w-[37px] h-[37px] rounded-full run' src={authTwiter} alt="Twiter" />
                    <Image className='absolute top-[48%] left-[20%] w-[37px] h-[37px] rounded-full run1' src={authGoogle} alt="Google" />

                </div>

                <div className=" lg:w-1/2 w-full relative cardShadow">
                    <div className='flex h-[100vh] items-center justify-center'>
                        <div className='w-full lg:w-4/5 bg-white dark:bg-darkCard p-3 lg:px-8 lg:py-7 rounded'>
                            <h3 className='text-2xl lg:text-[32px] text-myBlack dark:text-white  text-center font-semibold'>Sign In to Dashpro</h3>
                            <div className='flex flex-wrap justify-center gap-3 my-7'>
                                <div className='w-10 h-8 px-[10px] py-[6px] bg-[#edecfb] dark:bg-[#274346] rounded cursor-pointer'>
                                    <FaGoogle className='w-5 h-5 text-myBlue dark:text-myGreen' />
                                </div>
                                <div className='w-10 h-8 px-[10px] py-[6px] bg-[#edecfb] dark:bg-[#274346] rounded cursor-pointer'>
                                    <FaApple className='w-5 h-5 text-myBlue dark:text-myGreen' />
                                </div>
                                <div className='w-10 h-8 px-[10px] py-[6px] bg-[#edecfb] dark:bg-[#274346] rounded cursor-pointer'>
                                    <FaTwitter className='w-5 h-5 text-myBlue dark:text-myGreen' />
                                </div>
                                <div className='w-10 h-8 px-[10px] py-[6px] bg-[#edecfb] dark:bg-[#274346] rounded cursor-pointer'>
                                    <FaFacebook className='w-5 h-5 text-myBlue dark:text-myGreen' />
                                </div>
                            </div>
                            <div className="divider dark:text-myWhite">or do it via E-mail</div>
                            <form>
                                <div className="form-control w-full mb-5">
                                    <label className="label">
                                        <span className="text-lg text-myBlack dark:text-white">Email address</span>
                                    </label>
                                    <input type="text" placeholder="info@example.com" className="px-[18px] py-2 bg-[#ECEEFB] dark:bg-[#1E192A] text-myBlack dark:text-myWhite outline-none rounded" />
                                </div>
                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="text-lg text-myBlack dark:text-white">Password</span>
                                    </label>
                                    <div className='relative'>
                                        <input type={show ? 'text' : 'password'} placeholder="*******************" className="px-[18px] py-2 text-myBlack dark:text-myWhite bg-[#ECEEFB] dark:bg-[#1E192A] outline-none rounded w-full" />
                                        <label
                                            onClick={handleShow}
                                            className='text-myGrey  absolute right-[3%] top-2 cursor-pointer'>
                                            {
                                                show ? <span className="material-symbols-outlined">visibility_off</span> :
                                                    <span className="material-symbols-outlined">visibility</span>
                                            }
                                        </label>
                                    </div>
                                    <label className="label">
                                        <Link href='#' className='text-myGrey dark:text-myWhite text-xs'>Must be 8 characters at least</Link>
                                    </label>
                                </div>
                                <div className='flex flex-wrap justify-between items-center'>
                                    <div className="form-control">
                                        <label className="flex items-center gap-[10px] cursor-pointer">
                                            <input type="checkbox" className="checkbox checkbox-primary dark:checkbox-success" />
                                            <span className="text-xl text-myBlack dark:text-myWhite">Remember me</span>
                                        </label>
                                    </div>
                                    <Link href="#" className='text-myBlue dark:text-myGreen text-lg'>Forgot Password?</Link>
                                </div>
                                <div className="mt-10 w-4/5 mx-auto">
                                    <button className="w-full px-4 py-3 text-sm bg-myBlue dark:bg-myGreen text-white dark:text-[#1E192A] rounded">Sign in</button>
                                </div>
                                <span className='text-myBlack dark:text-myWhite block text-center text-lg mt-3'>Don't have an account? <Link href='/utillity/signup' className='text-myBlue dark:text-myGreen'>Register</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
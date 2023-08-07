"use client"
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import profile1 from '@/../public/images/pages/profile1.png';
import profile2 from '@/../public/images/pages/profile2.png';
import profile3 from '@/../public/images/pages/profile3.png';
import darkProfile1 from '@/../public/images/pages/darkProfile1.png';
import darkProfile2 from '@/../public/images/pages/darkProfile2.png';
import darkProfile3 from '@/../public/images/pages/darkProfile3.png';
import Image from 'next/image';

const Profile = () => {
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
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Profile</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>
            <div className='flex flex-wrap gap-6 mt-8'>
                <Link href="/profile/profile_one" className="card w-[300px] h-[350px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkProfile1 : profile1} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Profile v1</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/profile/profile_two" className="card w-[300px] h-[350px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkProfile2 : profile2} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Profile v2</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/profile/profile_three" className="card w-[300px] h-[350px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkProfile3 : profile3} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Profile v3</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Profile;
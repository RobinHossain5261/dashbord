"use client"
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import pricing1 from '@/../public/images/pages/pricing1.png';
import pricing2 from '@/../public/images/pages/pricing2.png';
import pricing3 from '@/../public/images/pages/profile3.png';
import darkPricing1 from '@/../public/images/pages/darkPricing1.png';
import darkPricing2 from '@/../public/images/pages/darkPricing2.png';
import darkPricing3 from '@/../public/images/pages/darkPricing3.png';
import darkSinglePrice from '@/../public/images/pages/darkSinglePrice.png';
import singlePrice from '@/../public/images/pages/singlePrice.png';
import Image from 'next/image';

const Pricing = () => {
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
            <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Pricing</h3>
            <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>
            <div className='flex flex-wrap gap-6 mt-8'>
                <Link href="/pricing/pricing_one" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkPricing1 : pricing1} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Pricing v1</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/pricing/pricing_two" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkPricing2 : pricing2} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Pricing v2</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/pricing/pricing_three" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkPricing3 : pricing3} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Pricing v3</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
                <Link href="/pricing/pricing_single" className="card w-[300px] h-[300px] bg-white dark:bg-darkCard shadow-xl group">
                    <figure className="px-5 pt-5">
                        <Image src={resolvedTheme === 'dark' ? darkSinglePrice : singlePrice} alt="page" className="rounded group-hover:scale-125 transition-all duration-500" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-myBlack dark:text-myWhite group-hover:text-myBlue dark:group-hover:text-myGreen">Pricing Single</h2>
                        <p className='text-base text-myBlue dark:text-myGreen'>View Page</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Pricing;
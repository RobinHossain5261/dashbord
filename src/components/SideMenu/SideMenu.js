import { forwardRef, useState } from "react";
import Link from "next/link";
// import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import AnimateHeight from 'react-animate-height';
import logo from '@/../public/images/Logo.png';
import darkLogo from '@/../public/images/darkLogo.png';
import Image from "next/image";

const SideMenu = forwardRef(({ showNav, setShowNav }, ref) => {
    const { resolvedTheme, setTheme } = useTheme();

    const [height, setHeight] = useState(0);
    const [height1, setHeight1] = useState(0);
    const [height2, setHeight2] = useState(0);
    const [height3, setHeight3] = useState(0);
    const [height4, setHeight4] = useState(0);
    const [height5, setHeight5] = useState(0);
    const [height6, setHeight6] = useState(0);

    return (
        <nav ref={ref} className="fixed z-[6] w-full md:w-[280px] lg:w-[280px] h-full bg-white dark:bg-[#1E192A] shadow-sm overflow-y-auto">

            <div className='flex items-center justify-between'>
                <Link href='/' className="flex items-center gap-2 ml-6 mt-10 mb-[60px] cursor-pointer">
                    <Image
                        className="w-[31px] h-[36px]"
                        src={resolvedTheme === 'dark' ? darkLogo : logo}
                        alt="company logo"
                    />
                    <h1 className="text-black dark:text-myGreen text-2xl font font-bold">Dashpro</h1>
                </Link>

                <div className='lg:hidden md:hidden'>
                    <span className=" material-symbols-outlined cursor-pointer text-myBlack dark:text-myWhite  mb-4 mr-4"
                        onClick={() => setShowNav(!showNav)}
                    >close</span>
                </div>
            </div>
            <ul className='mx-6'>
                <li className="mb-5 cursor-pointer">
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height !== 0}
                        aria-controls="example-panel"
                        onClick={() => { setHeight(height === 0 ? 'auto' : 0) }}
                    >
                        <div className='flex items-center'>
                            <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">home</span>
                            <span className="text-base">Dashbord</span>
                        </div>
                        <span className="material-symbols-outlined w-5 h-5">expand_more</span>
                    </div>

                    <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={height} // see props documentation below
                    >
                        <ul>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='#'>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/dashbord/reports'>Reports</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/dashbord/products'>Products</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/dashbord/tasks'>Tasks</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>

                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height1 !== 0}
                        aria-controls="example-panel"
                        onClick={() => { setHeight1(height1 === 0 ? 'auto' : 0) }}
                    >
                        <div className='flex items-center'>
                            <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                                star
                            </span>
                            <span>Features</span>
                        </div>
                        <span className="material-symbols-outlined w-5 h-5">expand_more</span>
                    </div>
                    <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={height1} // see props documentation below
                    >
                        <ul className="dropdown-menu">
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/features/contacts'>Contacts</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/features/companies'>Companies</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/features/projects'>Projects</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/features/tasks'>Tasks</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/features/board'>Board</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/features/table'>Table</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/features/crypto'>Crypto</Link></li>
                        </ul>
                    </AnimateHeight>

                </li>

                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height2 !== 0}
                        aria-controls="example-panel"
                        onClick={() => { setHeight2(height2 === 0 ? 'auto' : 0) }}
                    >
                        <div className='flex items-center'>
                            <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                                group
                            </span>
                            <span>User Profile</span>
                        </div>
                        <span className="material-symbols-outlined w-5 h-5">expand_more</span>
                    </div>
                    <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={height2} // see props documentation below
                    >
                        <ul className="dropdown-menu">
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/profile/profileOne'>Profile v1</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/profile/profileTwo'>Profile v2</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/profile/profileThree'>Profile v3</Link></li>
                        </ul>
                    </AnimateHeight>

                </li>
                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height3 !== 0}
                        aria-controls="example-panel"
                        onClick={() => { setHeight3(height3 === 0 ? 'auto' : 0) }}
                    >
                        <div className='flex items-center'>
                            <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                                request_quote
                            </span>
                            <span>Pricing</span>
                        </div>
                        <span className="material-symbols-outlined w-5 h-5">expand_more</span>
                    </div>
                    <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={height3} // see props documentation below
                    >
                        <ul className="dropdown-menu">
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingOne'>Pricing v1</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingTwo'>Pricing v2</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingThree'>Pricing v3</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingSingle'>Pricing Single</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height4 !== 0}
                        aria-controls="example-panel"
                        onClick={() => { setHeight4(height4 === 0 ? 'auto' : 0) }}
                    >
                        <div className='flex items-center'>
                            <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                                power
                            </span>
                            <span>Integrations</span>
                        </div>
                        <span className="material-symbols-outlined w-5 h-5">expand_more</span>
                    </div>
                    <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={height4} // see props documentation below
                    >
                        <ul className="dropdown-menu">
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/integrations'>Integrations</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/integrations/integrationsSingle'>Integrations single</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>

                <hr className='my-10 border-myLine dark:border-darkLine' />

                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height5 !== 0}
                        aria-controls="example-panel"
                        onClick={() => { setHeight5(height5 === 0 ? 'auto' : 0) }}
                    >
                        <div className='flex items-center'>
                            <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-2">
                                settings
                            </span>
                            <span>Settings</span>
                        </div>
                        <span className="material-symbols-outlined w-5 h-5">expand_more</span>
                    </div>
                    <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={height5} // see props documentation below
                    >
                        <ul className="dropdown-menu">
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/settings/settings_one'>Settings v1</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/settings/settings_two'>Settings v2</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/settings/settings_three'>Settings v3</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height6 !== 0}
                        aria-controls="example-panel"
                        onClick={() => { setHeight6(height6 === 0 ? 'auto' : 0) }}
                    >
                        <div className='flex items-center'>
                            <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-2">
                                build
                            </span>
                            <span>Utility pages</span>
                        </div>
                        <span className="material-symbols-outlined w-5 h-5">expand_more</span>
                    </div>
                    <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={height6} // see props documentation below
                    >
                        <ul className="dropdown-menu">
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/utillity/signup'>Sign up</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/utillity/signin'>Sign in</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/utillity/verifyemail'>Email Confirmation</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/notification'>Notification center</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/notes'>Notes</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/utillity/resetpassword'>Reset password</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/utillity/protected'>Password protected</Link></li>
                            <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/utillity/errorpage'>404 Not found</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
            </ul>
        </nav>
    );
});


export default SideMenu;
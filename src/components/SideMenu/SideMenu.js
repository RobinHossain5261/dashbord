import { forwardRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import AnimateHeight from 'react-animate-height';
import logo from '@/../public/images/Logo.png';
import darkLogo from '@/../public/images/darkLogo.png';
import Image from "next/image";
import { usePathname } from 'next/navigation';

const SideMenu = forwardRef(({ showNav, setShowNav }, ref) => {
    const { resolvedTheme } = useTheme();
    const currentRoute = usePathname();

    const [activeMenu, setActiveMenu] = useState(1);

    const [height] = useState(0);
    const [height1] = useState(0);
    const [height2] = useState(0);
    const [height3] = useState(0);
    const [height4] = useState(0);
    const [height5] = useState(0);
    const [height6] = useState(0);

    return (
        <nav ref={ref} className="fixed top-0 bottom-0 z-[6] w-full md:w-[280px] lg:w-[280px] h-full bg-white dark:bg-[#1E192A] shadow-sm overflow-y-auto">

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
                        onClick={() => setActiveMenu(prev => prev == 1 ? 0 : 1)}
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
                        height={activeMenu == 1 ? 'auto' : 0} // see props documentation below
                    >
                        <ul>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/dashbord' ? 'activeDropdown' : ''}`}><Link href='/dashbord'>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/dashbord/reports' ? 'activeDropdown' : ''}`}><Link href='/dashbord/reports'>Reports</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/dashbord/products' ? 'activeDropdown' : ''}`}><Link href='/dashbord/products'>Products</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/dashbord/tasks' ? 'activeDropdown' : ''}`}><Link href='/dashbord/tasks'>Tasks</Link></li>
                        </ul>

                    </AnimateHeight>
                </li>

                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height1 !== 0}
                        aria-controls="example-panel"
                        onClick={() => setActiveMenu(prev => prev == 2 ? 0 : 2)}
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
                        duration={700}
                        height={activeMenu == 2 ? 'auto' : 0}
                    >
                        <ul>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/features' ? 'activeDropdown' : ''}`}><Link href='/features'>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/features/contacts' ? 'activeDropdown' : ''}`}><Link href='/features/contacts'>Contacts</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/features/companies' ? 'activeDropdown' : ''}`}><Link href='/features/companies'>Companies</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/features/projects' ? 'activeDropdown' : ''}`}><Link href='/features/projects'>Projects</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/features/tasks' ? 'activeDropdown' : ''}`}><Link href='/features/tasks'>Tasks</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/features/board' ? 'activeDropdown' : ''}`}><Link href='/features/board'>Board</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/features/table' ? 'activeDropdown' : ''}`}><Link href='/features/table'>Table</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/features/crypto' ? 'activeDropdown' : ''}`}><Link href='/features/crypto'>Crypto</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height2 !== 0}
                        aria-controls="example-panel"
                        onClick={() => setActiveMenu(prev => prev == 3 ? 0 : 3)}
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
                        height={activeMenu == 3 ? 'auto' : 0} // see props documentation below
                    >
                        <ul>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/profile' ? 'activeDropdown' : ''}`}><Link href='/profile'>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/profile/profile_one' ? 'activeDropdown' : ''}`}><Link href='/profile/profile_one'>Profile v1</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/profile/profile_two' ? 'activeDropdown' : ''}`}><Link href='/profile/profile_two'>Profile v2</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/profile/profile_three' ? 'activeDropdown' : ''}`}><Link href='/profile/profile_three'>Profile v3</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height3 !== 0}
                        aria-controls="example-panel"
                        onClick={() => setActiveMenu(prev => prev == 4 ? 0 : 4)}
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
                        height={activeMenu == 4 ? 'auto' : 0} // see props documentation below
                    >
                        <ul>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/pricing' ? 'activeDropdown' : ''}`}><Link href='/pricing'>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/pricing/pricing_one' ? 'activeDropdown' : ''}`}><Link href='/pricing/pricing_one'>Pricing v1</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/pricing/pricing_two' ? 'activeDropdown' : ''}`}><Link href='/pricing/pricing_two'>Pricing v2</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/pricing/pricing_three' ? 'activeDropdown' : ''}`}><Link href='/pricing/pricing_three'>Pricing v3</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/pricing/pricing_single' ? 'activeDropdown' : ''}`}><Link href='/pricing/pricing_single'>Pricing Single</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height4 !== 0}
                        aria-controls="example-panel"
                        onClick={() => setActiveMenu(prev => prev == 5 ? 0 : 5)}
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
                        height={activeMenu == 5 ? 'auto' : 0} // see props documentation below
                    >
                        <ul className="dropdown-menu">
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/integrations/all_page' ? 'activeDropdown' : ''}`}><Link href='/integrations/all_page'>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/integrations' ? 'activeDropdown' : ''}`}><Link href='/integrations'>Integrations</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/integrations/integrations_single' ? 'activeDropdown' : ''}`}><Link href='/integrations/integrations_single'>Integrations single</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
                <hr className='my-10 border-myLine dark:border-darkLine' />
                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height5 !== 0}
                        aria-controls="example-panel"
                        onClick={() => setActiveMenu(prev => prev == 6 ? 0 : 6)}
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
                        height={activeMenu == 6 ? 'auto' : 0} // see props documentation below
                    >
                        <ul className="dropdown-menu">
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/settings' ? 'activeDropdown' : ''}`}><Link href='/settings'>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/settings/settings_one' ? 'activeDropdown' : ''}`}><Link href='/settings/settings_one'>Settings v1</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/settings/settings_two' ? 'activeDropdown' : ''}`}><Link href='/settings/settings_two'>Settings v2</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/settings/settings_three' ? 'activeDropdown' : ''}`}><Link href='/settings/settings_three'>Settings v3</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className='mb-5 cursor-pointer'>
                    <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen'
                        aria-expanded={height6 !== 0}
                        aria-controls="example-panel"
                        onClick={() => setActiveMenu(prev => prev == 7 ? 0 : 7)}
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
                        height={activeMenu == 7 ? 'auto' : 0} // see props documentation below
                    >
                        <ul>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/utility_page' ? 'activeDropdown' : ''}`}><Link href='/utility_page'>All Pages</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/utillity/signup' ? 'activeDropdown' : ''}`}><Link href='/utillity/signup'>Sign up</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-1 py-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all'><Link href='/utillity/signin'>Sign in</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-1 py-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all'><Link href='/utillity/verifyemail'>Email Confirmation</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/notification' ? 'activeDropdown' : ''}`}><Link href='/notification'>Notification center</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all ${currentRoute === '/notes' ? 'activeDropdown' : ''}`}><Link href='/notes'>Notes</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-1 py-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all'><Link href='/utillity/resetpassword'>Reset password</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-1 py-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all'><Link href='/utillity/protected'>Password protected</Link></li>
                            <li onClick={() => innerWidth <= 768 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-1 py-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6 transition-all'><Link href='/utillity/errorpage'>404 Not found</Link></li>
                        </ul>
                    </AnimateHeight>
                </li>
            </ul>
        </nav>
    );
});


export default SideMenu;
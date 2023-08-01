import Link from 'next/link';
import { forwardRef, useEffect, useRef } from 'react';
import { useState } from 'react';
import logo from '@/../public/images/Logo.png';
import darkLogo from '@/../public/images/darkLogo.png';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import AnimateHeight from 'react-animate-height';
import './SideBar.css';



const SideBar = forwardRef(({ showNav, setShowNav }, ref) => {

  const [height, setHeight] = useState(0);

  const { resolvedTheme, setTheme } = useTheme();
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu('');
    }
    else {
      setActiveMenu(menuName);
    }
  };


  return (

    <nav ref={ref} className="fixed z-[6] w-full md:w-[280px] lg:w-[280px] h-full bg-white dark:bg-[#1E192A] shadow-sm ">

      <div className='flex items-center justify-between'>
        <Link href='/' className="flex items-center gap-2 ml-6 mt-10 mb-[60px] cursor-pointer">
          <Image
            className="w-[31px] h-[36px]"
            src={resolvedTheme === 'dark' ? darkLogo : logo}
            alt="company logo"
          />
          <h1 className="text-black dark:text-myGreen text-2xl font font-bold">Dashbord</h1>
        </Link>

        <div className='lg:hidden md:hidden'>
          <span class=" material-symbols-outlined cursor-pointer text-myBlack dark:text-myWhite  mb-4 mr-4"
            onClick={() => setShowNav(!showNav)}
          >close</span>
        </div>
      </div>

      <ul className='mx-6'>

        <li className="mb-5 cursor-pointer transition ease-in-out duration-1000">
          <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen' onClick={() => toggleMenu('dropdown1')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">home</span>
              <span className="text-base">Dashbord</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>

          {activeMenu === 'dropdown1' && (
            <ul>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='#'>All Pages</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/dashbord/reports'>Reports</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/dashbord/products'>Products</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/dashbord/tasks'>Tasks</Link></li>
            </ul>
          )}
        </li>

        <li className='mb-5 cursor-pointer'>
          <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen' onClick={() => toggleMenu('dropdown2')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                star
              </span>
              <span>Features</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>
          {activeMenu === 'dropdown2' && (
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
          )}
        </li>

        <li className='mb-5 cursor-pointer'>
          <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen' onClick={() => toggleMenu('dropdown3')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                group
              </span>
              <span>User Profile</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>
          {activeMenu === 'dropdown3' && (
            <ul className="dropdown-menu">
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/profile/profileOne'>Profile v1</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/profile/profileTwo'>Profile v2</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/profile/profileThree'>Profile v3</Link></li>
            </ul>
          )}
        </li>
        <li className='mb-5 cursor-pointer'>
          <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen' onClick={() => toggleMenu('dropdown4')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                request_quote
              </span>
              <span>Pricing</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>
          {activeMenu === 'dropdown4' && (
            <ul className="dropdown-menu">
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingOne'>Pricing v1</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingTwo'>Pricing v2</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingThree'>Pricing v3</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingSingle'>Pricing Single</Link></li>
            </ul>
          )}
        </li>
        <li className='mb-5 cursor-pointer'>
          <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen' onClick={() => toggleMenu('dropdown5')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                power
              </span>
              <span>Integrations</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>
          {activeMenu === 'dropdown5' && (
            <ul className="dropdown-menu">
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/integrations'>Integrations</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/integrations/integrationsSingle'>Integrations single</Link></li>
            </ul>
          )}
        </li>

        <hr className='my-10 border-myLine dark:border-darkLine' />

        <li className='mb-5 cursor-pointer'>
          <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen' onClick={() => toggleMenu('dropdown6')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-2">
                settings
              </span>
              <span>Settings</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>
          {activeMenu === 'dropdown6' && (
            <ul className="dropdown-menu">
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/settings/settings_one'>Settings v1</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/settings/settings_two'>Settings v2</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/settings/settings_three'>Settings v3</Link></li>
            </ul>
          )}
        </li>
        <li className='mb-5 cursor-pointer'>
          <div className='text-base text-myBlack dark:text-myWhite flex items-center justify-between hover:text-myBlue dark:hover:text-myGreen' onClick={() => toggleMenu('dropdown7')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-2">
                build
              </span>
              <span>Utility pages</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>
          {activeMenu === 'dropdown7' && (
            <ul className="dropdown-menu">
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/utillity/signup'>Sign up</Link></li>

              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href='/utillity/signin'>Sign in</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>Email Confirmation</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>Notification center</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>Notes</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>Reset password</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>Password protected</Link></li>
              <li onClick={() => innerWidth <= 640 ? setShowNav(!showNav) : ''} className='text-base mx-3 px-4 mt-2 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:ml-6'><Link href=''>404 Not found</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>



  );
});

export default SideBar;

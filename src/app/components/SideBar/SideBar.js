import { ChevronDownIcon, HomeIcon, UserIcon, CreditCardIcon, StarIcon, UserGroupIcon, CurrencyDollarIcon, } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';
import { useState } from 'react';
import logo from '@/../public/images/Logo.png';
import Image from 'next/image';

const SideBar = forwardRef(({ showNav }, ref) => {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu('');
    } else {
      setActiveMenu(menuName);
    }
  };

  return (

    <nav ref={ref} className="fixed z-[6] w-56 h-full bg-white dark:bg-[#1E192A] shadow-sm ">

      <Link href='/' className="flex items-center gap-2 ml-6 mt-10 mb-[60px] cursor-pointer">
        <Image
          className="w-[31px] h-[36px]"
          src={logo}
          alt="company logo"
        />
        <h1 className="text-2xl font font-bold">Dashbord</h1>
      </Link>

      <ul className='mx-6'>
        <li className="mb-5 cursor-pointer">
          <div className='text-base flex items-center justify-between hover:text-myBlue' onClick={() => toggleMenu('dropdown1')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">home</span>
              <span className="text-base">Dashbord</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>

          {activeMenu === 'dropdown1' && (
            <ul className="">
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='#'>All Pages</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/dashbord/reports'>Reports</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/dashbord/products'>Products</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/dashbord/tasks'>Tasks</Link></li>
            </ul>
          )}
        </li>

        <li className='mb-5 cursor-pointer'>
          <div className='text-base flex items-center justify-between hover:text-myBlue' onClick={() => toggleMenu('dropdown2')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                star
              </span>
              <span>Features</span>
            </div>
            <span class="material-symbols-outlined w-5 h-5">expand_more</span>
          </div>
          {activeMenu === 'dropdown2' && (<ul className="dropdown-menu">
            <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
            <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/features/contacts'>Contacts</Link></li>
            <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/features/companies'>Companies</Link></li>
            <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/features/projects'>Projects</Link></li>
            <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/features/tasks'>Tasks</Link></li>
            <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/features/board'>Board</Link></li>
            <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/features/table'>Table</Link></li>
            <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/features/crypto'>Crypto</Link></li>
          </ul>
          )}
        </li>

        <li className='mb-5 cursor-pointer'>
          <div className='text-base flex items-center justify-between hover:text-myBlue' onClick={() => toggleMenu('dropdown3')}>
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
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/profile/profileOne'>Profile v1</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/profile/profileTwo'>Profile v2</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/profile/profileThree'>Profile v3</Link></li>
            </ul>
          )}
        </li>
        <li className='mb-5 cursor-pointer'>
          <div className='text-base flex items-center justify-between hover:text-myBlue' onClick={() => toggleMenu('dropdown4')}>
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
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingOne'>Pricing v1</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingTwo'>Pricing v2</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingThree'>Pricing v3</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href='/pricing/pricingSingle'>Pricing Single</Link></li>
            </ul>
          )}
        </li>
        <li className='mb-5 cursor-pointer'>
          <div className='text-base flex items-center justify-between hover:text-myBlue' onClick={() => toggleMenu('dropdown5')}>
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
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href=''>All Pages</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href=''>Reports</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href=''>Products</Link></li>
              <li className='text-base mx-3 px-4 mt-2 rounded-full hover:text-myBlue hover:ml-6'><Link href=''>Tasks</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>



  );
});

export default SideBar;

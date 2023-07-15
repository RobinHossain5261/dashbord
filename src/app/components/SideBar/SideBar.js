"use client"
import { useState } from 'react';
import { ChevronDownIcon, HomeIcon, StarIcon, UserGroupIcon, CurrencyDollarIcon, } from '@heroicons/react/24/solid'
import Link from 'next/link';

const SideBar = () => {
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
    <nav className='ml-6'>
      <ul>
        <li className='mb-5 '>
          <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown1')}>
            <div className='flex items-center'>
              <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                home
              </span>
              <span>Dashbord</span>
            </div>
            <ChevronDownIcon className="h-4 w-4" />
          </button>

          {activeMenu === 'dropdown1' && (
            <ul className="dropdown-menu">
              <li className='text-base'><Link href=''>All Pages</Link></li>
              <li className='text-base'><Link href='/dashbord/reports'>Reports</Link></li>
              <li className='text-base'><Link href='/dashbord/products'>Products</Link></li>
              <li className='text-base'><Link href='/dashbord/tasks'>Tasks</Link></li>
            </ul>
          )}
        </li>

        <li className='mb-5'>
          <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown3')}>
            <div className='flex items-center'>
            <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
               star
              </span>
              <span>Features</span>
            </div>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          {activeMenu === 'dropdown3' && (
            <ul className="dropdown-menu">
              <li className='text-base'><Link href=''>All Pages</Link></li>
              <li className='text-base'><Link href='/features/contacts'>Contacts</Link></li>
              <li className='text-base'><Link href='/features/companies'>Companies</Link></li>
              <li className='text-base'><Link href='/features/projects'>Projects</Link></li>
              <li className='text-base'><Link href='/features/tasks'>Tasks</Link></li>
              <li className='text-base'><Link href='/features/board'>Board</Link></li>
              <li className='text-base'><Link href='/features/table'>Table</Link></li>
              <li className='text-base'><Link href='/features/crypto'>Crypto</Link></li>
            </ul>
          )}
        </li>
        <li className='mb-5'>
          <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown4')}>
            <div className='flex items-center'>
            <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                request_quote
              </span>
              <span>Pricing</span>
            </div>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          {activeMenu === 'dropdown4' && (
            <ul className="dropdown-menu">
              <li className='text-base'><Link href=''>All Pages</Link></li>
              <li className='text-base'><Link href=''>Reports</Link></li>
              <li className='text-base'><Link href=''>Products</Link></li>
              <li className='text-base'><Link href=''>Tasks</Link></li>
            </ul>
          )}
        </li>
        <li className='mb-5'>
          <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown5')}>
            <div className='flex items-center'>
            <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
                power
              </span>
              <span>Integrations</span>
            </div>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          {activeMenu === 'dropdown5' && (
            <ul className="dropdown-menu">
              <li className='text-base'><Link href=''>All Pages</Link></li>
              <li className='text-base'><Link href=''>Reports</Link></li>
              <li className='text-base'><Link href=''>Products</Link></li>
              <li className='text-base'><Link href=''>Tasks</Link></li>
            </ul>
          )}
        </li>

        <hr />

      </ul>
    </nav>
  );
};

export default SideBar;

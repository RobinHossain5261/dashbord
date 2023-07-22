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

    <nav ref={ref} className="fixed w-56 h-full bg-white shadow-sm">

      <div className="flex items-center gap-2 ml-6 mt-10 mb-[60px] cursor-pointer">
        <Image
          className="w-[31px] h-[36px]"
          src={logo}
          alt="company logo"
        />
        <h1 className="text-2xl font font-bold">Dashbord</h1>
      </div>

      <ul>
        <li className="mb-5">
          <button className='text-base flex item-center justify-between hover:bg-blue-400' onClick={() => toggleMenu('dropdown1')}>
            <div className='flex items-center'>
              {/* <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
          home
        </span> */}
              <span className="text-base">Dashbord</span>
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
      </ul>



      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>

        <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/account"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
        <Link href="/billing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </div>
        </Link>
      </div>
    </nav>


    // <nav className='ml-6'>
    //   <ul>
    //     <li className='mb-5 '>
    //       <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown1')}>
    //         <div className='flex items-center'>
    //           <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
    //             home
    //           </span>
    //           <span>Dashbord</span>
    //         </div>
    //         <ChevronDownIcon className="h-4 w-4" />
    //       </button>

    //       {activeMenu === 'dropdown1' && (
    //         <ul className="dropdown-menu">
    //           <li className='text-base'><Link href=''>All Pages</Link></li>
    //           <li className='text-base'><Link href='/dashbord/reports'>Reports</Link></li>
    //           <li className='text-base'><Link href='/dashbord/products'>Products</Link></li>
    //           <li className='text-base'><Link href='/dashbord/tasks'>Tasks</Link></li>
    //         </ul>
    //       )}
    //     </li>

    //     <li className='mb-5'>
    //       <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown2')}>
    //         <div className='flex items-center'>
    //         <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
    //            star
    //           </span>
    //           <span>Features</span>
    //         </div>
    //         <ChevronDownIcon className="h-4 w-4" />
    //       </button>
    //       {activeMenu === 'dropdown2' && (
    //         <ul className="dropdown-menu">
    //           <li className='text-base'><Link href=''>All Pages</Link></li>
    //           <li className='text-base'><Link href='/features/contacts'>Contacts</Link></li>
    //           <li className='text-base'><Link href='/features/companies'>Companies</Link></li>
    //           <li className='text-base'><Link href='/features/projects'>Projects</Link></li>
    //           <li className='text-base'><Link href='/features/tasks'>Tasks</Link></li>
    //           <li className='text-base'><Link href='/features/board'>Board</Link></li>
    //           <li className='text-base'><Link href='/features/table'>Table</Link></li>
    //           <li className='text-base'><Link href='/features/crypto'>Crypto</Link></li>
    //         </ul>
    //       )}
    //     </li>
    //     <li className='mb-5'>
    //       <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown3')}>
    //         <div className='flex items-center'>
    //         <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
    //            group
    //           </span>
    //           <span>User Profile</span>
    //         </div>
    //         <ChevronDownIcon className="h-4 w-4" />
    //       </button>
    //       {activeMenu === 'dropdown3' && (
    //         <ul className="dropdown-menu">
    //           <li className='text-base'><Link href=''>All Pages</Link></li>
    //           <li className='text-base'><Link href='/profile/profileOne'>Profile v1</Link></li>
    //           <li className='text-base'><Link href='/profile/profileTwo'>Profile v2</Link></li>
    //           <li className='text-base'><Link href='/profile/profileThree'>Profile v3</Link></li>
    //         </ul>
    //       )}
    //     </li>
    //     <li className='mb-5'>
    //       <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown4')}>
    //         <div className='flex items-center'>
    //         <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
    //             request_quote
    //           </span>
    //           <span>Pricing</span>
    //         </div>
    //         <ChevronDownIcon className="h-4 w-4" />
    //       </button>
    //       {activeMenu === 'dropdown4' && (
    //         <ul className="dropdown-menu">
    //           <li className='text-base'><Link href=''>All Pages</Link></li>
    //           <li className='text-base'><Link href='/pricing/pricingOne'>Pricing v1</Link></li>
    //           <li className='text-base'><Link href='/pricing/pricingTwo'>Pricing v2</Link></li>
    //           <li className='text-base'><Link href='/pricing/pricingThree'>Pricing v3</Link></li>
    //           <li className='text-base'><Link href='/pricing/pricingSingle'>Pricing Single</Link></li>
    //         </ul>
    //       )}
    //     </li>
    //     <li className='mb-5'>
    //       <button className='text-base flex item-center justify-between' onClick={() => toggleMenu('dropdown5')}>
    //         <div className='flex items-center'>
    //         <span class="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-3">
    //             power
    //           </span>
    //           <span>Integrations</span>
    //         </div>
    //         <ChevronDownIcon className="h-4 w-4" />
    //       </button>
    //       {activeMenu === 'dropdown5' && (
    //         <ul className="dropdown-menu">
    //           <li className='text-base'><Link href=''>All Pages</Link></li>
    //           <li className='text-base'><Link href=''>Reports</Link></li>
    //           <li className='text-base'><Link href=''>Products</Link></li>
    //           <li className='text-base'><Link href=''>Tasks</Link></li>
    //         </ul>
    //       )}
    //     </li>

    //     <hr />

    //   </ul>
    // </nav>
  );
});

export default SideBar;

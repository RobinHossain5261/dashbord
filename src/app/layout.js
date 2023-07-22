"use client"
import './globals.css'
import { Inter } from 'next/font/google'

import logo from '../../public/images/Logo.png';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import Provider from './components/DarkMode/Provider/Provider';
import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import TopBar from './components/TopBar/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DashBord',
  description: 'Responsive Dashbord',
}

export default function RootLayout({ children }) {

  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
      <title>DashBord</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </head>

      <body suppressHydrationWarning={true} className={inter.className}>
        <Provider>
          <TopBar showNav={showNav} setShowNav={setShowNav} />
          <Transition
            as={Fragment}
            show={showNav}
            enter="transform transition duration-[400ms]"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform duration-[400ms] transition ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <SideBar showNav={showNav} />
          </Transition>
          <div
            className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""
              }`}
          >
            <div className='mt-10'>{children}</div>
          <Footer/>
          </div>
        </Provider>
        
        {/* <Provider>
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content overflow-hidden ">

              <Header></Header>
              {children}
              <Footer></Footer>

            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <div className="menu p-4 lg:w-[312px] h-full  bg-white">
                <div className='ml-6 mt-7 mb-[60px]'>
                  <Link href='/' className="flex items-center normal-case">
                    <Image src={logo} alt='logo' className='w-[31px] h-9' />
                    <span className='text-2xl font-semibold ml-2'>DashPro</span>
                  </Link>
                </div>
                <div className='z-1'>
                  <SideBar></SideBar>
                </div>
              </div>
            </div>
          </div>
        </Provider> */}


      </body>
    </html>
  )
}

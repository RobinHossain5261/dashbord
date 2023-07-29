"use client"
import './globals.css'
import { Inter } from 'next/font/google';
import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import 'material-symbols';
import Provider from '@/components/DarkMode/Provider/Provider';
import TopBar from '@/components/TopBar/TopBar';
import SideBar from '@/components/SideBar/SideBar';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(true);
      setIsMobile(true);
    } else {
      setShowNav(false);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);

    }
    if (innerWidth > 640) {
      setShowNav(true)
    }
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>DashBord</title>
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
            <SideBar showNav={showNav} setShowNav={setShowNav} />
          </Transition>
          <div
            className={`pt-16  transition-all duration-[400ms] ${showNav && !isMobile ? "lg:pl-[280px] md:pl-[280px] pl-[100%]" : ""
              }`}
          >
            <div className='lg:mt-10 md:mt-10'>{children}</div>
            <Footer />
          </div>
        </Provider>


      </body>
    </html>
  )
}

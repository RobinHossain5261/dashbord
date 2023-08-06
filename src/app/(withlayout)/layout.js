"use client"
import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import TopBar from '@/components/TopBar/TopBar';
import Footer from '@/components/Footer/Footer';
import SideMenu from '@/components/SideMenu/SideMenu';



export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(!showNav);
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

    <>
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
        {/* <SideBar showNav={showNav} setShowNav={setShowNav} /> */}
        <SideMenu showNav={showNav} setShowNav={setShowNav} />
      </Transition>
      <div
        className={`pt-16  transition-all duration-[400ms] ${showNav && !isMobile ? "lg:pl-[280px] md:pl-[280px] pl-[100%]" : ""
          }`}
      >
        <div className='lg:mt-10'>{children}</div>
        <Footer />
      </div>

    </>

  )
}

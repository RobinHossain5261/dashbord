import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import logo from '../../public/images/Logo.png';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Provider from './components/DarkMode/Provider/Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DashBord',
  description: 'Responsive Dashbord',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </head>
      <body className={inter.className}>
      <Provider>
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
        </Provider>    
      </body>
    </html>
  )
}

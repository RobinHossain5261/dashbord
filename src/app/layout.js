
import './globals.css'
import { Inter } from 'next/font/google';
import 'material-symbols';
import Provider from '@/components/DarkMode/Provider/Provider';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Dashpro</title>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  )
}

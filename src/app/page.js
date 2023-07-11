import Image from 'next/image'
import Account from './components/Account/page'
import Reports from './dashbord/reports/page'

export default function Home() {
  return (
    <main className="bg-[#F7F9FC]">  
    <Reports></Reports>
    </main>
  )
}

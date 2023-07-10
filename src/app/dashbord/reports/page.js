import LineChart from "@/app/components/LineChart/LineChart";
import PieChart from "@/app/components/PieChart/PieChart";
import RecentContacts from "@/app/components/RecentContacts/RecentContacts";
// import PageViewChart from "@/app/components/PageViewChart/PageViewChart";
export const metadata = {
    title: 'DashBord-Reports',
    description: '',
  }
const Reports = () => {

    const cards = [
        {
            id: 1,
            name: 'Page view',
            view: '23.6k',
            icon: <span class="material-symbols-outlined">
                visibility
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#4538D3',
            color: 'white'
        },
        {
            id: 2,
            name: 'Users',
            view: '25.6k',
            icon: <span class="material-symbols-outlined">
                group
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#4538D3',
            color: 'white'
        },
        {
            id: 3,
            name: 'New sign ups',
            view: '4.5k',
            icon: <span class="material-symbols-outlined">
                add
            </span>,
            increment: '12.8%',
            trending: <span class="material-symbols-outlined">
                trending_down
            </span>,
            bgColor: '#FFA5A5',
            color: 'black'
        },
        {
            id: 4,
            name: 'Subscriptions',
            view: '5.5k',
            icon: <span class="material-symbols-outlined">
                currency_exchange
            </span>,
            increment: '11.3%',
            trending: <span class="material-symbols-outlined">
                trending_up
            </span>,
            bgColor: '#4538D3',
            color: 'white'
        }
    ]

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p>Jul 8, 2023</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                {
                    cards.map(card => (<div
                        key={card.id}
                        className="bg-white py-4 px-6 rounded">
                        <div className="flex justify-between">
                            <h3 className="text-base">{card.name}</h3>
                            <span className="w-10 h-10 bg-[#F1F1FA] text-[#4538D3] flex justify-center items-center rounded">{card.icon}</span>
                        </div>
                        <div className="flex">
                            <h1 className="text-2xl font-semibold">{card.view}</h1>
                            <div className='py-1 ] px-2 rounded ml-4  flex '
                                style={{ backgroundColor: card.bgColor, color: card.color }}
                            >
                                <h5 >{card.increment}</h5>
                                <span className="ml-1 hover:skew-y-12">{card.trending}</span>
                            </div>
                        </div>
                    </div>))
                }
            </div>

            {/* <LineChart></LineChart> */}
            <RecentContacts></RecentContacts>

        </div>
    )
}
export default Reports;
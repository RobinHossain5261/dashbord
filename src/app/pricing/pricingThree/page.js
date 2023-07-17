import React from 'react';
import '../pricingOne/pricing.css';

const PricingThree = () => {
    const cards = [
        {
            id: 1,
            package: 'Starter',
            price: '$333/month',
            des: 'Lorem ipsum dolor sit amet consectetur. A tellus dolor nec potenti. Ornare sem.',
            event: 'Up to 250k events',
            campaigns: 'Run 25 campaigns',
            users: 'Invite up to 10 users',
            database: 'Shared Database',
            security: 'Basic Security',
            icon:<span class="material-symbols-outlined text-[#4538D3]">send</span>
        },
        {
            id: 2,
            package: 'Professional',
            price: '$433/month',
            des: 'Lorem ipsum dolor sit amet consectetur. A tellus dolor nec potenti. Ornare sem.',
            event: 'Up to 250k events',
            campaigns: 'Run 25 campaigns',
            users: 'Invite up to 10 users',
            database: 'Shared Database',
            security: 'Basic Security',
            icon:<span class="material-symbols-outlined text-[#4538D3]">flight</span>
        },
        {
            id: 3,
            package: 'Premium',
            price: '$633/month',
            des: 'Lorem ipsum dolor sit amet consectetur. A tellus dolor nec potenti. Ornare sem.',
            event: 'Up to 250k events',
            campaigns: 'Run 25 campaigns',
            users: 'Invite up to 10 users',
            database: 'Shared Database',
            security: 'Basic Security',
            icon:<span class="material-symbols-outlined text-[#4538D3]">rocket_launch</span>
        }
    ]
    return (
        <div className='px-6 pt-10 pb-8'>
            <h2 className='text-[#2E293E] text-[40px] text-center font-semibold mb-5'>Our Pricing</h2>
            <p className='text-center text-lg text-[#2E293E]'>Vestibulum diam risus, convallis vel blandit eu, iaculis in diam. Fusce <br /> elementum metus sem.Nulla posuere, tortor sed .</p>
            <div className='flex items-center justify-center mt-7 mb-10 gap-6'>
                <button className='text-sm text-black py-3 px-4 border border-[#ECEEFB] rounded'>Billed Monthly</button>
                <button className='text-sm text-black py-3 px-4 border border-[#ECEEFB] rounded '>Billed Annually</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    cards.map(card => (<div
                        key={card.id}
                        className='bg-white py-7 px-8 rounded boxShadow  border hover:border-[#4538D3]'
                    >
                        <div className='flex gap-6'>
                            <div className=' w-[60px] h-[60px] flex items-center justify-center bg-[#ECEBFB] rounded'>
                                {card.icon}
                            </div>
                            <div>
                                <h5 className='text-[#4538D3] text-xl font-semibold'>{card.package}</h5>
                                <h4 className='text-[#2E293E] text-2xl font-semibold mt-2'>{card.price}</h4>
                            </div>
                        </div>
                        <p className='text-lg text-[#2E293E] mt-7'>{card.des}</p>

                        <ul className='mt-8 mb-10'>
                            <li className='text-lg text-[#2E293E] my-6'><span class="material-symbols-outlined w-6 h-6 align-middle mr-2">
                                done_all</span>{card.event}</li>
                            <li className='text-lg text-[#2E293E] my-6 '><span class="material-symbols-outlined w-6 h-6 align-middle mr-2">
                                done_all</span>{card.campaigns}</li>
                            <li className='text-lg text-[#2E293E] my-6'><span class="material-symbols-outlined w-6 h-6 align-middle mr-2">
                                done_all</span>{card.users}</li>
                            <li className='text-lg text-[#2E293E] my-6'><span class="material-symbols-outlined w-6 h-6 align-middle mr-2">
                                done_all</span>{card.database}</li>
                            <li className='text-lg text-[#2E293E] my-6'><span class="material-symbols-outlined w-6 h-6 align-middle mr-2">
                                done_all</span>{card.security}</li>
                        </ul>
                        <button className="text-sm ease-in-out duration-300	 py-3 px-4 border border-[#4538D3] text-[#4538D3] bg-white rounded w-full hover:text-white hover:bg-[#4538D3]">Selecet Plan</button>
                    </div>))
                }
            </div>
            <hr className='mt-16' />
        </div>
    );
};

export default PricingThree;
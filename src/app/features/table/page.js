"use client"
import React from 'react';

const invoices = [
  {
    id: 1,
    name: 'Ronald Richards',
    date: 'Oct 1, 2023',
    Amount: '$110,000',
    status: 'Paid',
    productsNo: '#2E293E',
    color: '#0F365D'
  },
  {
    id: 2,
    name: 'Arlene McCoy',
    date: '	5 Feb 2023',
    Amount: '	$210.00',
    status: 'Unpaid',
    productsNo: '#2E293E',
    color: '#725002'
  },
  {
    id: 3,
    name: 'Bessie Cooper',
    date: 'Sep 23, 2023',
    Amount: '$120,000 ',
    status: 'Pending',
    productsNo: '#2E293E',
    color: '#4538D3'
  },
  {
    id: 4,
    name: 'Jane Cooper',
    date: 'Sep 30, 2023',
    Amount: '$50,000 ',
    status: 'Paid',
    productsNo: '#2E293E',
    color: '#725002'
  },
  {
    id: 5,
    name: 'Kathryn Murphy',
    date: 'Oct 1, 2023',
    Amount: '$100,000',
    status: 'Pending',
    productsNo: '#2E293E',
    color: '#4538D3'
  },
  {
    id: 6,
    name: 'Wade Warren',
    date: 'Oct 1, 2023',
    Amount: '$130,000',
    status: 'Unpaid',
    productsNo: '#2E293E',
    color: '#725002'
  },
  {
    id: 7,
    name: 'Eleanor Pena',
    date: 'Oct 10, 2023',
    Amount: '$60,000',
    status: 'Pending',
    productsNo: '#2E293E',
    color: '#4538D3'
  },
  {
    id: 8,
    name: 'Ralph Edwards',
    date: 'Oct 9, 2023',
    Amount: '$90,000',
    status: 'Paid',
    productsNo: '#2E293E',
    color: '#0F365D'
  },
  {
    id: 9,
    name: 'Ronald Richards',
    date: 'Oct 1, 2023',
    Amount: '$110,000',
    status: 'Unpaid',
    productsNo: '#2E293E',
    color: '#725002'
  },
  {
    id: 10,
    name: 'Bessie Cooper',
    date: 'Oct 2, 2023',
    Amount: '$80,000',
    status: 'Paid',
    productsNo: '#2E293E',
    color: '#0F365D'
  },

]

const table = () => {
  return (
    <div className='px-6 pt-10 pb-6'>
      <h3 className='text-[32px] font-semibold text-[#2E293E]'>Table</h3>
      <span className='text-sm text-[#2E293E]'>Lorem ipsum dolor sit ammet consectetur.</span>

      <div className='bg-white py-8 px-7 mt-8 rounded'>
        <div className='flex justify-between'>
          <h3 className='text-xl'>All Invoices</h3>
          <span className='border rounded border-[#ECEEFB] text-[#2E293E] text-sm py-3 px-4'>5-10 of 10</span>
        </div>

        <div className="overflow-x-auto block mt-10">
          <table className="table overflow-hidden w-[150%] lg:w-full">

            <thead className='bg-[#F5F7FD] text-lg text-[#2E293E]'>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className='text-lg'>Invoices ID</th>
                <th >
                  <div className='flex items-center'>
                    <span className='text-lg'>Customer List</span>
                    <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                  </div>
                </th>
                <th>
                  <div className='flex items-center'>
                    <span className='text-lg'>Start Date</span>
                    <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                  </div>
                </th>
                <th>
                  <div className='flex items-center'>
                    <span className='text-lg'>Amount</span>
                    <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                  </div>
                </th>
                <th>
                  <div className='flex items-center'>
                    <span className='text-lg'>Status List</span>
                    <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                  </div>
                </th>
                <th>
                  <div className='flex items-center'>
                    <span className='text-lg'>Delete</span>
                    <span class="material-symbols-outlined text-[#2E293E] ml-2">unfold_less</span>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody>
              {
                invoices.map(contacts => (<tr
                  key={contacts.id}
                >
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="text-base">{contacts.productsNo}</div>
                    </div>
                  </td>
                  
                  <td className="text-lg">{contacts.name}</td>
                  <td className="text-lg ">{contacts.date}</td>
                  <td className="text-lg ">{contacts.Amount}</td>
                  <td className="text-lg " style={{color:contacts.color}}>{contacts.status}</td>
                  <th >
                    <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-[#4538D3]">
                      auto_fix
                    </span>
                    <span class="material-symbols-outlined cursor-pointer hover:text-red-500">
                      delete
                    </span>
                  </th>
                </tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
      <hr className='mt-6' />
    </div>
  );
};

export default table;
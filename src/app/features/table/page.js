"use client"
import { useTheme } from 'next-themes';
import React from 'react';

const invoices = [
  {
    id: 1,
    name: 'Ronald Richards',
    date: 'Oct 1, 2023',
    Amount: '$110,000',
    status: 'Paid',
    productsNo: '#2E293E',
    color: '#0F365D',
    color1: '#00E177'
  },
  {
    id: 2,
    name: 'Arlene McCoy',
    date: '	5 Feb 2023',
    Amount: '	$210.00',
    status: 'Unpaid',
    productsNo: '#2E293E',
    color: '#725002',
    color1: '#FFA5A5'
  },
  {
    id: 3,
    name: 'Bessie Cooper',
    date: 'Sep 23, 2023',
    Amount: '$120,000 ',
    status: 'Pending',
    productsNo: '#2E293E',
    color: '#4538D3',
    color1: '#F8C140'
  },
  {
    id: 4,
    name: 'Jane Cooper',
    date: 'Sep 30, 2023',
    Amount: '$50,000 ',
    status: 'Paid',
    productsNo: '#2E293E',
    color: '#725002',
    color1: '#00E177'
  },
  {
    id: 5,
    name: 'Kathryn Murphy',
    date: 'Oct 1, 2023',
    Amount: '$100,000',
    status: 'Pending',
    productsNo: '#2E293E',
    color: '#4538D3',
    color1: '#F8C140'
  },
  {
    id: 6,
    name: 'Wade Warren',
    date: 'Oct 1, 2023',
    Amount: '$130,000',
    status: 'Unpaid',
    productsNo: '#2E293E',
    color: '#725002',
    color: '#FFA5A5'
  },
  {
    id: 7,
    name: 'Eleanor Pena',
    date: 'Oct 10, 2023',
    Amount: '$60,000',
    status: 'Pending',
    productsNo: '#2E293E',
    color: '#4538D3',
    color1: '#F8C140'
  },
  {
    id: 8,
    name: 'Ralph Edwards',
    date: 'Oct 9, 2023',
    Amount: '$90,000',
    status: 'Paid',
    productsNo: '#2E293E',
    color: '#0F365D',
    color1: '#00E177'
  },
  {
    id: 9,
    name: 'Ronald Richards',
    date: 'Oct 1, 2023',
    Amount: '$110,000',
    status: 'Unpaid',
    productsNo: '#2E293E',
    color: '#725002',
    color1: '#FFA5A5'
  },
  {
    id: 10,
    name: 'Bessie Cooper',
    date: 'Oct 2, 2023',
    Amount: '$80,000',
    status: 'Paid',
    productsNo: '#2E293E',
    color: '#0F365D',
    color1: '#00E177'
  },

]

const table = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className='px-2 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg'>
      <h3 className='text-[32px] font-semibold text-myBlack dark:text-white'>Table</h3>
      <span className='text-sm text-myBlack dark:text-white'>Lorem ipsum dolor sit ammet consectetur.</span>

      <div className='bg-white dark:bg-darkCard p-2 lg:py-8 lg:px-7 mt-8 rounded'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl text-myBlack dark:text-myWhite'>All Invoices</h3>
          <span className='border rounded border-myLine dark:border-darkLine text-myBlack dark:text-myWhite text-sm py-3 px-4'>5-10 of 10</span>
        </div>

        <div className="overflow-x-auto block mt-5 lg:mt-10">
          <table className="table overflow-hidden w-full">

            <thead className='bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-myWhite'>
              <tr className='dark:border-darkLine'>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                  </label>
                </th>
                <th className='text-lg'>Invoices ID</th>
                <th >
                  <div className='flex items-center'>
                    <span className='text-lg'>Customer List</span>
                    <span class="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">unfold_more</span>
                  </div>
                </th>
                <th>
                  <div className='flex items-center'>
                    <span className='text-lg'>Start Date</span>
                    <span class="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">unfold_more</span>
                  </div>
                </th>
                <th>
                  <div className='flex items-center'>
                    <span className='text-lg'>Amount</span>
                    <span class="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">unfold_more</span>
                  </div>
                </th>
                <th>
                  <div className='flex items-center'>
                    <span className='text-lg'>Status List</span>
                    <span class="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">unfold_more</span>
                  </div>
                </th>
                <th>
                  <div className='flex items-center'>
                    <span className='text-lg'>Delete</span>
                    <span class="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">unfold_more</span>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody>
              {
                invoices.map(contacts => (<tr
                  key={contacts.id}
                  className='dark:border-darkLine'
                >
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox dark:bg-[#1E192A]" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="text-base text-myBlack dark:text-myWhite">{contacts.productsNo}</div>
                    </div>
                  </td>

                  <td className="text-lg text-myBlack dark:text-myWhite">{contacts.name}</td>
                  <td className="text-lg text-myBlack dark:text-myWhite ">{contacts.date}</td>
                  <td className="text-lg text-myBlack dark:text-myWhite ">{contacts.Amount}</td>
                  <td
                    className="text-lg"
                    style={{
                      color: resolvedTheme === 'dark' ? `${contacts.color1}` : `${contacts.color}`
                    }}
                  >{contacts.status}
                  </td>
                  <th className='text-myBlack dark:text-myWhite '>
                    <span class="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue">
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
      <hr className='mt-6 border-myLine dark:border-darkLine' />
    </div>
  );
};

export default table;
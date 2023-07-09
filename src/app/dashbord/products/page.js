import phone1 from '@/../public/images/phone1.png';
import phone2 from '@/../public/images/phone2.png';
import phone3 from '@/../public/images/phone3.png';
import phone4 from '@/../public/images/phone4.png';

import photo1 from '@/../public/images/photo1.png';
import photo2 from '@/../public/images/photo2.png';
import photo3 from '@/../public/images/photo3.png';
import photo4 from '@/../public/images/photo4.png';
import photo5 from '@/../public/images/photo5.png';
import photo6 from '@/../public/images/photo6.png';
import Image from 'next/image';

const products = () => {


    // Recent order products data
    const products = [
        {
            id: 1,
            name: 'iPhone Pro Max',
            post: '10 minutes ago',
            price: "$2190.00",
            image: phone1
        },
        {
            id: 2,
            name: 'Gallaxy Pro',
            post: '10 minutes ago',
            price: "$210.00",
            image: phone2
        },
        {
            id: 3,
            name: 'Note 10',
            post: '10 minutes ago',
            price: "$290.00",
            image: phone3
        },
        {
            id: 4,
            name: 'Macbook air',
            post: '10 minutes ago',
            price: "$990.00",
            image: phone4
        },
    ]
    // All Products details data
    const allProducts = [
        {
            id: 1,
            productsNo: '#2E293E',
            status: 'MacBook Pro 15',
            category: 'Laptop',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo1
        },
        {
            id: 2,
            productsNo: '#2E293E',
            status: 'Google Pixel 6',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '15',
            img: photo2
        },
        {
            id: 3,
            productsNo: '#2E293E',
            status: 'iphone 13 Pro',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '13',
            img: photo3
        },
        {
            id: 4,
            productsNo: '#2E293E',
            status: 'Macbook Air',
            category: 'Notebook',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo4
        },
        {
            id: 5,
            productsNo: '#2E293E',
            status: 'Google Pixel 6',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo5
        },
        {
            id: 6,
            productsNo: '#2E293E',
            status: 'iphone 13 Pro',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '20',
            img: photo6
        },
    ]
    // Orders products data
    const orderProducts = [

        {
            id: 2,
            name: 'Mehmet Talay',
            product: 'Google Pixel 6',
            status: 'Shipped',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            img: photo1,
            color:'#4538D3'
        },
        {
            id: 3,
            name: 'Kadin Bozkurt',
            product: 'iphone 13 Pro',
            status: 'Falied',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '13',
            img: photo2,
            color:'#725002'
        },
        {
            id: 4,
            name: 'Kadin Bozkurt',
            product: 'Macbook Air',
            status: '	Processing',
            category: 'Notebook',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo3,
            color:'#4538D3'
        },
        {
            id: 5,
            name: 'Sukran Memis',
            product: 'Google Pixel 6',
            status: 'Shipped',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '25',
            img: photo4,
            color:'#725002'
        },
        {
            id: 6,
            name: 'Kadin Bozkurt',
            product: 'iphone 13 Pro',
            status: 'Processing',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '20',
            img: photo5,
            color:'#4538D3'
        },
        {
            id: 7,
            name: 'Kadin Bozkurt',
            product: 'iphone 13 Pro',
            status: 'Shipped',
            category: 'Smartphoness',
            startDate: '23 Feb 2022',
            salesPrice: '$2190.00',
            stock: '20',
            img: photo6,
            color:'#725002'
        }
    ]

    return (
        <div className='p-6'>
            <h1 className="text-2xl font-semibold">Dashbord</h1>
            <p>Jul 9, 2023</p>

            {/* Recent order */}
            <div className="bg-white rounded p-10 mt-8">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl ml-5">Recent Orders</h3>
                    <h4 className='bg-[#ECEEFB] border rounded py-3 px-4 mr-5'>See all</h4>
                </div>
                <hr className='my-7' />

                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>

                            {
                                products.map(product => (<tr className='flex justify-between'>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={product.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                                <div className="text-sm opacity-50">{product.post}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-[#4538D3] font-semibold text-xl'>
                                        {product.price}
                                    </td>

                                </tr>))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            {/* all products details */}
            <div className='p-8 bg-white my-6 rounded'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl text-[#2E293E]'>Products</h1>
                    <p className='bg-[#ECEEFB] rounded py-3 px-4 border'>Browse Products</p>
                </div>
                <hr className='my-7' />

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#CFD5F6] text-lg text-[#2E293E]'>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Product No</th>
                                <th>Status</th>
                                <th>Category</th>
                                <th>Start Date</th>
                                <th>Sales Price</th>
                                <th>Stock</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map(product => (<tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{product.productsNo}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.status}</td>
                                    <td>{product.category}</td>
                                    <td>{product.startDate}</td>
                                    <td>{product.salesPrice}</td>
                                    <td>{product.stock}</td>
                                    <th className='hover:text-red-500'>
                                        <span class="material-symbols-outlined">
                                            delete
                                        </span>
                                    </th>
                                </tr>))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            {/* Order Status */}
            <div className='p-8 bg-white mt-6 rounded'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl text-[#2E293E]'>Order Status</h1>
                    <p className='bg-[#ECEEFB] rounded py-3 px-4 border'>14 Aug - 25 Aug</p>
                </div>
                <hr className='my-7' />

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#CFD5F6] text-lg text-[#2E293E]'>
                            <tr>
                                <th>Name</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderProducts.map(product => (<tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={product.img} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.product}</td>
                                    <td>{product.category}</td>
                                    <td>{product.startDate}</td>
                                    <td>{product.salesPrice}</td>
                                    <td>{product.status}</td>
                                    <th className='hover:text-red-500'>:</th>
                                </tr>))
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}
export default products;
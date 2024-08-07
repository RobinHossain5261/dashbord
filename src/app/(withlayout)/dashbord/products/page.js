"use client";
import Image from "next/image";
import "./products.css";
import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { useTheme } from "next-themes";
import TotalSeles from "@/components/Chart/TotalSeles";
import {
  allProducts,
  orderProducts,
  productLists,
} from "../../../../../public/data/dashbordData";
import { useEffect } from "react";

const people = [
  { id: 1, name: "14 Aug - 25 Aug", unavailable: false },
  { id: 2, name: "26 Aug - 12 Sep", unavailable: false },
  { id: 3, name: "13 Sep - 26 Sep", unavailable: false },
];

const products = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="px-3 lg:px-6 pb-6 pt-10 bg-bgColor dark:bg-darkBg">
      <h1 className="text-[32px] font-semibold text-myBlack dark:text-white">
        Dashbord
      </h1>
      <span className="text-sm text-myBlack dark:text-white">Jul 9, 2023</span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white dark:bg-darkCard rounded p-2 lg:px-10 lg:pt-10 lg:pb-6">
          <h4 className="text-xl text-myBlack dark:text-[#ECEEFB]">
            Total Sales
          </h4>
          <div className="flex justify-between">
            <div>
              <span className="text-xl text-myBlack dark:text-white font-semibold mt-2">
                $209,907.00
              </span>
            </div>
            <div className=" px-2 rounded  flex items-center justify-center bg-myBlue dark:bg-[#00E177] text-white dark:text-[#1E192A]">
              <h5 className="text-sm">12.8 %</h5>
              <span className="material-symbols-outlined">trending_up</span>
            </div>
          </div>
          <hr className="my-5 lg:my-10 border-myLine dark:border-darkLine" />
          <TotalSeles/>
        </div>
        {/* Recent order */}
        <div className="bg-white dark:bg-darkCard  rounded p-2 lg:p-10 ">
          <div className="flex justify-between items-center">
            <h3 className="text-xl text-myBlack dark:text-myWhite ">
              Recent Orders
            </h3>
            <h4 className="text-sm text-myBlack dark:text-myWhite border border-[#ECEEFB] dark:border-darkLine rounded py-3 px-4 cursor-pointer">
              See all
            </h4>
          </div>
          <hr className="my-5 lg:my-10 border-myLine dark:border-darkLine" />

          <div className="overflow-x-auto whitespace-nowrap">
            <table className="table">
              <tbody>
                {productLists.map((product) => (
                  <tr
                    key={product.id}
                    className="flex justify-between items-center border-myLine dark:border-darkLine"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle ">
                            <Image
                              src={product.image}
                              alt="Avatar Tailwind CSS Component"
                              className="w-[60px] h-[60px] dark:bg-[#1E192A] rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-base text-myBlack font-semibold dark:text-white">
                            {product.name}
                          </div>
                          <div className="text-base text-myBlack dark:text-myWhite">
                            {product.post}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-myBlue dark:text-myGreen font-semibold text-xl">
                      {product.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* all products details */}
      <div className="p-2 lg:p-8 bg-white dark:bg-darkCard my-6 rounded">
        <div className="flex justify-between items-center">
          <h3 className="text-xl text-myBlack dark:text-myWhite">Products</h3>
          <span className="border border-[#ECEEFB] dark:border-darkLine rounded py-3 px-4  text-sm text-myBlack dark:text-myLine cursor-pointer">
            Browse Products
          </span>
        </div>
        <hr className="my-5 lg:my-7 border-myLine dark:border-darkLine" />

        <div className="overflow-x-auto">
          <table className="table whitespace-nowrap">
            <thead className="bg-[#F5F7FD]  dark:bg-darkBg text-lg    ">
              <tr className="border-myLine dark:border-darkLine text-myBlack dark:text-white">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox dark:bg-[#1E192A]"
                    />
                  </label>
                </th>
                <th className="text-lg font-normal text-myBlack dark:text-white">
                  Product No
                </th>
                <th>
                  <div className="flex items-center gap-2">
                    <span className="font-normal">Status</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center gap-2">
                    <span className="font-normal">Category</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Start Date</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Sales price</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Stock</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Delete</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((product) => (
                <tr
                  key={product.id}
                  className="dark:border-darkLine border-myLine"
                >
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox dark:bg-[#1E192A]"
                      />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="text-base text-myBlack dark:text-myWhite">
                          {product.productsNo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.status}
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.category}
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.startDate}
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.salesPrice}
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.stock}
                  </td>
                  <th className="cursor-pointer text-myBlack dark:text-myWhite">
                    <span className="material-symbols-outlined w-[18px] h-[18px] hover:text-myBlue dark:hover:text-myGreen">
                      auto_fix
                    </span>
                    <span className="material-symbols-outlined w-5 h-5 hover:text-red-500 ml-2">
                      delete
                    </span>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Status */}
      <div className="p-2 lg:p-8 bg-white dark:bg-darkCard mt-6 rounded">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-xl text-myBlack dark:text-myWhite">
            Order Status
          </h1>
          <div>
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
              <Listbox.Button className="flex  gap-2 items-center  relative w-full cursor-pointer rounded-lg text-[#252525] dark:text-myWhite dark:border-darkLine py-2 px-3 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                {selectedPerson.name}
                <span className="material-symbols-outlined">expand_more</span>
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white dark:bg-darkCard  py-2  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    value={person}
                    disabled={person.unavailable}
                    as={Fragment}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-5 ${
                        active
                          ? "bg-myBlue dark:bg-myGreen text-white"
                          : "text-gray-900 dark:text-white"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <li>
                        {selected}
                        {person.name}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        </div>
        <hr className="my-5 lg:my-7 border-myLine dark:border-darkLine" />

        <div className="overflow-x-auto whitespace-nowrap">
          <table className="table">
            <thead className="bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-white">
              <tr className="dark:border-darkLine  border-myLine">
                <th className="text-lg font-normal">Name</th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Product </span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Category</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Date</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Price</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Status</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span className="font-normal">Action</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {orderProducts.map((product) => (
                <tr
                  key={product.id}
                  className="dark:border-darkLine border-myLine"
                >
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10">
                          <Image src={product.img} />
                        </div>
                      </div>
                      <div>
                        <div className="text-base text-myBlack dark:text-myWhite">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.product}
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.category}
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.startDate}
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite">
                    {product.salesPrice}
                  </td>
                  <td
                    className="text-base text-myBlack"
                    style={{
                      color:
                        resolvedTheme === "light"
                          ? `${product.color}`
                          : `${product.color1}`,
                    }}
                  >
                    {product.status}
                  </td>

                  <th className="w-[18px] h-[18px] cursor-pointer text-myBlack dark:text-myWhite">
                    <span className="w-[18px] h-[18px] dark:text-white cursor-pointer">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </span>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr className="mt-6 border-myLine dark:border-darkLine" />
    </div>
  );
};
export default products;

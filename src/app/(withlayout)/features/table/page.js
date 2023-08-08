"use client";
import { useTheme } from "next-themes";
import React from "react";
import { invoices } from "../../../../../public/data/featuresData";

const table = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="px-3 lg:px-6 pt-10 pb-6 bg-bgColor dark:bg-darkBg">
      <h3 className="text-[32px] font-semibold text-myBlack dark:text-white">
        Table
      </h3>
      <span className="text-sm text-myBlack dark:text-white">
        Lorem ipsum dolor sit ammet consectetur.
      </span>

      <div className="bg-white dark:bg-darkCard p-2 lg:py-8 lg:px-7 mt-8 rounded">
        <div className="flex justify-between items-center">
          <h3 className="text-xl text-myBlack dark:text-myWhite">
            All Invoices
          </h3>
          <span className="border rounded border-myLine dark:border-darkLine text-myBlack dark:text-myWhite text-sm py-3 px-4">
            5-10 of 10
          </span>
        </div>

        <div className="overflow-x-auto block mt-5 sm:mt-10">
          <table className="table overflow-hidden w-full">
            <thead className="bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-myWhite">
              <tr className="dark:border-darkLine">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox dark:bg-[#1E192A]"
                    />
                  </label>
                </th>
                <th className="text-lg font-normal">Invoices ID</th>
                <th>
                  <div className="flex items-center font-normal">
                    <span className="text-lg">Customer List</span>
                    <span className="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center font-normal">
                    <span className="text-lg">Start Date</span>
                    <span className="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center font-normal">
                    <span className="text-lg">Amount</span>
                    <span className="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center font-normal">
                    <span className="text-lg">Status List</span>
                    <span className="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center font-normal">
                    <span className="text-lg">Delete</span>
                    <span className="material-symbols-outlined text-myBlack ml-2 dark:text-myWhite">
                      unfold_more
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((contacts) => (
                <tr
                  key={contacts.id}
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
                      <div className="text-base text-myBlack dark:text-myWhite">
                        {contacts.productsNo}
                      </div>
                    </div>
                  </td>

                  <td className="text-base text-myBlack dark:text-myWhite">
                    {contacts.name}
                  </td>
                  <td className="text-lg text-myBlack dark:text-myWhite ">
                    {contacts.date}
                  </td>
                  <td className="text-base text-myBlack dark:text-myWhite ">
                    {contacts.Amount}
                  </td>
                  <td
                    className="text-base"
                    style={{
                      color:
                        resolvedTheme === "dark"
                          ? `${contacts.color1}`
                          : `${contacts.color}`,
                    }}
                  >
                    {contacts.status}
                  </td>
                  <th className="text-myBlack dark:text-myWhite ">
                    <span className="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue">
                      auto_fix
                    </span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-red-500">
                      delete
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

export default table;

import React from "react";
import { Listbox } from "@headlessui/react";
import visa from "@/../public/images/visa.png";
import bitpay from "@/../public/images/bitpay.png";
import stripe from "@/../public/images/Stripe.png";
import skrill from "@/../public/images/skrill.png";
import paypal from "@/../public/images/PayPal.png";
import neteller from "@/../public/images/neteller.png";
import mybank from "@/../public/images/mybank.png";
import mastercard from "@/../public/images/mastercard.png";
import amex from "@/../public/images/Amex.png";
import { useState } from "react";
import { Fragment } from "react";
import { invoiceDetails } from "../../../../public/data/settingsData";
import Image from "next/image";

const people = [
  { id: 1, name: "State", unavailable: false },
  { id: 2, name: "Orieo", unavailable: false },
  { id: 3, name: "Arizona", unavailable: false },
];

const Belling = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <div className="w-full">
      {/* Payment method  */}
      <div className="bg-white dark:bg-darkCard p-3 lg:px-7 lg:py-8 rounded">
        <div className="flex gap-3 items-center">
          <span className="material-symbols-outlined text-myBlue dark:text-myGreen">
            add_card
          </span>
          <h4 className="text-myBlack dark:text-white text-xl md:text-2xl lg:text-2xl font-semibold">
            Payment methods
          </h4>
        </div>

        <div className="my-3 lg:mt-8 lg:mb-6 flex flex-wrap gap-3 lg:gap-5">
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3 ">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image src={visa} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image src={bitpay} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image src={stripe} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image className="rounded-[10px]" src={skrill} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image src={paypal} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image src={neteller} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image src={neteller} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image src={mybank} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image className="rounded-[10px]" src={mastercard} alt="visa" />
            </label>
          </div>
          <div className="form-control w-[185px] justify-around border border-myBlue dark:border-myGreen rounded-[10px] px-3">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-white border-myBlue dark:border-myGreen checked:border-[7px]  checked:border-myBlue"
                checked
              />
              <Image className="rounded-[10px]" src={amex} alt="visa" />
            </label>
          </div>
        </div>
      </div>

      {/* Payment Details  */}
      <div className="lg:w-3/4 mx-auto bg-white dark:bg-darkCard rounded p-3 lg:px-8 lg:py-7 mt-6 cardShadow">
        <h4 className="text-xl md:text-2xl lg:text-2xl text-myBlack dark:text-white font-semibold text-center mb-6">
          Enter your payment details
        </h4>

        <form>
          <div className="flex flex-wrap justify-between  rounded bg-[#F7F8FD] dark:bg-[#1E192A] mb-5">
            <div className="flex max-w-sm gap-2 py-2 px-[18px]">
              <span className="material-symbols-outlined text-myGrey dark:text-myLine w-5 h-5">
                add_card
              </span>
              <input
                type="text"
                placeholder="Card number"
                className="w-full text-myBlack dark:text-myWhite outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm placeholder-myGrey dark:placeholder-myLine"
              />
            </div>
            <input
              type="text"
              placeholder="MM / YY CVC"
              className="lg:text-end max-w-sm outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-myBlack dark:text-myWhite text-sm py-2 px-[18px] placeholder-myGrey dark:placeholder-myLine"
            />
          </div>
          <input
            type="text"
            placeholder="Street address"
            className="w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] rounded mb-5 placeholder-myGrey dark:placeholder-myLine text-myBlack dark:text-myWhite"
          />

          <div className="lg:flex gap-6 mb-5">
            <input
              type="text"
              placeholder="Apt, unit, suite, etc. (optional)"
              className="w-full lg:w-1/2 outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] rounded placeholder-myGrey dark:placeholder-myLine lg:mb-0 mb-6 text-myBlack dark:text-myWhite"
            />
            <input
              type="text"
              placeholder="(+33)7 35 55 21 02"
              className="w-full lg:w-1/2 outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-2 px-[18px] rounded placeholder-myGrey dark:placeholder-myLine text-myBlack dark:text-myWhite"
            />
          </div>

          <div className="lg:flex gap-6">
            <input
              type="text"
              placeholder="City"
              className="w-full lg:w-1/2 outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-[6px] px-[18px] rounded placeholder-myGrey dark:placeholder-myLine mb-6 lg:mb-0 text-myBlack dark:text-myWhite "
            />
            <div className="flex gap-6 w-full lg:w-1/2">
              <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <Listbox.Button className="flex  justify-between bg-[#F7F8FD] dark:bg-[#1E192A] gap-2 items-center  relative w-full cursor-pointer rounded-lg text-myGrey dark:text-myLine  py-[6px] px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  {selectedPerson.name}
                  <span className="material-symbols-outlined text-myGrey dark:text-myLine">
                    expand_more
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white dark:bg-darkBg  py-2  text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
              <input
                type="text"
                placeholder="Zip code"
                className="w-full outline-none bg-[#F7F8FD] dark:bg-[#1E192A] text-sm py-[6px] px-[18px] rounded placeholder-myGrey dark:placeholder-myLine text-myBlack dark:text-myWhite"
              />
            </div>
          </div>

          <div className="flex justify-center mt-5 lg:mt-10">
            <button className="text-sm bg-myBlue dark:bg-myGreen text-white px-4 py-3 rounded">
              Add new card
            </button>
          </div>
        </form>
      </div>

      <hr className="lg:w-3/4 mx-auto border-myLine dark:border-darkLine my-4 lg:my-6" />

      <div className="lg:w-3/4 mx-auto bg-white dark:bg-darkCard p-3 lg:px-7 lg:py-8 rounded">
        <h4 className="text-2xl font-semibold text-myBlack dark:text-white mb-4 lg:mb-7">
          Invoice Detail
        </h4>
        <div className="overflow-x-auto">
          <table className="table overflow-hidden whitespace-nowrap w-full">
            <thead className="bg-[#F5F7FD] dark:bg-darkBg text-lg text-myBlack dark:text-white">
              <tr className=" dark:border-darkLine border-myLine">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox dark:bg-[#1E192A]"
                    />
                  </label>
                </th>
                <th>Contacts</th>
                <th>
                  <div className="flex items-center">
                    <span>Amount</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span>Date</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex items-center">
                    <span>PDF</span>
                    <span className="material-symbols-outlined text-myBlack dark:text-white ml-2">
                      unfold_more
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceDetails.map((invoice) => (
                <tr
                  key={invoice.id}
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
                    <div className="text-base text-myBlack dark:text-myWhite">
                      {invoice.contacts}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="text-base text-myBlack dark:text-myWhite">
                        {invoice.amount}
                      </div>
                    </div>
                  </td>

                  <td className="text-lg text-myBlack dark:text-myWhite">
                    {invoice.date}
                  </td>
                  <th className="text-myBlack dark:text-myWhite">
                    <span className="material-symbols-outlined cursor-pointer mr-1 hover:text-myBlue dark:hover:text-myGreen">
                      download
                    </span>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Belling;

"use client";

import React from "react";
import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import "../pricing_one/pricing.css";

const people = [
  { id: 1, name: "Selecet Plan Duration", unavailable: false },
  { id: 2, name: "3 Month", unavailable: false },
  { id: 3, name: "6 Month", unavailable: false },
  { id: 4, name: "12 Month", unavailable: false },
];

const pricingSingle = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="px-3 lg:px-6 pt-10 md:mt-10 bg-bgColor dark:bg-darkBg">
      <div className="lg:flex md:flex gap-6">
        <section className="p-3 lg:px-10 lg:py-8 h-full bg-white dark:bg-darkCard rounded boxShadow mb-6">
          <div className="flex items-center gap-6 mb-7">
            <div className=" w-[60px] h-[60px] flex items-center justify-center bg-[#ECEBFB] dark:bg-[#2C3140] rounded">
              <span className="material-symbols-outlined text-myBlue dark:text-myGreen">
                send
              </span>
            </div>
            <div>
              <h4 className="text-2xl text-myBlue dark:text-myGreen font-semibold">
                Starter
              </h4>
              <h3 className="text-2xl text-myBlack dark:text-white font-semibold">
                $123/month
              </h3>
            </div>
          </div>
          <p className="text-lg text-myBlack dark:text-myWhite mb-5 lg:mb-10">
            Integer tincidunt nulla mollis eros commodo, ac varius neque ornare.
            Cras non nisi vel sapien{" "}
          </p>
          <div>
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
              <Listbox.Button className="flex justify-between gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] dark:text-myWhite py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                {selectedPerson.name}
                <span className="material-symbols-outlined">expand_more</span>
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 max-w-60 z-10 text-center overflow-auto rounded-md bg-white dark:bg-darkBg py-2  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    value={person}
                    disabled={person.unavailable}
                    as={Fragment}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-5 ${
                        active
                          ? "bg-myBlue dark:bg-myGreen text-white "
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
          <button className="text-white bg-myBlue dark:bg-myGreen text-sm px-4 py-3 w-full rounded mt-5">
            Add to Cart
          </button>
        </section>
        {/* StartUp plan Start */}
        <section className="p-3 lg:py-8 lg:px-10 bg-white dark:bg-darkCard rounded boxShadow">
          <h5 className="text-xl font-semibold text-myBlack dark:text-white mb-5">
            Startup plan
          </h5>
          <p className="text-lg text-myBlack dark:text-myWhite text-justify">
            Lorem ipsum dolor sit amet consectetur. Urna nibh ut morbi quam
            lorem. In facilisis risus adipiscing adipiscing congue non tincidunt
            rutrum lectus. Gravida tortor at non id sed tincidunt.
          </p>
          <h5 className="text-xl font-semibold text-myBlack dark:text-white mt-7 mb-5">
            What aspects are covered by the plan?
          </h5>
          <p className="text-lg text-myBlack dark:text-myWhite mb-5 text-justify">
            velit viverra sit semper lorem eu cursus vel hendrerit elementum
            morbi curabitur etiam nibh justo lorem aliquet donec sed sit mi
            dignissim at ante massa mattis.
          </p>

          <ol className="mb-7 list-decimal list-inside">
            <li className="text-myGrey dark:text-myWhite text-sm mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
            <li className="text-myGrey dark:text-myWhite text-sm mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
            <li className="text-myGrey dark:text-myWhite text-sm mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
            <li className="text-myGrey dark:text-myWhite text-sm mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
            <li className="text-myGrey dark:text-myWhite text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
          </ol>
          <h5 className="text-xl font-semibold text-myBlack dark:text-white mb-5">
            Is the price plan I've chosen appropriate for my company?
          </h5>
          <p className="text-lg text-myBlack dark:text-myWhite mb-5 text-justify">
            velit viverra sit semper lorem eu cursus vel hendrerit elementum
            morbi curabitur etiam nibh justo lorem aliquet donec sed sit mi
            dignissim at ante massa mattis.
          </p>
          <ul className="mb-7 list-disc list-inside">
            <li className="text-myGrey dark:text-myWhite text-sm mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
            <li className="text-myGrey dark:text-myWhite text-sm mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
            <li className="text-myGrey dark:text-myWhite text-sm mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
            <li className="text-myGrey dark:text-myWhite text-sm mb-4 text-justify	">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
            <li className="text-myGrey dark:text-myWhite text-sm text-justify ">
              Lorem ipsum dolor sit amet consectetur. Vitae non dictum quam
              volutpat.
            </li>
          </ul>
        </section>
      </div>
      <hr className="mt-5 sm:mt-14 sm:pb-8 border-myLine dark:border-darkLine" />
    </div>
  );
};

export default pricingSingle;

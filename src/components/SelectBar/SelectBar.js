"use client"

import { useState, Fragment } from 'react'
import { Listbox } from '@headlessui/react';

const people = [
  { id: 1, name: 'English (US)', unavailable: false },
  { id: 2, name: 'Bangla (BN)', unavailable: false },
  { id: 3, name: 'Arbic (SA)', unavailable: false },
  { id: 5, name: 'Urdu (PK)', unavailable: false },
]

export default function SelectBar() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button

        className="lg:flex hidden gap-2 items-center  relative w-full cursor-default rounded-lg text-[#252525] dark:text-myWhite bg-white dark:bg-[#1E192A] py-2 px-3 text-left border dark:border-darkLine focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        {selectedPerson.name}
        <span class="material-symbols-outlined dark:text-myGreen">
          expand_more
        </span>
      </Listbox.Button>
      <Listbox.Options
        className="absolute mt-1 max-h-60 w-1/3 overflow-auto rounded-md bg-white dark:bg-darkCard py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
            as={Fragment}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-myBlue dark:bg-myGreen text-white' : 'text-gray-900 dark:text-white'
              }`
            }
          >
            {({ selected }) => (
              <li
              >
                {selected}
                {person.name}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
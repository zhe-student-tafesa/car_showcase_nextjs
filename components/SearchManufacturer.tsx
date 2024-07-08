"use client"

import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
// 1. load all Manufacturer
import { manufacturers } from '@/constants'

import { SearchManufacturerProps } from '@/types'
import React, { useState, Fragment } from 'react'

const SearchManufacturer = ({ manufacturer, setmanufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState("")

    // 2. filter Manufacturer use query: remove space
    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
    ));
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setmanufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg" alt={'carlogo'} width={20} height={20} className='ml-4' />
                    </Combobox.Button>

                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options
                        >
                            {

                                filteredManufacturers.map((filteredManufacturer) => (
                                    // use hover
                                    <Combobox.Option
                                        key={filteredManufacturer}
                                        value={filteredManufacturer}
                                        className={(active) => `relative search-manufacturer__option ${active ? 'bg-gray-200 text-black' : 'text-gray-900 '}  hover:bg-primary-blue`}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                    {filteredManufacturer}
                                                </span>


                                                {selected ? (
                                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-black bg-white" : "text-teal-600"}`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))

                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
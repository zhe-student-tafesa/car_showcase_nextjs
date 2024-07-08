"use client"

import { useEffect } from 'react'
import { useState } from 'react'
import React from 'react'
import SearchManufacturer from './SearchManufacturer'

const handleSearch = () => { }

const SearchBar = () => {
    const [manufacturer, setmanufacturer] = useState('');
    return (
        <form
            className='searchbar'
            onSubmit={handleSearch}
        >
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer= {manufacturer}
                    setmanufacturer={setmanufacturer}
                />
            </div>
        </form>
    )
}

export default SearchBar
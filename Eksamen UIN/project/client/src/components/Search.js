import React, { useState } from 'react'
import {searchfetch} from '../utils/artikkelService'
const Search = ({søkeliste}) => {
    const [search, setSearch] = useState('')
    console.log(søkeliste)
    return (
        <form id="search">
            <input
                    type="text" 
                    id='searchbox'
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />


            <button>Search</button>        
        </form>
    )
}

export default Search

   /* const handleUpdate  = async (event) => {
        setSearch(event.target.value)
        console.log(search)
    }
    
    */
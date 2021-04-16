import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = ({søkeliste}) => {
    const [search, setSearch] = useState('')


    let arr = []
    let link = []

    const result = søkeliste?.map(function(name, index){
        for (let i = 0; i < name.nokkelord.length; i++) {
            if ([name.nokkelord[i]].includes(search)) {
                if (search !== ""){
                    arr.push(name.tittel)
                    link.push(name.slug)
                }
            }
        }
    })


    console.log(arr)

    return (
        <form id="search">
            <input
                    type="text" 
                    id='searchbox'
                    className="searcharea"
                    placeholder="Search" 
                    value={search}
                    onBlur={(e) => setSearch("")}
                    onChange={(e) => setSearch(e.target.value)
                    }
                    />
            <ul id="searchresult" className="searcharea">
                {arr.map(function(name, index){
                    return <li><Link to={link[index]} key={ name[index] } onClick={(e) => setSearch("")}>{name}<br /><br /></Link></li>;
                })}
            </ul>


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
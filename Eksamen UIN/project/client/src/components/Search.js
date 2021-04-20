import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Search = ({søkeliste}) => {
    const [search, setSearch] = useState('')

    const ulRef = useRef()
    const inputRef = useRef()
    /* Fjerner søkealternative når du trykker på dokumentet */    
    useEffect(() =>{
        inputRef.current.addEventListener("click", (event) => {
            event.stopPropagation();
            ulRef.current.style.display="grid";
        })
        document.addEventListener("click",(event) => {
            ulRef.current.style.display="none";
        })

    })

    let arr = []
    let link = []
    
    /* Sjekker om bruker skriver inn ett nøkkelord og gjør det om til et tittel array og slug */
    const result = søkeliste?.map(function(name, index){
        for (let i = 0; i < name.nokkelord.length; i++) {
            let temp = name.tittel.toLowerCase()
            if (name.nokkelord[i].includes(search.toLowerCase() || temp.includes(search.toLowerCase()))) {
                if (search !== ""){
                    if (!arr.includes(name.tittel)){
                        arr.push(name.tittel)
                        link.push(name.slug)
                    }  
                }
            }
        }
    })

    return (
        <form id="search">
            {/* Input for søk */}
            <input
                    type="text" 
                    id='searchbox'
                    placeholder="Search" 
                    value={search}
                    ref={inputRef}
                    onChange={(e) => setSearch(e.target.value)
                    }
                    />
             <ul id="searchresult" ref={ulRef}>
                 {/* Mapper igjennom tidligere array og gjør det om til klikkbare linker */}
                {
                arr.map(function(name, index){
                    return <li><Link to={link[index]} key={ index } onClick={(e) => setSearch("")}>{name}</Link></li>;
                })
                }
            </ul>
            

            <button>Search</button>        
        </form>
    )
}

export default Search

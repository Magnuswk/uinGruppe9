import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Search = ({søkeliste}) => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const [link, setLink] = useState([])

    /* Fjerner søkealternative når du trykker på dokumentet */    

    
    useEffect(() =>{
        /* update search result array */
        const filter = () => {
            const arr = []
            const link = []
            if(value?.length < 1 || value === null || value === ""){
                setResult(arr)
                setLink(link)
                return;
            }
            for (let i = 0; i< søkeliste.length; i++) {
                for (let x = 0; x< søkeliste[i].nokkelord.length; x++) {
                    if(søkeliste[i].nokkelord[x].includes(value)){
                        if (!arr.includes(søkeliste[i].tittel)){
                            link.push(søkeliste[i].slug)
                            arr.push(søkeliste[i].tittel)
                        }  
                    }
                }
            }
            setResult(arr)
            setLink(link)
        }
        filter();
    },[value, søkeliste])

    
    const handleBlur = () =>{
        setResult([])
    }
    return (
        <form id="search">
            {/* Input for søk */}
            <input
                    type="text" 
                    id='searchbox'
                    placeholder="Search" 
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onBlur={handleBlur}
                    />
             <ul id="searchresult">{}
                 {/* Mapper igjennom tidligere array og gjør det om til klikkbare linker */}
                {
                result?.map(function(name, index){
                    return <li key={ link[index] }><Link to={link[index]}>{name}</Link></li>;
                })
             }
            </ul>
            

            <button>Search</button>        
        </form>
    )
}

export default Search

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Search = ({søkeliste}) => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState([])

    /* Fjerner søkealternative når du trykker på dokumentet */    
    useEffect(() =>{
        /* update search result array */
        const filter = () => {
            const arr = []
            if(value?.length < 1 || value === null || value === ""){
                setResult(arr)
                return;
            }
            const find = []
            søkeliste.map(item => item.nokkelord.filter(x => x.includes(value.toLowerCase())).length > 0 ? find.push({title: item.tittel, slug: item.slug}) : null);
            const limitResult = find.sort(function(a, b) { return b.title < a.title ? 1 : -1; })
                .slice(0, 5);
            setResult([...limitResult])
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
                   return <li key={ name.slug }><Link to={name.slug}>{name.title}</Link></li>;
                })
             }
            </ul>
            

            <button>Search</button>        
        </form>
    )
}

export default Search

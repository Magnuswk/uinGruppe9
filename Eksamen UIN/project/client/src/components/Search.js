import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Søkeknapp = styled.button`
  background: #93ba3d;
  border-radius: 3px;
  border: 2px solid #93ba3d;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
const Search = ({søkeliste}) => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const ulRef = useRef()

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
        /* ulRef.addEventListener("click", (event) => {
            return;
        })*/
        //setResult([]) 
    }
    const handleClick = () =>{
        if (value){
            window.location.href = "/Search/" + value;
        }
    }
    return (
        <section id="search">
            {/* Input for søk */}
            <input
                    type="text" 
                    id='searchbox'
                    placeholder="Search" 
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onBlur={handleBlur}
                    />
             <ul id="searchresult" ref={ulRef}>{}
                 {/* Mapper igjennom tidligere array og gjør det om til klikkbare linker */}
                {
                result?.map(function(name, index){
                   return <li key={ name.slug }><Link to={name.slug}>{name.title}</Link></li>;
                })
             }
            </ul>
            

            <button onClick={handleClick}>Search</button> 
        </section>
    )
}

export default Search

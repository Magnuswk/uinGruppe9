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
    const [open, setOpen] = useState(false)
    const ulRef = useRef()
    const node = useRef()

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


    useEffect (() => {
        if(open){
            document.addEventListener('mousedown',handleClickOutside)
        }else{
            document.removeEventListener('mousedown',handleClickOutside)
        }
        return()=>{document.removeEventListener('mousedown',handleClickOutside)}
    },[open])

    const handleBlur = () =>{
        setOpen(true)
        /*ulRef.addEventListener("click", (event) => {
            return;
        })*/
    }

    const handleClickOutside = (e) =>{
        if(node.current.contains(e.target)){
            return
        }
        setOpen(false)
    } 

    return (
        <section id="search" ref={node}>
            <form action={"/Search/" + value} method="get">
                {/* Input for søk */}
                <input
                        type="text" 
                        id='searchbox'
                        placeholder="Søkeboks" 
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        onClick={(event) => handleBlur(event)}
                        />
                { open && 
                <ul id="searchresult" ref={ulRef}>{}
                    {/* Mapper igjennom tidligere array og gjør det om til klikkbare linker */}
                    {
                    result?.map(function(name, index){
                    return <li key={ name.slug }><Link to={name.slug}>{name.title}</Link></li>;
                    })
                }
                </ul>}
                

                <Søkeknapp>Søk</Søkeknapp> 
            </form>
        </section>
    )
}

export default Search

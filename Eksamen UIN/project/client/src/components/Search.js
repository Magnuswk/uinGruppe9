import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// Styled component for søkeknappen
const Søkeknapp = styled.button`
  background: #93ba3d;
  border-radius: 3px;
  border: 2px solid #93ba3d;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
const Search = ({søkeliste}) => {
    // sækeliste er en JSON med alle artikler
    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const [open, setOpen] = useState(false)
    // for å referere til ul listen
    const ulRef = useRef()
    // for å referere til section som wrapper rundt søke boksen og ul listen
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
            // Går igjennom prop søkeliste og sjekker arrayet nøkkelord, filtrerer nøkkelord, sjekker om nøkkelordet inkluderer
            // søkestrengen til brukeren til lowercase, om den finner det push en JSON til find, eller gjør ingenting
            søkeliste.map(item => item.nokkelord.filter(x => x.includes(value.toLowerCase())).length > 0 ? find.push({title: item.tittel, slug: item.slug}) : null);
            // sorter find variabelen alfabetisk etter tittel og legg til de første 5 resultatene i en ny liste
            const limitResult = find.sort(function(a, b) { return b.title < a.title ? 1 : -1; })
                .slice(0, 5);
            setResult([...limitResult])
        }
        filter();
    },[value, søkeliste])


    useEffect (() => {
        // Om bruker har trykt ut av Søkeboksen legg til en event listener for å høre etter trykk
        if(open){
            document.addEventListener('mousedown',handleClickOutside)
        }else{
            document.removeEventListener('mousedown',handleClickOutside)
        }
        return()=>{document.removeEventListener('mousedown',handleClickOutside)}
    },[open])

    // Om brukeren trykker på søkeboksen
    const handleFocus= () =>{
        setOpen(true)
    }
    // Om brukeren trykker ut av søkeboksen, sjekk om den har trykt på noe som er inni selecten "node" som inneholder søkeboksen og søkeforslag
    const handleClickOutside = (e) =>{
        if(node.current.contains(e.target)){
            return
        }
        // om brukeren ikke trykker på noe som ikke er inni node fjern søkeforslag
        setOpen(false)
    }
    // Om brukeren trykker på Søke knappen
    const handleClick = () =>{
        if (value){
            // redirect brukeren til siden for søk og ha med søkestrengen i linken
            window.location.href = "/Search/" + value;
        }
    }
    return (
        <section id="search" ref={node}>
            {/* Input for søk */}
            <input
                    type="text"
                    id='searchbox'
                    placeholder="Søkeboks"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onClick={(event) => handleFocus(event)}
                    />
            {/* Bare render dette om open === true */}
            { open &&
             <ul id="searchresult" ref={ulRef}>{}
                 {/* Mapper igjennom tidligere array og gjør det om til klikkbare linker */}
                {
                result?.map(function(name, index){
                   return <li key={ name.slug }><Link to={name.slug}>{name.title}</Link></li>;
                })
             }
            </ul>}


            <Søkeknapp onClick={handleClick}>Søk</Søkeknapp>
        </section>
    )
}

export default Search

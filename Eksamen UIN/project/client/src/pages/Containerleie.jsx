import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Tjenester from "../components/Tjenester"
import { NavLink } from 'react-router-dom'
import Artikkelmain from "../components/Artikkelmain"
import Artikkelfetch from '../utils/yourService'
import client from '../utils/client'

const Containerleie = () => {
    const [artikkel, setArtikkel] = useState(null);
    useEffect( ()=> {
        client
            .fetch(
                `*[_type == "artikler" && tittel == "Containerleie"]
            {
                    tittel,
                    kategori,
                    innhold

                }`
            )
            .then((data)=> setArtikkel(data[0]))
            .catch(console.error)
    }, [])
    if (!artikkel) return <div>Loading...</div>    
    return(
        <>
            <Header />
            <Tjenester />
            <Artikkelmain>
                <div>{artikkel.kategori}</div>
            </Artikkelmain>
        </>
    )
}    
export default Containerleie


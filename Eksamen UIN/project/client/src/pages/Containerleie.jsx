import React from 'react'
import Header from '../components/Header'
import Tjenester from "../components/Tjenester"
import { NavLink } from 'react-router-dom'
import Artikkelmain from "../components/Artikkelmain"

const Containerleie = () => {
    return (
        <>
            <Header />
            <Tjenester />
            <Artikkelmain>
                
            </Artikkelmain>
        </>
    )
}

export default Containerleie

import React from 'react'
import ostbo from "../Images/ostbo.png"
import { NavLink } from 'react-router-dom'
import Search from './Search'
import { searchfetch } from '../utils/artikkelService'
import { useEffect, useState } from 'react'

/* Fetcher nødvendig informasjon til søkefeltet */
const Header = () => {
    const [header, setHeader] = useState(null)
    useEffect(()=> {
        const fetchAsyncSearch = async () =>{
            try {
                const resultat = await searchfetch()
                setHeader (resultat)
              } catch (error) {
                  console.log(error)
              }  
            };
            fetchAsyncSearch();
    }, []);

    






    return (
        <header>
            <a id="logocontainer" href="/">
                <img src={ostbo} alt="Østbø Logo"/>
            </a>
            <nav>
                <ul>
                    <li><NavLink to="/">Hjem</NavLink></li>
                    <li><NavLink to="/Tjenester">Tjenester</NavLink></li>
                    <li><NavLink to="/Sortering">Sortering</NavLink></li>
                </ul>
                {/* Sender tidliger fetch som prop til søkeliste komponenten */}
                <Search søkeliste={header}/>
            </nav>
        </header>
    )
}

export default Header

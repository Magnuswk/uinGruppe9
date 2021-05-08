import React from 'react'
import ostbo from "../Images/ostbo.png"
import { NavLink } from 'react-router-dom'
import Search from './Search'
import { searchfetch } from '../utils/artikkelService'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
/* Styled component for header */
const Headerstyle = styled.header`
    width: 100%;
    height: 15%;
    top: 0%;
    box-shadow: 0 0px 0.1px 0 rgba(0, 0, 0, 0.1),0 1px 15px 0 rgba(0,0,0,0.6);
    position:fixed;
    background-color: white;
    z-index: 10;
`
const Header = () => {
    // Fetcher alle artikler fra sanity og legger de i header variabhelen
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
        <Headerstyle>
            <a id="logocontainer" href="/">
                <img src={ostbo} alt="Østbø Logo"/>
            </a>
            <nav>
                <ul id="katLink">
                    <li><NavLink to="/">Hjem</NavLink></li>
                    <li><NavLink to="/Tjenester">Tjenester</NavLink></li>
                    <li><NavLink to="/Sortering">Sortering</NavLink></li>
                    <li><NavLink to="/Om-Oss">Om Oss</NavLink></li>
                </ul>
                {/* Sender tidliger fetch som prop til søkeliste komponenten */}
                <Search søkeliste={header}/>
            </nav>
        </Headerstyle>
    )
}

export default Header

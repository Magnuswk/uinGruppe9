import React from 'react'
import ostbo from "../Images/ostbo.png"
import { NavLink } from 'react-router-dom'


const Header = () => {
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
            </nav>
            <form id="search">
                <input type="text" placeholder="Search"></input>
                <button>Search</button>
            </form>
        </header>
    )
}

export default Header

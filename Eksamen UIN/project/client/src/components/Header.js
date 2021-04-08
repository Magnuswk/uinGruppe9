import React from 'react'
import ostbo from "../Images/ostbo.png"
const Header = () => {
    return (
        <header>
            <a id="logocontainer" href="/">
                <img src={ostbo} alt="Østbø Logo"/>
            </a>
            <nav>
                <ul>
                    <li><a href="/">Hjem</a></li>
                    <li><a href="/Tjenester">Tjenester</a></li>
                    <li><a href="/Sortering">Sortering</a></li>
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

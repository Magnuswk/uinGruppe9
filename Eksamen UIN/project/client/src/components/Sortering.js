import React from 'react'
import Sidebar from "../components/Sidebar"
import { NavLink } from 'react-router-dom'

const Sortering = () => {
    return (
        <>
            <Sidebar>
                <h1>
                    Sortering
                </h1>
                <h2>
                    <ul>
                        <li><NavLink to="/Sortering/Næringsavfall">Næringsavfall</NavLink></li>
                        <li><NavLink to="/Sortering/Farlig-avfall">Farlig avfall</NavLink></li>
                        <li><NavLink to="/Sortering/Byggavfall">Byggavfall</NavLink></li>
                        <li><NavLink to="/Sortering/Jern-og-Metall">Jern og Metall</NavLink></li>
                    </ul>
                </h2>
            </Sidebar>
        </>
    )
}

export default Sortering
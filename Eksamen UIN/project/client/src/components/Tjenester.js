import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from "../components/Sidebar"

const Tjenester = () => {
    return (
        <>
           <Sidebar>
                <h1>
                    Tjenester
                </h1>
                <h2>
                    <ul>
                        <li><NavLink to="/Containerleie">Containerleie</NavLink></li>
                        <li><NavLink to="/Avløpsrens" >Avløpsrens</NavLink></li>
                        <li><NavLink to="/Olje-og-Fettutskilling">Olje og Fettutskilling</NavLink></li>
                        <li><NavLink to="/Gravesuger">Gravesuger</NavLink></li>
                        <li><NavLink to="/Henting-av-farlig-avfall">Henting av Farlig avfall</NavLink></li>
                    </ul>
                </h2>
            </Sidebar>  
        </>
    )
}

export default Tjenester

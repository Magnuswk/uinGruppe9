import React from 'react'
import ostbo from "../Images/ostbo.png"
import { NavLink } from 'react-router-dom'
import Search from './Search'
import { searchfetch } from '../utils/artikkelService'


const Header = () => {
    const fetchAsyncSearch = async () =>{
        try {
          const søk = await searchfetch()
          let arr = []
          for (let i = 0; i < søk?.length; i++) {
            if (søk[i].tittel !== søk[i].kategori){
                arr.push(søk[i].tittel);
            }
          }
          return(arr)
        } catch (error) {
            console.log(error)
        }  
      };

    const søk = fetchAsyncSearch();  
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
                <Search søkeliste={søk}/>
            </nav>
        </header>
    )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'
// prop inneholder informasjon om siden du er på, og hviken link du er på
const Breadcrumbs = ({data, location}) => {
    //Breadcrumbs for a vise brukeren hvor du er
    return (
        <ul id="breadcrumbs">
            {/* Hjem skal alltid vises */}
            <li><NavLink to="/">Hjem</NavLink></li>
            <li>➞</li>
            {/* Ta bruker til kategoriside og der vi fjerner mellomrom fra kategori og legger til - så linken skal stemme*/}
            <li><NavLink to={"/" + data?.kategori.replace(" ", "-")}>{data?.kategori}</NavLink></li>
            {/* Fjerne / fra linken og sjekk om den er lik kategori  */}
            {data?.slug.substring(1) !== data?.kategori.replace(" ", "-") ? <li>➞</li>:""}
            {/* Dersom linken ikke er lik kategorien Link til siden du allerede er på */}
            {data?.slug.substring(1) !== data?.kategori.replace(" ", "-") ? <li><NavLink to={location}>{data?.tittel}</NavLink></li>:""}
        </ul>
    )
}

export default Breadcrumbs

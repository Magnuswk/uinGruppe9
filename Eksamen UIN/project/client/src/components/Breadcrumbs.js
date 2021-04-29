import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = ({data, location}) => {
    return (
        <ul id="breadcrumbs">
            <li><NavLink to="/">Hjem</NavLink></li>
            <li>➞</li>
            {/* Tar deg tilbake til kategorisiden som hører til siden du er på */}
            <li><NavLink to={"/" + data?.kategori.replace(" ", "-")}>{data?.kategori}</NavLink></li>
            {console.log(data.kategori)}
            {data?.slug.substring(1) !== data?.kategori.replace(" ", "-") ? <li>➞</li>:""}
            {/* Om linken din ikke er lik kategorien du er på lag en link til siden du er på */}
            {data?.slug.substring(1) !== data?.kategori.replace(" ", "-") ? <li><NavLink to={location}>{data?.tittel}</NavLink></li>:""}
        </ul>
    )
}

export default Breadcrumbs

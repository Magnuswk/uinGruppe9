import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({sidebar}) => {
    /* Sorterer innhold i JSON */
    sidebar?.sort(function (a, b) {
        return a.tittel.localeCompare(b.tittel);
    });
    /* Sjekker om JSON er fetchet */
    if (sidebar?.length > 0){
        return (
            <section id="sidebar">
                <h1>{sidebar[0].kategori}</h1>
                <ul>
                {sidebar?.map(function(name, index){
                        return <li key={ name.slug }> <Link to={name.slug} >{name.tittel}<br /><br /></Link></li>;
                      })}
                </ul>
            </section>
        )
        /* Om JSON ikke er loadet */
    }else{
        return null;
    }
    
}
export default Sidebar
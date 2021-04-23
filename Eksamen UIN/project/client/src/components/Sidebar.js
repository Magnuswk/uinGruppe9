import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({sidebar}) => {
    /* Sorterer innhold i JSON  basert på tittel*/
    sidebar?.sort(function (a, b) {return a.tittel.localeCompare(b.tittel);});
    /* Pusher til nytt array for å unngå at kategorisiden vises i sidebar */
    const newArray = []
    sidebar?.map(item =>  item.tittel !== item.kategori ? newArray.push(item) : null);
    /* Sjekker om JSON er fetchet */
    if (sidebar?.length > 0){
        return (
            <aside id="sidebar">
                {/* Alle objekter har samme kategori */}
                <h1>{sidebar[0].kategori}</h1>
                <ul>
                {newArray?.map(function(name, index){
                        return <li key={ name.slug }> <Link to={name.slug} >{name.tittel}<br /><br /></Link></li>;
                      })}
                </ul>
            </aside>
        )
        /* Om JSON ikke er loadet */
    }else{
        return null;
    }
    
}
export default Sidebar
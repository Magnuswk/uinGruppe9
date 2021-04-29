import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { sidebarfetch, tinyhetsfetch, tikursfetch } from '../utils/artikkelService';

const Sidebar = ({kategori}) => {

    /* Fetcher tittel, kategori og slug fra alle sider som har samme kategori som siden */
    const [sidebar, setSidebar] = useState(null)
    useEffect(()=> {
        const fetchAsyncsidebar = async () =>{
          try {
              if (kategori === "Tjenester" || kategori === "Sortering" || kategori === "Om-Oss"){
                const info = await sidebarfetch(kategori)
                setSidebar (info)
              }else if (kategori === "Nyheter"){
                const info = await tinyhetsfetch()
                setSidebar (info)
              }else{
                const info = await tikursfetch()
                setSidebar (info)
              }
          } catch (error) {
              console.log(error)
          }
        };
        fetchAsyncsidebar();
    }, [kategori]);

    if (kategori !== "Kurs" && kategori !== "Nyheter"){
        sidebar?.sort(function (a, b) {return a.tittel.localeCompare(b.tittel);});
    }

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
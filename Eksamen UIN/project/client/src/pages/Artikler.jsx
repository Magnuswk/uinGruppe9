import React, { useState, useEffect } from 'react'
import Artikkelmain from "../components/Artikkelmain"
import artikkelfetch from '../utils/artikkelService'
import Sidebar from "../components/Sidebar"
import { useParams } from 'react-router'
import BlockContent from '@sanity/block-content-to-react'
import { sidebarfetch } from '../utils/artikkelService'
import {NavLink} from 'react-router-dom'
import  Skjemaer from "../components/Skjemaer"
/*  Denne komponenten lager alle sider */
/*  Henter alle artikkler med slug som er lik nettadressen */
const Containerleie = () => {
    const {slug} = useParams()
    const [data, setData] = useState(null)
    useEffect(()=> {
        const fetchAsyncData = async () =>{
          try {
            const side = await artikkelfetch(slug)
            setData (side)
          } catch (error) {
              console.log(error)
          }  
        };
        fetchAsyncData();
    }, [slug]);

    /* Fetcher tittel, kategori og slug fra alle sider som har samme kategori som siden */
    const [sidebar, setSidebar] = useState(null)
    useEffect(()=> {
        const fetchAsyncsidebar = async () =>{
          try {
            const info = await sidebarfetch(data?.kategori || [])
            setSidebar (info)
          } catch (error) {
              console.log(error)
          }  
        };
        fetchAsyncsidebar();
    }, [data?.kategori]);
    
    let arr = []
    let links = []
    /* Legger informasjonen fra tidligere fetch inni arrays */
    for (let i = 0; i < sidebar?.length; i++) {
        if (sidebar[i].tittel !== sidebar[i].kategori){
            arr.push(sidebar[i].tittel);
            links.push(sidebar[i].slug)
        }
      }
    arr = arr.sort()
    links = links.sort()
      /*  Fetch er ikke ferdig */
      if (data === null){
          return(<h1 id="loading">Loading...</h1>)
      /* Siden er ikke funnet */
      }else if(data === "ikke funnet"){
            return(
                <>
                <h1 id="error">Denne siden finnes ikke!</h1>
                <img id="finnes-ikke" src="https://media1.tenor.com/images/a74df99c03852b2f99fa0e813807822f/tenor.gif?itemid=14884175" alt="finnes-ikke"/>
                </>
            )
      }
      /* Lag Siden */
      else{
        return(
            <>   
                {/* Tar imot arrays fra fetch og sender inn til sidebar */}
                <Sidebar name={arr} lnk={links} kat={data?.kategori}/>
                {/* Komponent som lager siden fra sanity innhold */}
                <Artikkelmain >
                  {/* Lager breadcrumbs ved å bruke data hentet fra sanity */}
                    <ul id="breadcrumbs">
                        <li><NavLink to="/">Hjem</NavLink></li>
                        <li>➞</li>
                        {/* Tar deg tilbake til kategorisiden som hører til siden du er på */}
                        <li><NavLink to={data?.kategori}>{data?.kategori}</NavLink></li>
                        {data?.slug !== data?.kategori ? <li>➞</li>:""}
                        {/* Om linken din ikke er lik kategorien du er på lag en link til siden du er på */}
                        {data?.slug !== data?.kategori ? <li><NavLink to={data?.slug}>{data?.tittel}</NavLink></li>:""}
                    </ul>
                    {/* Displayer tittelen på siden du er på */}
                    <h1>
                        {data?.tittel}
                    </h1>
                    {/* Bilde som skal bli banner */}
                    <img src={data?.bilde.asset.url} alt='yeetum'></img>
                    {/* Alt innholdet som skal vere på hovuddelen av siden */}
                    <BlockContent blocks={data?.body}/>
                  {data?.slug === "Containerleie" ? <Skjemaer type="containerleie"/>: null }
                </Artikkelmain>
            </>
        )
      }
}
export default Containerleie
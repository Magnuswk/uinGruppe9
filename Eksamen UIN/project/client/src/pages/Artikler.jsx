import React, { useState, useEffect } from 'react'
import Artikkelmain from "../components/Artikkelmain"
import artikkelfetch from '../utils/artikkelService'
import Sidebar from "../components/Sidebar"
import { useParams } from 'react-router'
import BlockContent from '@sanity/block-content-to-react'
import { sidebarfetch } from '../utils/artikkelService'
import {NavLink} from 'react-router-dom'
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

    for (let i = 0; i < sidebar?.length; i++) {
        if (sidebar[i].tittel !== sidebar[i].kategori){
            arr.push(sidebar[i].tittel);
            let temp = sidebar[i].tittel;
            temp = temp.toLowerCase()
            temp = temp.charAt(0).toUpperCase() + temp.slice(1)
            temp = temp.replaceAll(" ", "-")
            links.push(temp)
        }
      }
      if (data === null){
          return(<h1 id="loading">Loading...</h1>)
      }else{
        return(
            <>    
                <Sidebar name={arr} lnk={links} kat={data?.kategori}/>
                <Artikkelmain >
                    <ul id="breadcrumbs">
                        <li><NavLink to="/">Hjem</NavLink></li>
                        <li>➞</li>
                        <li><NavLink to={data?.kategori}>{data?.kategori}</NavLink></li>
                        {data?.slug !== data?.kategori ? <li>➞</li>:""}
                        {data?.slug !== data?.kategori ? <li><NavLink to={data?.slug}>{data?.tittel}</NavLink></li>:""}
                        
                    </ul>
                    <h1>
                        {data?.tittel}
                    </h1>
                    <BlockContent blocks={data?.body}/>
                    <img src={data?.bilde.asset.url} alt='yeetum'></img>
 
                </Artikkelmain>
            </>
        )
      }
}
export default Containerleie
 /* {JSON.stringify(data.bilde.asset.url)} */
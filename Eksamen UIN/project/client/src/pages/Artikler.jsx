import React, { useState, useEffect } from 'react'
import Tjenester from "../components/Tjenester"
import Sortering from '../components/Sortering'
import Artikkelmain from "../components/Artikkelmain"
import artikkelfetch from '../utils/artikkelService'
import { useParams } from 'react-router'
import BlockContent from '@sanity/block-content-to-react'
import { sidebarfetch } from '../utils/artikkelService'
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





    if(data?.kategori.toLowerCase()==='tjenester'){
        return(
            <>    
                <Tjenester />
                <Artikkelmain >
                    <h1>
                        {data?.tittel}
                    </h1>
                    {console.log(sidebar)}
                    <BlockContent blocks={data?.body}/>
                    <img src={data?.bilde.asset.url} alt='yeetum'></img>
 
                </Artikkelmain>
            </>
        )

    }
    else if(data?.kategori.toLowerCase()==='sortering'){
        return(
            <>    
                <Sortering />
                <Artikkelmain >
                    <h1>
                        {data?.tittel}
                    </h1>
                    <img src={data?.bilde.asset.url} alt='yeetum'></img>
                    <BlockContent blocks={data?.body}/>
                </Artikkelmain>
            </>
        )
    }
    else{
        return(
        <Artikkelmain>
            <h1>Loading...</h1>
        </Artikkelmain>)
    }   
}
export default Containerleie
 /* {JSON.stringify(data.bilde.asset.url)} */
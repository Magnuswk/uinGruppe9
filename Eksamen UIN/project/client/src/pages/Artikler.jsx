import React, { useState, useEffect } from 'react'
import Tjenester from "../components/Tjenester"
import Artikkelmain from "../components/Artikkelmain"
import artikkelfetch from '../utils/artikkelService'
import { useParams } from 'react-router'
const Containerleie = () => {
    const {slug} = useParams()
    const [data, setData] = useState(null)
    useEffect(()=> {
        const fetchAsyncData = async () =>{
          try {
            const side = await artikkelfetch(slug)
            setData (side)
            console.log(slug)
          } catch (error) {
              console.log(error)
          }  

        };
        fetchAsyncData();
    }, [slug]);
    return(
        <>
            <Tjenester />
            <Artikkelmain >
                <h1>{data?.tittel}</h1>

            </Artikkelmain>
        </>
    )
}    
export default Containerleie

  /*  const [artikkel, setArtikkel] = useState(null);
    useEffect( ()=> {
        client
            .fetch(
                `*[_type == "artikler" && tittel == "Containerleie"]
            {
                    tittel,
                    kategori,
                    innhold

                }`
            )
            .then((data)=> setArtikkel(data[0]))
            .catch(console.error)
    }, [])
    if (!artikkel) return <div>Loading...</div>   */ 
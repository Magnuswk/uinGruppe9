import React, { useState, useEffect } from 'react'
import Tjenester from "../components/Tjenester"
import Sortering from '../components/Sortering'
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
    if(data?.kategori.toLowerCase()==='tjenester'){
        return(
            <>    
                <Tjenester />
                <Artikkelmain >
                    <h1>
                        {data?.tittel}
                    </h1>
                    {JSON.stringify(data.bilde.asset.url)}
                    {data?.innhold}
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
                        {JSON.stringify(data.bilde.asset.url)}
                        <img src={data?.bilde.asset.url} alt='yeetum'></img>
                    </h1>
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
import React, { useState, useEffect } from 'react'
import { mainnyhetfetch, nyhetsfetch } from '../utils/artikkelService'
import BlockContent from '@sanity/block-content-to-react'
import Sistenytt from '../components/Sistenytt'
import {useLocation} from 'react-router-dom'
import Loading from '../components/Loading'
const Nyhetmain = () => {
    let location = useLocation()
    const [data, setData] = useState(null)
    useEffect(()=> {
        const fetchAsyncData = async () =>{
          try {
            const side = await mainnyhetfetch(location.pathname)
            setData(side)
          } catch (error) {
              console.log(error)
          }  
        };
        fetchAsyncData();
    }, [location]);

    const [nyhet, setNyhet] = useState(null)
    useEffect(()=> {
        const fetchAsyncNyhet = async () =>{
            try {
                const resultat = await nyhetsfetch()
                setNyhet(resultat)
                } catch (error) {
                    console.log(error)
                }  
            };
            fetchAsyncNyhet();
    }, []);


    const arr = []
    /* Sorterer nyhetene etter dato */
    nyhet?.sort(function (a, b) {
        return b.dato.localeCompare(a.dato);
    });
    for (let i = 0; i < nyhet?.length; i++) {
        if(nyhet[i].tittel === data?.tittel){
            //skip
        }else if(i === 11){
            break;
        }else{
            arr.push(nyhet[i]);
        }
      }



    if (data === null){
        return(<Loading status='loading' />)
    }else if (data === "ikke funnet"){
        return(<Loading status ='error'/>)
    }else{
        return (
            <section id="mainnyheter">
                {console.log(data)}
              <h1>{data.tittel}</h1>
              <img src={data?.bilde.asset.url} alt={data.tittel}></img>
              <BlockContent blocks={data?.body}/>
              <Sistenytt nyheter={arr}/>

            </section>
        )
    }
   
}

export default Nyhetmain
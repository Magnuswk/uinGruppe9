import { useParams } from 'react-router'
import React, { useState, useEffect } from 'react'
import { mainnyhetfetch, nyhetsfetch } from '../utils/artikkelService'
import BlockContent from '@sanity/block-content-to-react'
import Sistenytt from '../components/Sistenytt'
import {useLocation} from 'react-router-dom'
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
        return(<h1 id="loading">Loading...</h1>)
    }else if (data === "ikke funnet"){
        return(  
        <>
            <h1 id="error">Denne Nyhetssiden finnes ikke!</h1>
            <img id="finnes-ikke" src="https://media1.tenor.com/images/a74df99c03852b2f99fa0e813807822f/tenor.gif?itemid=14884175" alt="finnes-ikke"/>
        </>)
    }else{
        return (
            <section id="mainnyheter">
              <h1>{data.tittel}</h1>
              <img src={data?.bilde.asset.url} alt={data.tittel}></img>
              <BlockContent blocks={data?.body}/>
              <Sistenytt nyheter={arr}/>

            </section>
        )
    }
   
}

export default Nyhetmain
import React, { useState, useEffect } from 'react'
import { sidebarfetch, mainkursfetch, tikursfetch } from '../utils/artikkelService'
import BlockContent from '@sanity/block-content-to-react'
import {useLocation} from 'react-router-dom'
import Loading from '../components/Loading'
import Sidebar from "../components/Sidebar"
import Skjemaer from '../components/Skjemaer'

const Kursmain = () => {
    let location = useLocation()
    const [data, setData] = useState(null)
    useEffect(()=> {
        const fetchAsyncData = async () =>{
          try {
            const side = await mainkursfetch(location.pathname)
            setData(side)
          } catch (error) {
              console.log(error)
          }  
        };
        fetchAsyncData();
    }, [location]);

    const [kurs, setKurs] = useState(null)
    useEffect(()=> {
        const fetchAsyncKurs = async () =>{
            try {
                const resultat = await tikursfetch()
                setKurs(resultat)
                } catch (error) {
                    console.log(error)
                }  
            };
            fetchAsyncKurs();
    }, []);
    const [sidebar, setSidebar] = useState(null)
    useEffect(()=> {
        const fetchAsyncsidebar = async () =>{
          try {
            const info = await sidebarfetch('Tjenester')
            setSidebar (info)
          } catch (error) {
              console.log(error)
          }  
        };
        fetchAsyncsidebar();
    }, []);

    /* Sorterer kursene etter dato */
    kurs?.sort(function (a, b) {
        return b.startdato.localeCompare(a.startdato);
    });
    if (data === null || kurs === null){
        return(<Loading status='loading' />)
    }else if (data === "ikke funnet"){
        return(<Loading status ='error'/>)
    }else{
        return (
            <section id="mainkurs">
                {console.log(data)}
                <h1>{data.tittel}</h1>
                <img src={data?.bilde.asset.url} alt={data.tittel}></img>
                <Sidebar sidebar={sidebar}/>
                <BlockContent blocks={data?.body}/>
                <Skjemaer type='Kurs' pris={data.pris}/>
            </section>
        )
    }
   
}

export default Kursmain
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {useLocation, Link} from 'react-router-dom'
import { searchfetch } from '../utils/artikkelService'

const Search = () => {
    const endreStyle = useRef()
    let location = useLocation()
    const [data, setData] = useState(null)
    const [result, setResult] = useState([])
    useEffect(()=> {
        const fetchAsyncData = async () =>{
          try {
            const side = await searchfetch()
            setData (side)
          } catch (error) {
              console.log(error)
          }  
        };
        fetchAsyncData();
    }, []);

    useEffect(() => {
        const find = []
        const value = location.pathname.substring(8)
        data?.map(item => item.nokkelord.filter(x => x.includes(value.toLowerCase())).length > 0 ? find.push(item) : null);
        setResult([...find])

    },[data, location])

    const handleGrid = () =>{
        endreStyle.current.style.gridTemplateColumns = "22% 22% 22% 22%"
    }
    const handleListe = () =>{
        endreStyle.current.style.gridTemplateColumns = "22%"
    }


    if(data === null){
        return<h1 id="loading">Loading...</h1>
    }else if(result.length === 0){
        return (
            <>
                <h1 id="error">Ingen resultater funnet</h1>
                <img id="finnes-ikke" src="https://media1.tenor.com/images/a74df99c03852b2f99fa0e813807822f/tenor.gif?itemid=14884175" alt="finnes-ikke"/>
            </>)
    }else{
        return (
            <main>
                <section id="searchTop">
                    <button onClick={handleListe}>Vis Som Liste</button>
                    <button onClick={handleGrid}>Vis Som Grid</button>
                    <h1 id="searchTitle">Søkeresultater</h1>
                </section>
                
                <section id="searchResult" ref={endreStyle}>
                {
                    result?.map(function(name, index){
                    return (<article key={ name.slug }>
                                    <Link to={name.slug}><h2>{name.tittel}</h2></Link>
                                    <img src={name.bilde.asset.url} alt={data?.tittel}></img>
                                    <h3>{name.beskrivelse}</h3>
                                    <Link to={name.slug}><button>Les mer</button></Link>
                                </article>);
                    })
                }
                </section>
            </main>
        )
    }
   
}

export default Search

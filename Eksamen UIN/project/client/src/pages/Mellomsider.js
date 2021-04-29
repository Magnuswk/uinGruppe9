import React, {useEffect, useState, useRef } from 'react'
import Loading from '../components/Loading';
import { kursfetch, nyhetsfetch, searchfetch } from '../utils/artikkelService';
import { useLocation } from 'react-router'
import Mellomsidecontent from '../components/Mellomsidecontent';


const Kurs = () => {
    const endreStyle = useRef()
    let location  = useLocation().pathname.replace("/", "")
    const [data, setData] = useState(null)
    const [result, setResult] = useState([])
    useEffect(()=> {
        const fetchAsyncKurs = async () =>{
            try {
                if (location === "Kurs"){
                    const resultat = await kursfetch()
                    setData(resultat)
                    setResult(false)
                }else if(location === "Nyheter"){
                    const resultat = await nyhetsfetch()
                    setData(resultat)
                    setResult(false)
                }else{
                    const resultat = await searchfetch()
                    setData(resultat)
                }

              } catch (error) {
                  console.log(error)
              }
            };
            fetchAsyncKurs();
    },[location]);


    useEffect(() => {
        if (location.includes("Search")){
            const find = []
            const value = location.substring(7)
            data?.map(item => item.nokkelord.filter(x => x.includes(value.toLowerCase())).length > 0 ? find.push(item) : null);
            setResult([...find])

        }


    },[data, location])
    const handleGrid = () =>{
        endreStyle.current.style.gridTemplateColumns = "22% 22% 22% 22%"
    }
    const handleListe = () =>{
        endreStyle.current.style.gridTemplateColumns = "22%"
    }

    if (data === null || data === "ikke funnet" || result === null){
        return(
          <Loading data={data}/>
    )
    }else{
    return (
        <main>
            <section id="searchTop">
                    <button onClick={handleListe}>Vis Som Liste</button>
                    <button onClick={handleGrid}>Vis Som Grid</button>
                    <h1 id="nyhetoverskrift">{location.includes("Search")? "Søkeresultater": location}</h1>
            </section>
            <section id="nyhet" ref={endreStyle}>
                { location === "Kurs" || location === "Nyheter" ? <Mellomsidecontent data={data} location={location} />: <Mellomsidecontent data={result} location={location} />}
            </section>
        </main>
    )
    }

}

export default Kurs

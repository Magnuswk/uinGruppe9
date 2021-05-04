import {useState, useEffect} from 'react'
import Displaytestkategori from '../components/displaytestkategori';
import { sortfetch  } from '../utils/artikkelService';

const Testkategorisort = () => {
    const [artikel, setArtikel] = useState(null)
    const [ny, setNy] = useState(null)
    useEffect(()=> {
        const fetchAsyncSearch = async () =>{
            try {
                const resultat = await sortfetch()
                setArtikel(resultat)
                setNy(resultat)
              } catch (error) {
                  console.log(error)
              }
            };
            fetchAsyncSearch();
    }, []);
    const omoss = []
    const tjenester = []
    const sortering = []


    for (let i = 0; i < artikel?.length; i++) {
        if (artikel[i].kategori === "Om Oss"){
            omoss.push(artikel[i])
        }else if (artikel[i].kategori === "Tjenester"){
            tjenester.push(artikel[i])
        }else{
            sortering.push(artikel[i])
        }
    }



    const handleOmoss = () => {
        setNy(omoss)
    }
    const handleTjenester = () => {
        setNy(tjenester)
    }
    const handleSortering = () => {
        setNy(sortering)
    }
    const handleAlle = () => {
        setNy(artikel)
    }

    if (artikel?.length > 0 && ny?.length > 0){
        return (
            <section id="testartikkel">
                <button onClick={handleOmoss}>Om oss</button>
                <button onClick={handleTjenester}>Tjenester</button>
                <button onClick={handleSortering}>Sortering</button>
                <button onClick={handleAlle}>Alle</button>
                <Displaytestkategori name={ny} />
            </section>
        )
    }else{
        return( <h1 id="loading">Loading...</h1>)
    }

}

export default Testkategorisort

import { useEffect, useState } from "react";
import Homebutton from "../components/Homebutton"
import Nyhetsvisning from '../components/Nyheter/Nyhetsvisning'
import { forsidefetch, tinyhetsfetch} from "../utils/artikkelService";
import Loading from "../components/Loading";
/*  Dette komponenten lager forsiden!*/
const Home = () => {
    const [nyhet, setNyhet] = useState(null)
    // For a fetche de 10 siste nyhetene
    useEffect(()=> {
        const fetchAsyncNyhet = async () =>{
            try {
                const resultat = await tinyhetsfetch()
                setNyhet (resultat)
              } catch (error) {
                  console.log(error)
              }
            };
            fetchAsyncNyhet();
    }, []);

    // for å hente innholdet til iconene på forsiden
    const [forside, setForside] = useState(null)
    useEffect(()=> {
        const fetchAsyncforside = async () =>{
            try {
                const resultat = await forsidefetch()
                setForside (resultat)
            } catch (error) {
                console.log(error)
                }
            };
            fetchAsyncforside();
        }, []);


    /* Sorterer nyhetene etter dato  nyest først*/
    nyhet?.sort(function (a, b) {
        return b.dato.localeCompare(a.dato);
    });
    // Om nyheter ikke er funnet vis status til bruker
    if (nyhet === null || nyhet === "ikke funnet"){
        return(
          <Loading data={nyhet}/>
        )
    }else{
        return (
            <>
                <Homebutton forside={forside} />
                <Nyhetsvisning nyhet={nyhet[0]} andre={nyhet.slice(1)} />
            </>
        )
    }
}

export default Home

import { useEffect, useState } from "react";
import Homebutton from "../components/Homebutton"
import Nyhetsvisning from '../components/Nyheter/Nyhetsvisning'
import { forsidefetch, tinyhetsfetch} from "../utils/artikkelService";
import { Link } from 'react-router-dom'
import Loading from "../components/Loading";
/*  Dette komponenten lager siden!*/
const Home = () => {
    const [nyhet, setNyhet] = useState(null)
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


    /* Sorterer nyhetene etter dato */
    nyhet?.sort(function (a, b) {
        return b.dato.localeCompare(a.dato);
    });

    if (nyhet === null || nyhet === "ikke funnet"){
          return(
          <Loading data={nyhet}/>
        )
    }else{
        return (
            <>
                <Link to="/Om-Oss/kontakt-oss" id="kontakt">Kontakt Oss</Link>
                <Homebutton forside={forside} />
                <Nyhetsvisning nyhet={nyhet[0]} andre={nyhet.slice(1)} />
            </>
        )
    }
}

export default Home

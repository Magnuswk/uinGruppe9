import { useEffect, useState } from "react";
import Homebutton from "../components/Homebutton"
import Nyhetsvisning from '../components/Nyhetsvisning'
import { nyhetsfetch, forsidefetch} from "../utils/artikkelService";
import { Link } from 'react-router-dom'
/*  Dette komponenten lager siden!*/
const Home = () => {
    const [nyhet, setNyhet] = useState(null)
    useEffect(()=> {
        const fetchAsyncNyhet = async () =>{
            try {
                const resultat = await nyhetsfetch()
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




    const arr = []
    const første = []
    /* Sorterer nyhetene etter dato */
    nyhet?.sort(function (a, b) {
        return b.dato.localeCompare(a.dato);
    });
    for (let i = 0; i < nyhet?.length; i++) {
        if(i === 0){
            første.push(nyhet[i])
        }else if(i === 11){
            break;
        }else{
            arr.push(nyhet[i]);
        }
      }
    
    if (forside === null || nyhet === null){
        return(<h1 id="loading">Loading...</h1>)
    }else{
        return (
            <>
                <Link to="/Om-Oss/kontakt-oss" id="kontakt">Kontakt Oss</Link>
                <Homebutton forside={forside} />
                <Nyhetsvisning nyhet={første} andre={arr} />
            </>
        )
    }
}

export default Home

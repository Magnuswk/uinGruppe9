import { useEffect, useState } from "react";
import Homebutton from "../components/Homebutton"
import Nyhetsvisning from '../components/Nyhetsvisning'
import { nyhetsfetch } from "../utils/artikkelService";
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

    return (
        <>
            <div id="kontakt">Kontakt Oss</div>
            <Homebutton />
            <Nyhetsvisning nyhet={første} andre={arr} />
        </>
    )
}

export default Home

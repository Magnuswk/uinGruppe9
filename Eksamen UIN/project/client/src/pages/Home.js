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
    for (let i = 0; i < nyhet?.length; i++) {
        arr.push(nyhet[i]);
      }
    if (arr.length > 0) {
        console.log(arr[0].tittel)
    }  

    return (
        <>
            <div id="kontakt">Kontakt Oss</div>
            <Homebutton />
            <Nyhetsvisning nyhet={arr} />
        </>
    )
}

export default Home

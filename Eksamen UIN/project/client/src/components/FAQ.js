import React, { useEffect, useState } from 'react'
import { faqfetch } from '../utils/artikkelService';
import Accordion from './Accordion';

const FAQ = () => {
    const [faq, setFaq] = useState(null)
    useEffect(()=> {
        const fetchAsyncFaq = async () =>{
            try {
                const resultat = await faqfetch()
                setFaq (resultat)
              } catch (error) {
                  console.log(error)
              }
            };
            fetchAsyncFaq();
    }, []);
    return (
        <>
        {faq?.map(function(name, index){

            return(  
                <Accordion sporsmal={name.sporsmal} svar={name.svar} key={name.sporsmal}/>  
            )
        })}
        </>
    )
}

export default FAQ

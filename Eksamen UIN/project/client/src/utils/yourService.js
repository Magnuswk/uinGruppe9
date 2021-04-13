// Dette er en demo for måter å hente data på. 
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity

import client from './client';
import {useState, useEffect} from 'react'
/*const artikkelfields = `
bilde,
tittel,
beskrivelse,
innhold,
kategori,
nokkelord
`

const otherFields = `
  add_your_fields_here
`

const anotherFields = `
  add_your_fields_here
`
*/
/* const artikkelfetch = async () => {
  const data = await client.fetch(`*[_type == "artikler"]{${artikkelfields}}`);
  console.log(data)
  return data;
}; */


const Artikkelfetch = () => {
  const [artikkel, setArtikkel] = useState(null);
  useEffect( ()=> {
    client
        .fetch(
            `*[_type == "artikler" && tittel == Containerleie]
        {
                tittel,
                kategori,
                innhold

            }`
        )
        .then((data)=> setArtikkel(data[0]))
        .catch(console.error)
        return(setArtikkel)
}, [])
}
  
  
/*
const secondService = async () => {
  const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${otherFields}}`);
  return data;
};
  return (
    <div>
      
    </div>
  )
}

*/



/* export const firstServiceWithParam = async (slug) => {
  const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${anotherFields}}`, { slug });
  return data?.[0];
};
*/
export default Artikkelfetch
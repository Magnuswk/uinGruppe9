// Dette er en demo for måter å hente data på. 
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity

import client from './client';
const artikkelfields = `
  tittel,
  'slug': slug.current,
  'kategori':kategori->kategori,
  innhold,
  'bilde': bilde{...,asset->{url}},
  nokkelord,
  body,
  beskrivelse
`


 const artikkelfetch = async (slug) => {
  const data = await client.fetch(`*[_type == "artikler" && slug.current == $slug]{${artikkelfields},body[]{...}}`, {slug}
  );
  console.log(data)
  return data?.[0];
};
export default artikkelfetch

/* const artikkelsfetch = async () => {
  const data = await client.fetch(`*[_type == "artikler"]{${artikkelfields}}`);
  console.log(data)
  return data;
}; 
*/

/*const Artikkelfetch = () => {
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
*/ 
  
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

/*

export const firstServiceWithParam = async (slug) => {
  const data = await client.fetch(`*[_type == "ADD_YOUR_TYPE_HERE"]{${anotherFields}}`, { slug });
  return data?.[0];
};
*/


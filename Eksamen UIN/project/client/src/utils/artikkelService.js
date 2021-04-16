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
const sidebarfields = `
  'kategori':kategori->kategori,
  tittel,
  'slug': slug.current,
`
const searchfields = `
  tittel,
  nokkelord
`


 const artikkelfetch = async (slug) => {
  const data = await client.fetch(`*[_type == "artikler" && slug.current == $slug]{${artikkelfields},body[]{...}}`, {slug}
  );
  if (data?.length > 0){
    return data?.[0];
  }else{
    return "ikke funnet"
  }
  
};
export default artikkelfetch

export const sidebarfetch = async (kategori) => {
  const data = await client.fetch(`*[_type == "artikler" && (kategori->kategori == $kategori)]{${sidebarfields}}`, {kategori}
  );
  return data;
};

export const searchfetch = async (søkestreng) => {
  const data = await client.fetch(`*[_type == "artikler" && nokkelord match $søkestreng]{${searchfields}}`, {søkestreng}
  );
  return data;
};

/*


*[_type == 'article' && (category->name == "category1") && ('tag1' in tags)]{'author': author->name, tags, 'category': category->name} 



*/
/* 
export const sidebarfetch = async (kategori) => {
  const data = await client.fetch(`*[_type == "artikler"]{${sidebarfields}}`, {kategori}
  );
  for(let i = 0; i < data.length; i++) {
    if (data[i].kategori === kategori){
      console.log(data[i].tittel)
    }
  }
  return data?.tittel;
};
*/

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


// Dette er en demo for måter å hente data på. 
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity

import client from './client';
const artikkelfields = `
  tittel,
  'slug': slug.current,
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
  nokkelord,
  'slug': slug.current
`
const nyhetsfields = `
  tittel,
  body,
  'kategori':kategori->kategori,
  beskrivelse,
  'bilde': bilde{...,asset->{url}},
  nokkelord,
  'forfatter':forfatter->forfatter,
  dato,
`
/* Fetch som henter bruker slug til å hente all informasjon fra sanity */
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

/* Fetch som henter aller informasjon som hører til sidebar */
export const sidebarfetch = async (kategori) => {
  const data = await client.fetch(`*[_type == "artikler" && (kategori->kategori == $kategori)]{${sidebarfields}}`, {kategori}
  );
  return data;
};

/* Fetch som henter nødvendig informasjon for søkefunksjonen */
export const searchfetch = async () => {
  const data = await client.fetch(`*[_type == "artikler"]{${searchfields}}`
  );
  return data;
};

/* Fetch som henter nødvendig informasjon for nyheter */
export const nyhetsfetch = async () => {
  const data = await client.fetch(`*[_type == "nyheter"]{${nyhetsfields}}`
  );
  return data;
};






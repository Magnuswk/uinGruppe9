// Dette er en demo for måter å hente data på. 
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity

import client from './client';
const artikkelfields = `
  tittel,
  'slug': slug.current,
  'kategori':kategori->kategori,
  'bilde': bilde{...,asset->{url}},
  'kategori':kategori->kategori,
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
  'slug': slug.current,
  'kategori':kategori->kategori
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
  'slug': slug.current,
`
const forsidefields = `
  tittel,
  'bilde': bilde{...,asset->{url}},
  link
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
/* Fetch som henter nødvendig informasjon for Forsiden */
export const forsidefetch = async () => {
  const data = await client.fetch(`*[_type == "Forside"]{${forsidefields}}`
  );
  return data;
};
/* Fetch som henter nødvendig informasjon for Artikkelsort */
export const sortfetch = async () => {
  const data = await client.fetch(`*[_type == "artikler"]{${sidebarfields}}`
  );
  return data;
};
/* Fetch som henter bruker slug til å hente riktig nyhet */
export const mainnyhetfetch = async (slug) => {
  slug= "/Nyheter/" + slug
  console.log(slug)
  const data = await client.fetch(`*[_type == "nyheter" && slug.current == $slug]{${artikkelfields},body[]{...}}`, {slug}
  );
  if (data?.length > 0){
    return data?.[0];
  }else{
    return "ikke funnet"
  }
};
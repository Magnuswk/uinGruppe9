// Dette er en demo for måter å hente data på.
// Du må huske å erstatte ADD_YOUR_TYPE_HERE med egne dokumenttyper fra Sanity

import client from './client';
const artikkelfields = `
  tittel,
  'slug': slug.current,
  'kategori':kategori->kategori,
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
  'slug': slug.current,
  'kategori':kategori->kategori,
  beskrivelse,
  'bilde': bilde{...,asset->{url}},
`
const nyhetsfields = `
  'forfatter':forfatter->forfatter,
  dato,
  tittel,
  'slug': slug.current,
  'kategori':kategori->kategori,
  'bilde': bilde{...,asset->{url}},
  nokkelord,
  body,
  beskrivelse
`
const forsidefields = `
  tittel,
  'bilde': bilde{...,asset->{url}},
  link
`
const kursfields = `
  startdato,
  tittel,
  'slug': slug.current,
  'bilde': bilde{...,asset->{url}},
  body,
  beskrivelse,
  adresse,
  postnummer,
  poststed,
  'kategori':kategori->kategori,
  pris
`



/* Fetch som henter bruker slug til å hente all informasjon fra sanity */
 const artikkelfetch = async (slug) => {
  const data = await client.fetch(`*[_type == "artikler" && slug.current == $slug]{${artikkelfields},body[]{..., asset ->{..., '_key': _id}}}`, {slug}
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
  if (data === null){
    return "finnes ikke"
  }
  return data;
};
export const tinyhetsfetch = async () => {
  const data = await client.fetch(`*[_type == "nyheter"]{${nyhetsfields}}[0...10]`
  );
  if (data === null){
    return "finnes ikke"
  }
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
  const data = await client.fetch(`*[_type == "nyheter" && slug.current == $slug]{${nyhetsfields},body[]{...}}`, {slug}
  );
  if (data?.length > 0){
    return data?.[0];
  }else{
    return "ikke funnet"
  }
};
export const kursfetch = async () => {
  const data = await client.fetch(`*[_type == "kurs"]{${kursfields}}`
  );
  if (data === null){
    return "finnes ikke"
  }
  return data;
};
export const mainkursfetch = async (slug) => {
  const data = await client.fetch(`*[_type == "kurs" && slug.current == $slug]{${kursfields},body[]{...}}`, {slug}
  );
  if (data?.length > 0){
    return data?.[0];
  }else{
    return "ikke funnet"
  }
};
export const tikursfetch = async () => {
  const data = await client.fetch(`*[_type == "kurs"]{${kursfields}}[0...10]`
  );
  if (data === null){
    return "finnes ikke"
  }
  return data;
};
import React, { useState, useEffect } from 'react'
import artikkelfetch from '../utils/artikkelService'
import { useLocation, useParams } from 'react-router'
import Artikelcontent from '../components/artikelcontent'
import Loading from '../components/Loading';
import { mainkursfetch } from '../utils/artikkelService'
import { mainnyhetfetch } from '../utils/artikkelService'
import KursContent from '../components/KursContent';
import NyhetContent from '../components/NyhetContent';
import Breadcrumbs from '../components/Breadcrumbs';
import BlockContent from '@sanity/block-content-to-react'
import Sidebar from '../components/Sidebar'
import  Skjemaer from "../components/Skjemaer/Skjemaer"
import {urlFor} from '../utils/imageUrl'


/*  Denne komponenten lager alle sider */
/*  Henter alle artikkler med slug som er lik nettadressen */

const Artikler = () => {
  let location = useLocation();
  let { slug } = useParams()
  const [data, setData] = useState(null);
  useEffect(() => {
      const fetchAsyncData = async () => {
          try {
            if (slug === "Kurs"){
              const side = await mainkursfetch(location.pathname)
              setData(side);
            }else if(slug === "Nyheter"){
              const side = await mainnyhetfetch(location.pathname)
              setData(side);
            }else{
                const side = await artikkelfetch(location.pathname);
                setData(side);
            }
          } catch (error) {
              console.log(error);
          }
      };
      fetchAsyncData();
  }, [location, slug]);

  if (data === null || data === "ikke funnet"){
    return(
      <Loading data={data}/>
    )
  }else{
  return(
    <main id="artikkelmain">
      <section>
      <article>
      <Sidebar kategori={data?.kategori}/>
        <Breadcrumbs  data={data} location={location} />
        <h1>{data.tittel}</h1>
        <img src={urlFor(data?.bilde.asset.url).format('webp').url()} alt={data.tittel}></img>
        <BlockContent blocks={data?.body}/>
        {slug === "Kurs" ? <KursContent data={data} />: null}
        {slug === "Kurs" ? <KursContent data={data} />: null}
        {slug === "Tjenester" || slug === "Sortering" || slug === "Om-Oss" ? <Artikelcontent data={data} location={location} />:null}
        {slug === "Nyheter" ? <NyhetContent data={data}/> : null}
        </article>
        </section>
    </main>
  )
  }
};


export default Artikler


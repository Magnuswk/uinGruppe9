import React, { useState, useEffect } from 'react'
import artikkelfetch from '../utils/artikkelService'
import { useLocation, useParams } from 'react-router'
import Loading from '../components/Loading';
import { mainkursfetch } from '../utils/artikkelService'
import { mainnyhetfetch } from '../utils/artikkelService'
import Breadcrumbs from '../components/Breadcrumbs';
import BlockContent from '@sanity/block-content-to-react'
import { sidebarfetch } from '../utils/artikkelService'
import Sidebar from '../components/Sidebar'
import {urlFor} from '../utils/imageUrl'
import Skjemaer from '../components/Skjemaer/Skjemaer'


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
          <Breadcrumbs data={data} location={location} />
          <div >
          <h1 className='h1tjenester'>{data.tittel}</h1>
          <div id='imagewrapper' >
          <img src={urlFor(data?.bilde.asset.url).format('webp').url()} alt={data.tittel}></img>
          </div>
          <BlockContent blocks={data?.body}/>
          <Skjemaer type={data.tittel} pris={data.pris} kategori={slug}/>
          </div>
          <Sidebar kategori={data?.kategori}/>
          </article>
        </section>
    </main>
  )
  }
};

export default Artikler

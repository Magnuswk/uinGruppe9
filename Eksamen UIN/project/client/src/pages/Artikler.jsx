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
import { sidebarfetch } from '../utils/artikkelService'
import {NavLink, useLocation} from 'react-router-dom'
import  Skjemaer from "../components/Skjemaer"
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
        <img src={data?.bilde.asset.url} alt={data.tittel}></img>
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

/*  Fetch loader */
      /*if (data === null){
          return(<Loading status='loading'/>)
      /* Siden er ikke funnet */
      }else if(data === "ikke funnet"){
            return(
                <>
                <h1 id="error">Denne siden finnes ikke!</h1>
                <img id="finnes-ikke" src="https://media1.tenor.com/images/a74df99c03852b2f99fa0e813807822f/tenor.gif?itemid=14884175" alt="finnes-ikke"/>
                </>
            )
      }
      /* Lag Siden */
      else{
        return(
            <>   
                
                {/* Komponent som lager siden fra sanity innhold */}
                <Artikkelmain >
                  {/* Tar imot arrays fra fetch og sender inn til sidebar */}
                <Sidebar sidebar={sidebar}/>
                  {/* Lager breadcrumbs ved å bruke data hentet fra sanity */}
                  <article>
                    <ul id="breadcrumbs">
                        <li><NavLink to="/">Hjem</NavLink></li>
                        <li>➞</li>
                        {/* Tar deg tilbake til kategorisiden som hører til siden du er på */}
                        <li><NavLink to={"/" + data?.kategori}>{data?.kategori}</NavLink></li>
                        {data?.slug.substring(1) !== data?.kategori ? <li>➞</li>:""}
                        {/* Om linken din ikke er lik kategorien du er på lag en link til siden du er på */}
                        {data?.slug.substring(1) !== data?.kategori ? <li><NavLink to={location}>{data?.tittel}</NavLink></li>:""}
                    </ul>
                    {/* Displayer tittelen på siden du er på */}
                    <h1>
                        {data?.tittel}
                    </h1>
                    {/* Bilde som skal bli banner */}
                    <img src={urlFor(data?.bilde.asset.url).format('webp').url()} alt='yeetum'></img>
                    {/* Alt innholdet som skal vere på hovuddelen av siden */}
                    <BlockContent blocks={data?.body}/>
                  <Skjemaer type={data?.tittel}/>
                  </article>
                </Artikkelmain>
            </>
        )
      }
}
export default Artikler

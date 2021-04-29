import React from 'react'
import Skjemaer from './Skjemaer/Skjemaer'


const Artikelcontent = ({data, location}) => {
    if (data !== null && data !== "ikke funnet"){
        return(
            <main id="artikkelmain">
                <section>
                    {/* Tar imot arrays fra fetch og sender inn til sidebar */}

                    <article>
                        {/* Bilde som skal bli banner */}
                        {/* Alt innholdet som skal vere på hovuddelen av siden */}
                        <Skjemaer type={data?.tittel}/>
                    </article>
                </section>
            </main>
        )
    }else{
        return(<h1>Loading</h1>)
    }
}

export default Artikelcontent

import React from 'react'
import Skjemaer from './Skjemaer/Skjemaer'
import BlockContent from '@sanity/block-content-to-react'
const KursContent = ({data}) => {
    if (data !== null && data !== "ikke funnet"){
        return (
            <section id="mainkurs">

                <Skjemaer type='Kurs' pris={data.pris} tittel={data.tittel}/>
            </section>
            )
    }else{
        return null
    }
}

export default KursContent

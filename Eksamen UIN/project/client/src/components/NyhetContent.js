import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import Sistenytt from './Nyheter/Sistenytt'

const NyhetContent = ({data}) => {
    if (data !== null && data !== "ikke funnet"){
        return (
            <section id="mainnyheter">
            { /* <Sistenytt nyheter={data} /> */}

            </section>
        )
    }else{return(null)}
}

export default NyhetContent

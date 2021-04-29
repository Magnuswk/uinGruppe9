import React from 'react'

const NyhetContent = ({data}) => {
    if (data !== null && data !== "ikke funnet"){
        return (
            <section id="mainnyheter">

            </section>
        )
    }else{return(null)}
}

export default NyhetContent

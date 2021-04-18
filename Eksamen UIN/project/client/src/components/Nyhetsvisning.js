import React from 'react'
const Nyhetsvisning = ({nyhet}) => {
    if (nyhet?.length > 0) {
        return(
            <section id='nyhetsboks'>
                <article id='hovednyhet'>
                <h1>{nyhet[0].tittel}</h1>
    
                </article>
            </section>
        )
    }
    else{
        return(<h1>Loading...</h1>)
    }
}

export default Nyhetsvisning

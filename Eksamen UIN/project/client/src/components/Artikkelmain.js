import React from 'react'

const Artikkelmain = (props) => {
    return (
        <main id="artikkelmain">
            <section>
                 {props.children}  
            </section>
        </main>
    )
}

export default Artikkelmain


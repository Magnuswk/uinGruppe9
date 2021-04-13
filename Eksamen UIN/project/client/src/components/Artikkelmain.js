import React from 'react'

const Artikkelmain = (props) => {
    return (
        <main id="artikkelmain">
            <section>
                <article>
                    {props.children}
                </article>
            </section>
        </main>
    )
}

export default Artikkelmain


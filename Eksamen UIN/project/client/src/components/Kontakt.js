import React from 'react'
import { Link } from 'react-router-dom'

const Kontakt = () => {
    // Komponent som sender brukeren til kontakt oss siden
    return (
        <section>
            <Link to='/Om-Oss/kontakt-oss' id='kontakt'>Kontakt Oss</Link>
        </section>
    )
}

export default Kontakt

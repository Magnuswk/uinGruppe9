import React, { useState } from 'react'

const KursSkjema = ({onSubmit, pris, tittel}) => {
    const [epost, setEpost] = useState(null)
    const [telefon, setTelefon] = useState('Ingen')
    const [navn, setNavn] = useState('Ingen')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('test')
        onSubmit({navn, epost, telefon, tittel})
    }
    return (
            <form onSubmit={handleSubmit} method="post" action="#">
                <label htmlFor='epost'>Epostadresse</label>
                <input id='epost' required title="Vennligst skriv inn din epostadresse!"
                    onChange={(event)=> setEpost(event.target.value)}></input>

                {pris !== '0'?
                <>
                    <label htmlFor='Navn'>Fullt Navn</label>
                    <input name='Navn' required title="Vennligst skriv inn ditt fulle navn!"
                        onChange={(event)=> setNavn(event.target.value)}></input>

                    <label htmlFor='Telefon'>Telefonnummer</label>
                    <input name='Telefon' required title="Vennligst skriv inn ditt telefonnummer!"
                        onChange={(event)=> setTelefon(event.target.value)}></input>

                </>
                :null}
                <button type="submit">Send skjema</button>
            </form>
    )
}
export default KursSkjema

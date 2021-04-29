import React, { useState } from 'react'

const BilvrakingSkjema = ({onSubmit}) => {
    const [navn, setNavn] = useState(null)
    const [adresse, setAdresse] = useState(null)
    const [postnummer, setPostnummer] = useState(null)
    const [poststed, setPoststed] = useState(null)
    const [epostadresse, setEpostadresse] = useState(null)
    const [telefonnummer, setTelefonnummer] = useState(null)
    const [kontonummer, setKontonummer] = useState(null)
    const [henteadresse, setHenteadresse] = useState(null)
    const [beskrivelseavplassering, setBeskrivelseavplassering] = useState(null)
    const [merkeogmodell, setMerkeogmodell] = useState(null)
    const [farge, setFarge] = useState(null)
    const [omlakkert, setOmlakkert] = useState('nei')
    const [registreringsnummer, setRegistreringsnummer] = useState(null)
    const [chassisnummer, setChassisnummer] = useState(null)
    const [flerebiler, setFlerebiler] = useState('nei')
    const [tilleggsinformasjon, setTilleggsinformasjon] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({navn, adresse, postnummer, poststed, epostadresse, telefonnummer, kontonummer, henteadresse, beskrivelseavplassering, merkeogmodell, farge, omlakkert, registreringsnummer, chassisnummer, flerebiler, tilleggsinformasjon})
    }
    return (
        <form onSubmit={handleSubmit} method="post" action="#">
            <h1>Bilvraking Skjema</h1>

            <label htmlFor='navn'>Fullt Navn</label>
                <input id='navn' required title="Vennligst skriv inn ditt fulle navn!"
                    onChange={(event)=> setNavn(event.target.value)}></input>

            <label htmlFor='adresse'>Adresse</label>
                <input id='adresse' required title="Vennligst skriv inn din adresse!"
                    onChange={(event)=> setAdresse(event.target.value)}></input>

            <label htmlFor='postnummer'>Postnummer</label>
                <input id='postnummer'required title="Vennligst skriv inn ditt Postnummer!"
                    onChange={(event)=> setPostnummer(event.target.value)}></input>

            <label htmlFor='poststed'>Poststed</label>
                <input id='poststed' required title="Vennligst skriv inn ditt Poststed"
                    onChange={(event)=> setPoststed(event.target.value)}></input>

            <label htmlFor='epostadresse'>Epost</label>
                <input id='epostadresse' required title="Vennligst skriv inn din Epostadresse!"
                    onChange={(event)=> setEpostadresse(event.target.value)}></input>

            <label htmlFor='bekreftepostadresse'>Bekreft Epost</label>
                <input id='bekreftepostadresse' required title="Vennlist bekreft at Eposten du har skrevet inn stemmer!"></input>

            <h3>Hvor skal bilen(e) hentes?</h3>
            <label htmlFor='telefonnummer'>Telefonnummer</label>
                <input id='telefonnummer' required title="Hva er ditt Telefonummer?"
                    onChange={(event)=> setTelefonnummer(event.target.value)}></input>

            <label htmlFor='kontonummer'>Kontonummer</label>
                <input id='kontonummer' required title="Hva er ditt Kontonummer?"
                    onChange={(event)=> setKontonummer(event.target.value)}></input>

            <label htmlFor='henteadresse'>Henteadresse</label>
                <input id='henteadresse' required title="Hvor skal vi hente Bilen?"
                    onChange={(event)=> setHenteadresse(event.target.value)}></input>

            <label htmlFor='beskrivelseavplassering'>Nærmere beskrivelse av plassering</label>
                <textarea id='beskrivelseavplassering' required title="Vennligst beskriv hvor vi kan finne bilen"
                    onChange={(event)=> setBeskrivelseavplassering(event.target.value)}></textarea>

            <label htmlFor='merkeogmodell'>Merke og modell</label>
                <input id='merkeogmodell' required title="Hva er bilens Merke og Modell?"
                    onChange={(event)=> setMerkeogmodell(event.target.value)}></input>

            <label htmlFor='farge'>Farge</label>
                <input id='farge' required title="Hvilken farge har bilen?"
                    onChange={(event)=> setFarge(event.target.value)}></input>

            <label htmlFor='ja_nei_omlakkert'>Er bilen omlakkert?</label><br />
                <input type="radio"
                        name="ja_nei_omlakkert"
                        className="radiobutton"
                        value='omlakkert'
                        onChange={(event)=> setOmlakkert(event.target.value)}></input>
                    <label htmlFor='omlakkert'>Ja</label><br />

                <input type="radio"
                        name="ja_nei_omlakkert"
                        className="radiobutton"
                        defaultChecked
                        value='ikke_omlakkert'
                        onChange={(event)=> setOmlakkert(event.target.value)}></input>
                    <label htmlFor='ikke_omlakkert'>Nei</label><br/>


            <label htmlFor='registreringsnummer'>Registreringsnummer</label>
                <input id='registreringsnummer' required title="Hva er bilens Registreringsnummer?"
                    onChange={(event)=> setRegistreringsnummer(event.target.value)}></input>

            <label htmlFor='chassisnummer'>Chassisnummer siste 6 siffer</label>
                <input id='chassisnummer' required title="Hva er bilens Chassisnummer?"
                    onChange={(event)=> setChassisnummer(event.target.value)}></input>

            <label htmlFor='ja_nei_flere'>Skal det hentes flere biler på samme sted?</label><br/>

                <input type="radio" className="radiobutton" name="ja_nei_flere" value='flere'
                    onChange={(event)=> setFlerebiler(event.target.value)}></input>
                        <label htmlFor='flere'>Ja</label><br/>

                <input type="radio" className="radiobutton" name="ja_nei_flere" value='ikke_flere' defaultChecked
                    onChange={(event)=> setFlerebiler(event.target.value)}></input>
                        <label htmlFor='ikke_flere'>Nei</label><br/>

            <label htmlFor='tilleggsinformasjon'>Tilleggsinformasjon</label>
                <textarea id='tilleggsinformasjon' title="Er det noe mer vi trenger å vite?"
                    onChange={(event)=> setTilleggsinformasjon(event.target.value)}></textarea>

            <button type="submit" >Send skjema</button>
        </form>
    )
}

export default BilvrakingSkjema

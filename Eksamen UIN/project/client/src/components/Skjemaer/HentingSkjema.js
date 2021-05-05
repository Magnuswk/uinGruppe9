import React, {useState} from 'react'

const HentingSkjema = ({onSubmit}) => {
    const [avdeling, setAvdeling] = useState('Bodø')
    const [firmanavn, setFirmanavn] = useState(null)
    const [bestillersnavn, setBestillersnavn] = useState(null)
    const [epostadresse, setEpostadresse] = useState(null)
    const [telefonnummer, setTelefonnummer] = useState(null)
    const [henteadresse, setHenteadresse] = useState(null)
    const [kontaktperson, setKontaktperson] = useState(null)
    const [telefonkontaktperson, setTelefonkontaktperson] = useState(null)
    const [hvilketavfall, setHvilketavfall] = useState('farlig avfall')
    const [henvendelse, setHenvendelse] = useState('nei')
    const [tilleggsopplysninger, setTilleggsopplysninger] = useState(null)
    const [kontaktforhenting, setKontaktforhenting] = useState(null)
    const [farligavfallsdeklarasjon, setFarligavfallsdeklarasjon] = useState('nei')
    const [bytteembalasje, setBytteembalasje] = useState('nei')
    const [hentedato, setHentedato] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({avdeling, firmanavn, bestillersnavn, epostadresse, telefonnummer, henteadresse, kontaktperson, telefonkontaktperson, hvilketavfall, henvendelse, tilleggsopplysninger, kontaktforhenting, farligavfallsdeklarasjon, bytteembalasje, hentedato})
    }
    return (
        <form onSubmit={handleSubmit} method="post" action="#">
            <h1>Hente Skjema</h1>
            <label htmlFor='avdeling'>Avdeling</label>
            <select id='avdeling'
                onChange={(event)=> setAvdeling(event.target.value)}>
                    <option value='Bodø'>Bodø</option>
                    <option value='Moirana'>Mo i Rana</option>
                    <option value='Lofoten'>Lofoten</option>
                    <option value='Fauske'>Fauske</option>
                    <option value='Mosjøen'>Mosjøen</option>
                    <option value='Harstad'>Harstad</option>
            </select>

            <label htmlFor='firmanavn'>Firma navn</label>
                <input id='firmanavn' required title="Vennligst skriv inn firma navnet!"
                    onChange={(event)=> setFirmanavn(event.target.value)}></input>

            <label htmlFor='bestillersnavn'>Bestillers navn</label>
                <input id='bestillersnavn' required title="Vennligst skriv inn bestillerens fulle navn!"
                    onChange={(event)=> setBestillersnavn(event.target.value)}></input>

            <label htmlFor='epostadresse'>Epostadresse</label>
                <input id='epostadresse' title="Vennligst skriv inn bestillers epostadresse!"
                    onChange={(event)=> setEpostadresse(event.target.value)}></input>

            <label htmlFor='bekreftepostadresse'>Bekreft epostadresse</label>
                <input id='bekreftepostadresse' required title="Vennligst skriv inn samme epostadressse som over!"></input>

            <label htmlFor='telefonnummer'>Telefonnummer</label>
                <input id='telefonnummer' required title="Vennligst skriv inn bestillers telefonnummer!"
                    onChange={(event)=> setTelefonnummer(event.target.value)}></input>

            <label htmlFor='Henteadresse'>Hente adresse</label>
                <input id='Henteadresse' required title="Vennligst skriv inn hente adressen!"
                    onChange={(event)=> setHenteadresse(event.target.value)}></input>

            <label htmlFor='Kontaktperson'>Navnet for Kontakt person</label>
                <input id='Kontaktperson' required title="Vennligst skriv inn kontakt personens fulle navn!"
                    onChange={(event)=> setKontaktperson(event.target.value)}></input>

            <label htmlFor='Telefonkontaktperson'>Telefonnummer for kontakt personen</label>
                <input id='Telefonkontaktperson' required title="Vennligst skriv inn kontakt personens telefonnummer!"
                    onChange={(event)=> setTelefonkontaktperson(event.target.value)}></input>

            <label htmlFor='Henvendelse'>Hva gjelder henvendelsen?</label>
                <textarea id='Henvendelse' required title="Vennligst skriv inn hva henvendelsen gjelder!"
                    onChange={(event)=> setHenvendelse(event.target.value)}></textarea>

            <label htmlFor='Tilleggsopplysninger'>Tilleggsopplysninger</label>
                <textarea id='Tilleggsopplysninger' required title="Vennligst skriv inn tilleggsopplysninger!"
                    onChange={(event)=> setTilleggsopplysninger(event.target.value)}></textarea>

            <label htmlFor='Kontaktforhenting'>Ønsker du å bli kontaktet før henting?</label><br/>
                <input type="radio"
                        className="radiobutton"
                        name="kontaktForHenting"
                        defaultCheckedvalue="ja"
                        id='Kontaktforhenting'
                        onChange={(event)=> setKontaktforhenting(event.target.value)}></input>
            <label htmlFor="kontaktForHenting">Ja</label><br/>
                <input type="radio"
                        className="radiobutton"
                        value="Nei" name="kontaktForHenting"
                        id='Kontaktforhenting'
                        onChange={(event)=> setKontaktforhenting(event.target.value)}></input>
                <label>Nei</label><br/>


            <label>Hvilken type avfall gjelder det?</label>
                <select id='Hvilketavfall'
                    onChange={(event)=> setHvilketavfall(event.target.value)}>
                        <option value='eeAvfall'>EE-Avfall</option>
                        <option value='farligAvfall'>Farlig avfall</option>
                </select>
                    {hvilketavfall === "farligAvfall" ?
                        <>
                            <label htmlFor='Farligavfallsdeklarasjon'>Farlig avfallsdeklarasjon</label>
                            <input id='Farligavfallsdeklarasjon'
                            onChange={(event)=> setFarligavfallsdeklarasjon(event.target.value)}>
                            </input>

                            <label htmlFor='Bytteembalasje'>Bytte embalasje</label>
                            <input id='Bytteembalasje'
                            onChange={(event)=> setBytteembalasje(event.target.value)}>
                            </input>
                        </>
                        : null
                    }



            <label htmlFor='epostadresse'>Bekreftelse på epost?</label>
            <input type='checkbox' id='epostadresse' value='godta'></input>
            <label htmlFor='Hentedato'>Fyll inn Hente datoen</label>
            <input type='date' id='Hentedato' title="Vennligst skriv inn hente datoen!"
            onChange={(event)=> setHentedato(event.target.value)}>
            </input>
            <button type="submit">Send inn</button>
        </form>
    )
}

export default HentingSkjema

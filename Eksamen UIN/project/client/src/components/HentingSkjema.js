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
        <form>
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
            <label htmlFor='firmanavn'>Firmanavn</label>
            <input id='firmanavn' 
            onChange={(event)=> setFirmanavn(event.target.value)}>
            </input>
            <label htmlFor='bestillersnavn'>Bestillersnavn</label>
            <input id='bestillersnavn' 
            onChange={(event)=> setBestillersnavn(event.target.value)}>
            </input>
            <label htmlFor='epostadresse'>Epostadresse</label>
            <input id='epostadresse' 
            onChange={(event)=> setEpostadresse(event.target.value)}>
            </input>
            <label htmlFor='bekreftepostadresse'>Bekreft epostadresse</label>
            <input id='bekreftepostadresse'>
            </input>
            <label htmlFor='telefonnummer'>Telefonnummer</label>
            <input id='telefonnummer' 
            onChange={(event)=> setTelefonnummer(event.target.value)}>
            </input>
            <label htmlFor='Henteadresse'>Henteadresse</label>
            <input id='Henteadresse' 
            onChange={(event)=> setHenteadresse(event.target.value)}>
            </input>
            <label htmlFor='Kontaktperson'>Kontaktperson</label>
            <input id='Kontaktperson' 
            onChange={(event)=> setKontaktperson(event.target.value)}>
            </input>
            <label htmlFor='Telefonkontaktperson'>Telefonkontaktperson</label>
            <input id='Telefonkontaktperson' 
            onChange={(event)=> setTelefonkontaktperson(event.target.value)}>
            </input>
            <label htmlFor='Hvilketavfall'>Hvilket avfall</label>
            <input id='Hvilketavfall' 
            onChange={(event)=> setHvilketavfall(event.target.value)}>
            </input>
            <label htmlFor='Henvendelse'>Henvendelse</label>
            <input id='Henvendelse' 
            onChange={(event)=> setHenvendelse(event.target.value)}>
            </input>
            <label htmlFor='Tilleggsopplysninger'>Tilleggsopplysninger</label>
            <input id='Tilleggsopplysninger' 
            onChange={(event)=> setTilleggsopplysninger(event.target.value)}>
            </input>
            <label htmlFor='Kontaktforhenting'>Kontaktforhenting</label>
            <input id='Kontaktforhenting' 
            onChange={(event)=> setKontaktforhenting(event.target.value)}>
            </input>
            <label htmlFor='Farligavfallsdeklarasjon'>Farlig avfallsdeklarasjon</label>
            <input id='Farligavfallsdeklarasjon' 
            onChange={(event)=> setFarligavfallsdeklarasjon(event.target.value)}>
            </input>
            <label htmlFor='Bytteembalasje'>Bytte embalasje</label>
            <input id='Bytteembalasje' 
            onChange={(event)=> setBytteembalasje(event.target.value)}>
            </input>
            <label htmlFor='epostadresse'>Bekreftelse</label>
            <input type='checkbox' id='epostadresse' value='godta'></input>
            <label htmlFor='Hentedato'>Hentedato</label>
            <input type='date' id='Hentedato' 
            onChange={(event)=> setHentedato(event.target.value)}>
            </input>
            <button onClick={handleSubmit}>Send inn</button>
        </form>
    )
}

export default HentingSkjema

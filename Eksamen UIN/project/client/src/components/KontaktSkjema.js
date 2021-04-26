import React, {useState} from 'react'

const KontaktSkjema = ({onSubmit}) => {
    const [avdeling, setAvdeling] = useState('Bodø')
    const [navn, setNavn] = useState(null)
    const [epostadresse, setEpostadresse] = useState(null)
    const [telefonnummer, setTelefonnummer] = useState(null)
    const [henvendelse, setHenvendelse] = useState(null)
    const [kontaktmetode, setKontaktmetode] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({avdeling, navn, epostadresse, telefonnummer, henvendelse, kontaktmetode})
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
            <label htmlFor='navn'>navn</label>
            <input id='navn' 
            onChange={(event)=> setNavn(event.target.value)}>
            </input>
            <label htmlFor='Epostadresse'>Epostadresse</label>
            <input id='Epostadresse' 
            onChange={(event)=> setEpostadresse(event.target.value)}>
            </input>
            <label htmlFor='Bekreftepost'>Bekreft epost</label>
            <input id='Bekreftepost'>
            </input>
            <label htmlFor='Telefonnummer'>Telefonnummer</label>
            <input id='Telefonnummer' 
            onChange={(event)=> setTelefonnummer(event.target.value)}>
            </input>
            <label htmlFor='Henvendelse'>Henvendelse</label>
            <textarea id='Henvendelse' 
            onChange={(event)=> setHenvendelse(event.target.value)}>
            </textarea>
            <label htmlFor='Kontaktmetode'>Telefon eller epost?</label>
            <input type='radio' value='epost' onChange={(event)=> setKontaktmetode(event.target.value)}></input>
            <label htmlFor='epost'>Epost</label>
            <input type='radio' value='Telefon' onChange={(event)=> setKontaktmetode(event.target.value)}></input>
            <label htmlFor='Telefon'>Telefon</label>
            <button onClick={handleSubmit}>Send inn</button>
        </form>
    )
}

export default KontaktSkjema

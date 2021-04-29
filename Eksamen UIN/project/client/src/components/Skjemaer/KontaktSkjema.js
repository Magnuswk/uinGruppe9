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
            <h1>Kontakt Skjema</h1>

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

            <label htmlFor='navn'>Navn</label>
                <input id='navn' required
                    onChange={(event)=> setNavn(event.target.value)}></input>

            <label htmlFor='Epostadresse'>Epostadresse</label>
                <input id='Epostadresse' required
                    onChange={(event)=> setEpostadresse(event.target.value)}></input>

            <label htmlFor='Bekreftepost' required>Bekreft epost</label>
                <input id='Bekreftepost'></input>

            <label htmlFor='Telefonnummer'>Telefonnummer</label>
                <input id='Telefonnummer' required
                    onChange={(event)=> setTelefonnummer(event.target.value)}></input>

            <label htmlFor='Henvendelse'>Henvendelse</label>
                <textarea id='Henvendelse' required
                    onChange={(event)=> setHenvendelse(event.target.value)}></textarea>

            <label htmlFor='Kontaktmetode'>Telefon eller epost?</label><br />
                <input type='radio' 
                        value='epost' 
                        className="radiobutton" 
                        defaultChecked name="kontaktmetode" 
                        onChange={(event)=> setKontaktmetode(event.target.value)}></input>
                <label htmlFor='epost' >Epost</label><br />
                <input type='radio' 
                        value='Telefon' 
                        className="radiobutton" 
                        name="kontaktmetode" 
                        onChange={(event)=> setKontaktmetode(event.target.value)}></input>
                <label htmlFor='Telefon'>Telefon</label>
                
            
            <button onClick={handleSubmit}>Send inn</button>
        </form>
    )
}

export default KontaktSkjema

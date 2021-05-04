import React, {useState} from 'react'

const TjenesterSkjema = ({onSubmit}) => {
    const [avdeling, setAvdeling] = useState('Bodø')
    const [navn, setNavn] = useState(null)
    const [adresse, setAdresse] = useState(null)
    const [postnummer, setPostnummer] = useState(null)
    const [poststed, setPoststed] = useState(null)
    const [epostadresse, setEpostadresse] = useState(null)
    const [telefonnummer, setTelefonnummer] = useState(null)
    const [henvendelse, setHenvendelse] = useState(null)
    const [kontaktmetode, setKontaktmetode] = useState('farlig avfall')
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({avdeling, navn, adresse, postnummer, poststed, epostadresse, telefonnummer, henvendelse, kontaktmetode})
        }
    return (
        <form onSubmit={handleSubmit} method="post" action="#">
            <h1>Tjeneste Skjema</h1>
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

            <label htmlFor='navn'>Fullt navn</label>
            <input id='navn' required
                onChange={(event)=> setNavn(event.target.value)}></input>

            <label htmlFor='Adresse'>Adresse</label>
            <input id='Adresse' required
                onChange={(event)=> setAdresse(event.target.value)}></input>

            <label htmlFor='Postnummer'>Postnummer</label>
            <input id='Postnummer' required
                onChange={(event)=> setPostnummer(event.target.value)}></input>

            <label htmlFor='Poststed'>Poststed</label>
            <input id='Poststed' required
                onChange={(event)=> setPoststed(event.target.value)}></input>

            <label htmlFor='Epostadresse'>Epostadresse</label>
            <input id='Epostadresse' required
                onChange={(event)=> setEpostadresse(event.target.value)}></input>

            <label htmlFor='Bekreftepost'>Bekreft Epostadresse</label>
            <input id='Bekreftepost' required></input>

            <label htmlFor='Telefonnummer'>Telefonnummer</label>
            <input id='Telefonnummer' required
                onChange={(event)=> setTelefonnummer(event.target.value)}></input>

            <label htmlFor='Henvendelse'>Hva gjelder din henvendelse?</label>
            <textarea id='Henvendelse' required
                onChange={(event)=> setHenvendelse(event.target.value)}></textarea>

            <label htmlFor='Kontaktmetode'>Ønsker du svar på Telefon eller epost?</label><br />
                <input type='radio'
                        defaultChecked
                        value='epost'
                        className="radiobutton"
                        name="kontaktmetode"
                        onChange={(event)=> setKontaktmetode(event.target.value)}></input>
                    <label htmlFor='epost'>Epost</label><br />

                <input type='radio'
                        value='Telefon'
                        className="radiobutton"
                        name="kontaktmetode"
                        onChange={(event)=> setKontaktmetode(event.target.value)}></input>
                    <label htmlFor='Telefon'>Telefon</label>


            <button type="submit">Send inn</button>
        </form>
    )
}

export default TjenesterSkjema

import React, {useState} from 'react'

const ContainerleieSkjema = ({onSubmit}) => {
    const [avdeling, setAvdeling] = useState('Bodø')
    const [navn, setNavn] = useState(null)
    const [adresse, setAdresse] = useState(null)
    const [postnummer, setPostnummer] = useState(null)
    const [poststed, setPoststed] = useState(null)
    const [telefonnummer, setTelefonnummer] = useState(null)
    const [epostadresse, setEpostadresse] = useState(null)
    const [fakturatiladresse, setFakturatiladresse] = useState('ja')
    const [fakturamottaker, setFakturamottaker] = useState(navn)
    const [fakturaadresse, setFakturaadresse] = useState(adresse)
    const [fakturapostnummer, setFakturapostnummer] = useState(postnummer)
    const [fakturapoststed, setFakturapoststed] = useState(poststed)
    const [fakturaepostadresse, setFakturaepostadresse] = useState(epostadresse)
    const [postellerepost, setPostellerepost] = useState('Epost')
    const [plasseringsadresse, setPlasseringsadresse] = useState(null)
    const [datoforutsetting, setDatoforutsetting] = useState(null)
    const [datoforhenting, setDatoforhenting] = useState(null)
    const [tilleggsopplysninger, setTilleggsopplysninger] = useState(null)
    const [beskrivplasseringen, setBeskrivplasseringen] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({avdeling, navn, adresse, postnummer, poststed, telefonnummer, fakturatiladresse, fakturamottaker, fakturaadresse, fakturapostnummer, fakturapoststed, fakturaepostadresse, postellerepost, plasseringsadresse, datoforutsetting, datoforhenting, tilleggsopplysninger, beskrivplasseringen})
    }
    return (
        <form>
            <h1>Containerleie Skjema</h1>

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
                <input id='navn'  required
                    onChange={(event)=> setNavn(event.target.value)}></input>

            <label htmlFor='Adresse'>Adresse</label>
                <input id='Adresse'  required
                    onChange={(event)=> setAdresse(event.target.value)}></input>

            <label htmlFor='Postnummer'>Postnummer</label>
                <input id='Postnummer'  required
                    onChange={(event)=> setPostnummer(event.target.value)}></input>

            <label htmlFor='Poststed'>Poststed</label>
                <input id='Poststed' required
                    onChange={(event)=> setPoststed(event.target.value)}></input>

            <label htmlFor='telefonnummer'>Telefonnummer</label>
                <input id='telefonnummer'  required
                    onChange={(event)=> setTelefonnummer(event.target.value)}></input>

            <label htmlFor='Epostadresse'>Epostadresse</label>
                <input id='Epostadresse'  required
                    onChange={(event)=> setEpostadresse(event.target.value)}></input>

            <label htmlFor='Bekreftepostadresse'>Bekreft epostadresse</label>
                <input id='Bekreftepostadresse'  required></input>

    

            <label htmlFor='Fakturatiladresse'>Skal fakturaen til adressen over?</label><br />
                <input type='radio' 
                        value='Ja' 
                        className="radiobutton" 
                        defaultChecked 
                        name="Fakturatiladresse" 
                        onChange={(event)=> setFakturatiladresse(event.target.value)}></input>
                    <label htmlFor='Ja' >Ja</label><br />

                <input type='radio' 
                        value='Nei' 
                        className="radiobutton" 
                        name="Fakturatiladresse" 
                        onChange={(event)=> setFakturatiladresse(event.target.value)}></input>
                    <label htmlFor='Nei'>Nei</label><br/>


            {fakturatiladresse === "Nei" ? 
                <>
                    <label htmlFor='Fakturamottaker'>Fakturamottaker</label>
                        <input id='Fakturamottaker'  required
                    onChange={(event)=> setFakturamottaker(event.target.value)}></input>

                    <label htmlFor='Fakturaadresse'>Fakturaadresse</label>
                        <input id='Fakturaadresse'  required
                            onChange={(event)=> setFakturaadresse(event.target.value)}></input>

                    <label htmlFor='Fakturapostnummer'>Fakturapostnummer</label>
                        <input id='Fakturapostnummer'  required
                            onChange={(event)=> setFakturapostnummer(event.target.value)}></input>

                    <label htmlFor='Fakturapoststed'>Fakturapoststed</label>
                        <input id='Fakturapoststed'  required
                            onChange={(event)=> setFakturapoststed(event.target.value)}></input>

                    <label htmlFor='Fakturaepostadresse'>Fakturaepostadresse</label>
                        <input id='Fakturaepostadresse'  required
                            onChange={(event)=> setFakturaepostadresse(event.target.value)}></input>

                    <label htmlFor='Bekreftmottakersepost'>Bekreftmottakersepost</label>
                        <input id='Bekreftmottakersepost'  required></input>
                </>
                : null
            }



            <label htmlFor='postellerepost'>post eller epost?</label><br/>
            <input type='radio' 
                    name="postellerespost" 
                    value='epost' 
                    defaultChecked 
                    className="radiobutton" 
                    onChange={(event)=> setPostellerepost(event.target.value)}></input>
                <label htmlFor='Epost'>Epost</label><br/>
            <input type='radio'
                     name="postellerespost" 
                     className="radiobutton" 
                     value='post' 
                     onChange={(event)=> setPostellerepost(event.target.value)}></input>
                <label htmlFor='Post'>Post</label><br/>
        
            <label htmlFor='Plasseringsadresse'>Plasseringsadresse</label>
                <input id='Plasseringsadresse'  required
                    onChange={(event)=> setPlasseringsadresse(event.target.value)}></input>

            <label htmlFor='Datoforutsetting'>Datoforutsetting</label>
                <input type='date' id='Datoforutsetting'  required
                    onChange={(event)=> setDatoforutsetting(event.target.value)}></input>

            <label htmlFor='Datoforhenting'>Datoforhenting</label>
                <input type='date' id='Datoforhenting'  required
                    onChange={(event)=> setDatoforhenting(event.target.value)}></input>

            <label htmlFor='Tilleggsopplysninger'>Tilleggsopplysninger</label>
                <textarea  id='Tilleggsopplysninger'  required
                    onChange={(event)=> setTilleggsopplysninger(event.target.value)}></textarea>

            <label htmlFor='Beskrivplasseringen'>Beskrivplasseringen</label>
                <textarea  id='Beskrivplasseringen'  required
                    onChange={(event)=> setBeskrivplasseringen(event.target.value)}></textarea>

            <button onSubmit={handleSubmit}>Send inn</button>
        </form>
    )
}

export default ContainerleieSkjema

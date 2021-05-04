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
        <form onSubmit={handleSubmit} method="post" action="#">
            <h1>Containerleie Skjema</h1>

            <label htmlFor='avdeling'>Avdeling</label>
                <select id='avdeling' title="Hvilken avdeling ønsker du å bestille fra?"
                onChange={(event)=> setAvdeling(event.target.value)}>
                    <option value='Bodø'>Bodø</option>
                    <option value='Moirana'>Mo i Rana</option>
                    <option value='Lofoten'>Lofoten</option>
                    <option value='Fauske'>Fauske</option>
                    <option value='Mosjøen'>Mosjøen</option>
                    <option value='Harstad'>Harstad</option>
                </select>

            <label htmlFor='navn'>Navn</label>
                <input id='navn'  required title="Skriv inn ditt fulle Navn"
                    onChange={(event)=> setNavn(event.target.value)}></input>

            <label htmlFor='Adresse'>Adresse</label>
                <input id='Adresse'  required title="Hva er din Adresse?"
                    onChange={(event)=> setAdresse(event.target.value)}></input>

            <label htmlFor='Postnummer'>Postnummer</label>
                <input id='Postnummer'  required title="Hva er ditt Postnummer?"
                    onChange={(event)=> setPostnummer(event.target.value)}></input>

            <label htmlFor='Poststed'>Poststed</label>
                <input id='Poststed' required title="Hva er ditt Poststed?"
                    onChange={(event)=> setPoststed(event.target.value)}></input>

            <label htmlFor='telefonnummer'>Telefonnummer</label>
                <input id='telefonnummer'  required title="Hva er ditt Telefonnummer?"
                    onChange={(event)=> setTelefonnummer(event.target.value)}></input>

            <label htmlFor='Epostadresse'>Epostadresse</label>
                <input id='Epostadresse'  required title="Vennligst skriv inn din epostadresse!"
                    onChange={(event)=> setEpostadresse(event.target.value)}></input>

            <label htmlFor='Bekreftepostadresse'>Bekreft epostadresse</label>
                <input id='Bekreftepostadresse'  required title="Vennligst skriv inn samme epostadresse som over!"></input>



            <label htmlFor='Fakturatiladresse'>Skal fakturaen sendes til adressen over?</label><br />
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
                    <label htmlFor='Fakturamottaker'>Navnet for Faktura mottaker</label>
                        <input id='Fakturamottaker'  required title="Vennligst skriv inn fakturamottakers fulle navn!"
                    onChange={(event)=> setFakturamottaker(event.target.value)}></input>

                    <label htmlFor='Fakturaadresse'>Faktura adresse</label>
                        <input id='Fakturaadresse'  required 
                            onChange={(event)=> setFakturaadresse(event.target.value)}></input>

                    <label htmlFor='Fakturapostnummer'>Faktura postnummer</label>
                        <input id='Fakturapostnummer'  required title="Vennligst skriv inn postnummer!"
                            onChange={(event)=> setFakturapostnummer(event.target.value)}></input>

                    <label htmlFor='Fakturapoststed'>Faktura poststed</label>
                        <input id='Fakturapoststed'  required title="Vennligst skriv inn poststed!"
                            onChange={(event)=> setFakturapoststed(event.target.value)}></input>

                    <label htmlFor='Fakturaepostadresse'>Faktura mottakers epostadresse</label>
                        <input id='Fakturaepostadresse'  required title="Vennligst skriv inn fakturamottakers epostadresse!"
                            onChange={(event)=> setFakturaepostadresse(event.target.value)}></input>

                    <label htmlFor='Bekreftmottakersepost'>Bekreft mottakers epost</label>
                        <input id='Bekreftmottakersepost'  required title="Vennligst skriv inn samme epostadresse som over!"></input>
                </>
                : null
            }



            <label htmlFor='postellerepost'>Ønsker du svaret på Post eller Epost?</label><br/>
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
                <input id='Plasseringsadresse'  required title="Vennligst skriv inn hvor containeren skal plasseres!"
                    onChange={(event)=> setPlasseringsadresse(event.target.value)}></input>

            <label htmlFor='Datoforutsetting'>Dato for utsetting</label>
                <input type='date' id='Datoforutsetting'  required title="Vennligst skriv inn datoen du ønsker den skal settes ut på!"
                    onChange={(event)=> setDatoforutsetting(event.target.value)}></input>

            <label htmlFor='Datoforhenting'>Dato for henting</label>
                <input type='date' id='Datoforhenting'  required title="Vennligst skriv inn datoen du ønsker den skal hentes på!"
                    onChange={(event)=> setDatoforhenting(event.target.value)}></input>

            <label htmlFor='Tilleggsopplysninger'>Tilleggsopplysninger</label>
                <textarea  id='Tilleggsopplysninger'  required title="Vennligst skriv inn tilleggsinformasjon!"
                    onChange={(event)=> setTilleggsopplysninger(event.target.value)}></textarea>

            <label htmlFor='Beskrivplasseringen'>Beskriv plasseringen</label>
                <textarea  id='Beskrivplasseringen'  required title="Vennligst beskriv plasseringen nærmere!"
                    onChange={(event)=> setBeskrivplasseringen(event.target.value)}></textarea>

            <button onClick={handleSubmit}>Send inn</button>
        </form>
    )
}

export default ContainerleieSkjema

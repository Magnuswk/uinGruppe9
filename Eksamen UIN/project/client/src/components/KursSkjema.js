import React, { useState } from 'react'

const KursSkjema = ({onSubmit, pris}) => {
    const [epost, setEpost] = useState(null)
    const [telefon, setTelefon] = useState('Ingen')
    const [navn, setNavn] = useState('Ingen')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('test')
        onSubmit({navn, epost, telefon})
    }
    return (
            <form>
                <label htmlFor='epost'>Epost</label>
                <input id='epost'
                    onChange={(event)=> setEpost(event.target.value)}></input>

                {pris !== '0'?
                <>
                    <label htmlFor='Navn'>Navn</label>
                    <input name='Navn'
                        onChange={(event)=> setNavn(event.target.value)}></input>
                    
                    <label htmlFor='Telefon'>Telefon</label>
                    <input name='Telefon'
                        onChange={(event)=> setTelefon(event.target.value)}></input>
                    
                </>
                :null}
                <button onClick={handleSubmit}>Send skjema</button>
            </form>
    )
}
export default KursSkjema

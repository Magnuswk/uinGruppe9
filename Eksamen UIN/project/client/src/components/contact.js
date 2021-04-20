import { useState } from 'react'
  // Containerleie
  // bestilling og henting av farlig avfall
  // Generelt kontaktskjema
  // bilvraking
  // bestilling henting av ee- avfall
const Contact = (props) => {
    const [name, setName] = useState("")
    const handleChange = (event) =>{
        setName(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(name)
        
    }
    return (
        <form onSubmit={handleSubmit} method="POST" id="skjema">
            <label id="avdeling">Henvendelsen skal sendes til Østbø sin avdelig i:</label>
                
            <select name="avdeling" id="avdelingselect">
                <option value="Salten">Salten</option>
                <option value="Helgeland">Helgeland</option>
                <option value="Lofoten">Lofoten</option>
                <option value="Hålogaland">Hålogaland</option>
                <option value="Vesterålen">Vesterålen</option>
                <option value="Nord-Norge">Nord-Norge for øverig</option>
            </select>
            <label id="name">Navn:</label>
            <input 
                onChange={handleChange}
                value={name}
                type="text" id="name" 
                placeholder="Skriv inn ditt navn" 
                required 
            />
            <label>Adresse</label>
            <input></input>

            <label>Postnummer</label>
            <input></input>

            <label>Poststed</label>
            <input></input>

            <label>E-Postadresse</label>
            <input></input>

            <label>Bekreft Epostadresse</label>
            <input></input>

            <label>Telefon</label>
            <input></input>

            <label>Henvendelsen Gjelder</label>
            <textarea></textarea>

            <label>Ønsker svar pr</label>

            <input type="checkbox" id="boks1" name="boks1"></input>
            <label for="boks1">Telefon</label>

            <input type="checkbox" id="boks2" name="boks2"></input>
            <label for="boks2">E-Post</label>

            <button type="submit">Send</button>
        </form>
    )
}

export default Contact

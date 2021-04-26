import {useState} from 'react'
import Contact from "../components/contact"
import { createContact, createBilvraking, createContainerleie, createHenting, createTjenester} from '../utils/SkjemaService'
import Bilvrakingskjema from './Bilvrakingskjema'

const Skjemaer = ({type}) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const onSubmit = async (data) => {
        setLoading(true)
        setError(false)
        setSuccess(false)
        try {
            switch (type) {
                case 'Slamsuging' || 'Tankrengjøring' || 'Fjerning av Oljetank':
                    await createTjenester(data)
                    break;
                case 'Henting av EE-avfall' || 'Bestilling og Henting av Farlig Avfall':
                    await createHenting(data)
                    break;
                case 'Bilvraking':
                    await createBilvraking(data)
                    break;
                case 'Containerleie':
                    await createContainerleie(data)
                    break;
                default:
                    await createContact(data)
                    break;
            }
            setSuccess(true)
        } catch (error) {
            setError(error.message)
        } finally { 
            setLoading(false)
        }
    }

    return (
        <div id='mainskjemawrapper'>
            <h1>Kontakt Skjema</h1>
            {error ? <p>{error}</p>: null}
            {success ? <p>Takk din henvendelse er motatt!</p>: null}
            {loading ? <p>Loading...</p>: null}      
            <Bilvrakingskjema onSubmit={onSubmit}/>
            
        </div>
    )
}

export default Skjemaer

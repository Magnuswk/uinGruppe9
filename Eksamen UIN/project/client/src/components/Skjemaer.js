import {useState} from 'react'
import { createContact, createBilvraking, createContainerleie, createHenting, createTjenester} from '../utils/SkjemaService'
import Bilvrakingskjema from './BilvrakingSkjema'
import ContainerleieSkjema from './ContainerleieSkjema'
import KontaktSkjema from './KontaktSkjema'
import HentingSkjema from './HentingSkjema'
import TjenesterSkjema from './TjenesterSkjema'

const Skjemaer = ({type}) => {
    const Sideliste = ['Slamsuging', 'Tankrengjøring', ' Fjerning av Oljetank', 'Henting av EE-avfall', 'Bestilling og Henting av Farlig Avfall', 'Bilvraking', 'Containerleie']
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
            {type==='Bilvraking'?<Bilvrakingskjema onSubmit={onSubmit}/> : null}
            {/* {type==='Henting av EE-avfall' || 'Bestilling og Henting av Farlig Avfall'?<HentingSkjema onSubmit={onSubmit}/> : null} */}
            {type==='Containerleie'?<ContainerleieSkjema onSubmit={onSubmit}/> : null}
            {(type==='Slamsuging' || 'Tankrengjøring' || 'Fjerning av Oljetank') ? <TjenesterSkjema onSubmit={onSubmit}/> : null}
            {console.log(type)}
            {!Sideliste.includes(type)? <KontaktSkjema onSubmit={onSubmit}/> : null }
        </div>
    )
}

export default Skjemaer

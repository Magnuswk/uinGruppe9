import {useState} from 'react'
import { createContact, createBilvraking, createContainerleie, createHenting, createTjenester, createKurs} from '../../utils/SkjemaService'
import BilvrakingSkjema from './BilvrakingSkjema'
import ContainerleieSkjema from './ContainerleieSkjema'
import KontaktSkjema from './KontaktSkjema'
import HentingSkjema from './HentingSkjema'
import TjenesterSkjema from './TjenesterSkjema'
import KursSkjema from './KursSkjema'

const Skjemaer = ({type, pris, kategori}) => {
    const Sideliste = ['Slamsuging', 'Tankrengjøring', ' Fjerning av Oljetank', 'Henting av EE-avfall', 'Bestilling og Henting av Farlig Avfall', 'Bilvraking', 'Containerleie', 'Kurs']
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const onSubmit = async (data) => {
        setLoading(true)
        setError(false)
        setSuccess(false)
        try {
            switch (type || kategori) {
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
                case 'Kurs':
                    await createKurs(data)
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
        <section id='skjemasection'>

            {error ? <p>{error}</p>: null}
            {loading ? <p>Sender henvendelse!</p>: null}
            {success ? <p>Takk din henvendelse er motatt!</p>: null}
            {type === "Containerleie" ? <ContainerleieSkjema onSubmit={onSubmit} /> : null}
            {type==='Bilvraking'?<BilvrakingSkjema onSubmit={onSubmit}/> : null}
            {type==='Henting av EE-avfall' || type ==='Bestilling og Henting av Farlig Avfall'?<HentingSkjema onSubmit={onSubmit}/> : null}
            {(type==='Slamsuging' || type==='Tankrengjøring' || type==='Fjerning av Oljetank') ? <TjenesterSkjema onSubmit={onSubmit}/> : null}
            {kategori === 'Kurs'? <KursSkjema onSubmit={onSubmit} pris={pris} tittel={type}/> : null }
            {!Sideliste.includes(type) && !Sideliste.includes(kategori)? <KontaktSkjema onSubmit={onSubmit}/> : null }

        </section>
    )
}

export default Skjemaer

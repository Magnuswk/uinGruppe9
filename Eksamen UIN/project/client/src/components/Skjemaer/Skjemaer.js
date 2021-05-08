import {useState} from 'react'
import { createContact, createBilvraking, createContainerleie, createHenting, createTjenester, createKurs} from '../../utils/SkjemaService'
import BilvrakingSkjema from './BilvrakingSkjema'
import ContainerleieSkjema from './ContainerleieSkjema'
import KontaktSkjema from './KontaktSkjema'
import HentingSkjema from './HentingSkjema'
import TjenesterSkjema from './TjenesterSkjema'
import KursSkjema from './KursSkjema'
// Props som sier Navnet på siden, om det er et kurs som har pris og hvilken kategori siden hører til
const Skjemaer = ({type, pris, kategori}) => {
    // Liste over sider som ikke skal ha kontaktskjema
    const Sideliste = ['Slamsuging', 'Tankrengjøring', ' Fjerning av Oljetank', 'Henting av EE-avfall', 'Bestilling og Henting av Farlig Avfall', 'Bilvraking', 'Containerleie', 'Kurs']
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    // Om bruker submiter skjemaet
    const onSubmit = async (data) => {
        setLoading(true)
        setError(false)
        setSuccess(false)
        // Varierer hvilken create funksjon som skal calles fra hvilken side du er på, kategori fordi kurs er en egen kategori
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
            // Innholdet er sendt
            setSuccess(true)
        } catch (error) {
            // Error med å sende innhold
            setError(error.message)
        } finally {
            // Prøver å sende innhold
            setLoading(false)
        }
    }
    return (
        <section id='skjemasection'>
            {/* Skriv ut feilmelding */}
            {error ? <p>{error}</p>: null}
            {/* Sender innhold */}
            {loading ? <p>Sender henvendelse!</p>: null}
            {/* Innholdet er Sendt */}
            {success ? <p>Takk din henvendelse er motatt!</p>: null}
            {/* Hvilke skjemaer skal vises på de forskjellige sidene */}
            {type === "Containerleie" ? <ContainerleieSkjema onSubmit={onSubmit} /> : null}
            {type==='Bilvraking'?<BilvrakingSkjema onSubmit={onSubmit}/> : null}
            {type==='Henting av EE-avfall' || type ==='Bestilling og Henting av Farlig Avfall'?<HentingSkjema onSubmit={onSubmit}/> : null}
            {(type==='Slamsuging' || type==='Tankrengjøring' || type==='Fjerning av Oljetank') ? <TjenesterSkjema onSubmit={onSubmit}/> : null}
            {kategori === 'Kurs'? <KursSkjema onSubmit={onSubmit} pris={pris} tittel={type}/> : null }
            {/* Dersom siden ikke er i listen over sider som har andre skjemaer */}
            {!Sideliste.includes(type) && !Sideliste.includes(kategori)? <KontaktSkjema onSubmit={onSubmit}/> : null }

        </section>
    )
}

export default Skjemaer

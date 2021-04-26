import {useState} from 'react'
import Contact from "../components/contact"
import { createContact } from '../utils/kontaktservice'
const Skjemaer = ({type}) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    console.log(type)
    const onSubmit = async (name) => {
        setLoading(true)
        setError(false)
        setSuccess(false)

        try {
            await createContact(name)
            setSuccess(true)
        } catch (error) {
            setError(error.message)
        } finally { 
            setLoading(false)
        }
    }
    return (
        <div id='mainskjemawrapper'>
            <h1>KontaktSkjema</h1>
            {error ? <p>{error}</p>: null}
            {success ? <p>Takk din henvendelse er motatt!</p>: null}
            {loading ? <p>Loading...</p>: null}       
            <Contact onSubmit={onSubmit} type={type}/>
        </div>
    )
}

export default Skjemaer

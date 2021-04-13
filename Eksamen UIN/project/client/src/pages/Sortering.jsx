import Sortering from "../components/Sortering"
import Artikkelmain from "../components/Artikkelmain"
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Sortering />
            <Artikkelmain>
                <h1>Sortering</h1>
                <h2>Næringsavfall</h2>'
                <p>Her finner du alt som har med <NavLink to="/Næringsavfall">Næringsavfall</NavLink></p>
                <h2>Farlig Avfall</h2>
                <p>Her finner du alt som har med <NavLink to="/Farlig-avfall">Farlig avfall</NavLink></p>
                <h2>Byggavfall</h2>
                <p>Her finner du alt som har med <NavLink to="/Byggavfall">Byggavfall</NavLink></p>
                <h2>Jern og Metall</h2>
                <p>Her finner du alt som har med <NavLink to="/Jern-og-Metall">Jern og Metall</NavLink></p>
                
            </Artikkelmain>
        </>
    )
}

export default Home

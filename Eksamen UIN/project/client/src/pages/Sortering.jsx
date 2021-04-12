import Header from '../components/Header'
import Sidebar from "../components/Sidebar"
import Artikkelmain from "../components/Artikkelmain"
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Header />
            <Sidebar>
                <h1>
                    Sortering
                </h1>
                <h2>
                    <ul>
                        <li><NavLink to="/Næringsavfall">Næringsavfall</NavLink></li>
                        <li><NavLink to="/Farlig-avfall">Farlig avfall</NavLink></li>
                        <li><NavLink to="/Byggavfall">Byggavfall</NavLink></li>
                        <li><NavLink to="/jern-og-metall">Jern og Metall</NavLink></li>
                    </ul>
                </h2>
            </Sidebar>
            <Artikkelmain>
                <h1>Sortering</h1>
                <h2>Næringsavfall</h2>'
                <p>Her finner du alt som har med <NavLink to="/Næringsavfall">Næringsavfall</NavLink></p>
                <h2>Farlig Avfall</h2>
                <p>Her finner du alt som har med <NavLink to="/Farlig-avfall">Farlig avfall</NavLink></p>
                <h2>Byggavfall</h2>
                <p>Her finner du alt som har med <NavLink to="/Byggavfall">Byggavfall</NavLink></p>
                <h2>Jern og Metall</h2>
                <p>Her finner du alt som har med <NavLink to="/jern-og-metall">Jern og Metall</NavLink></p>
                
            </Artikkelmain>
        </>
    )
}

export default Home

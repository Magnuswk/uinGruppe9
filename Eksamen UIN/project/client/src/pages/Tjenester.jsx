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
                    Tjenester
                </h1>
                <h2>
                    <ul>
                        <li><NavLink to="/Tjenester/Containerleie">Containerleie</NavLink></li>
                        <li><NavLink to="/Tjenester/Avløpsrens" >Avløpsrens</NavLink></li>
                        <li><NavLink to="/Tjenester/Olje-og-Fettutskilling">Olje og Fettutskilling</NavLink></li>
                        <li><NavLink to="/Tjenester/Gravesuger">Gravesuger</NavLink></li>
                        <li><NavLink to="/Tjenester/Henting-av-farlig-avfall">Henting av Farlig avfall</NavLink></li>
                    </ul>
                </h2>
            </Sidebar>
            <Artikkelmain>
                <h1>Tjenester</h1>
                <p>På denne siden kan du finne informasjon om hvilke tjenester vi i østbø tilbyr!</p>
                <h2>Containerleie</h2>
                <p>På siden for <NavLink to="/Tjenester/Containerleie">Containerleie</NavLink> Kan du leie en container hos oss!</p>
                <h2>Avløpsrens</h2>
                <p>På siden for <NavLink to="/Tjenester/Avløpsrens">Avløpsrens</NavLink> kan du leie oss inn til å fikse tette rør</p>
                <h2>Olje og Fettutskilling</h2>
                <p>Dette er siden for <NavLink to="/Tjenester/Olje-og-fettutskilling">Olje og Fettutskilling</NavLink></p>
                <h2>Gravesuger</h2>
                <p>Her kan du leie en <NavLink to="/Tjenester/Gravesuger">Gravesuger</NavLink></p>
                <h2>Bestilling og Henting av Farlig Avfall</h2>
                <p>Her kan du bestille <NavLink to="/Tjenester/Henting-av-farlig-avfall">Henting av Farlig Avfall</NavLink></p>
            </Artikkelmain>
        </>
    )
}

export default Home

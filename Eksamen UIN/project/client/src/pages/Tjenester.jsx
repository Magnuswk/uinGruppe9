import Header from '../components/Header'
import Sidebar from "../components/Sidebar"
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Header />
            <Sidebar>
                <ul>
                    <li><NavLink to="/Containerleie">Containerleie</NavLink></li>
                    <li><NavLink to="/Avløpsrens">Avløpsrens</NavLink></li>
                    <li><NavLink to="/OljeogFettutskilling">Olje og Fettutskilling</NavLink></li>
                    <li><NavLink to="/Gravesuger">Gravesuger</NavLink></li>
                    <li><NavLink to="/Bestillinghentingavfarligavfall">Bestilling og henting av farlig avfall</NavLink></li>

                </ul>
            </Sidebar>
        </div>
    )
}

export default Home

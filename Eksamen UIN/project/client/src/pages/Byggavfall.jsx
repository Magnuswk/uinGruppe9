import React from 'react'
import Sortering from "../components/Sortering"
import { NavLink } from 'react-router-dom'
import Artikkelmain from "../components/Artikkelmain"

const Byggavfall = () => {
    return (
        <>

            <Sortering />
            <Artikkelmain>
                <h1>Byggavfall</h1>
                <h2>Generelt om Byggavfall</h2>
                <p>Vi hjelper til med ganske mye på byggeplasser i alle størrelser!
                    <br /><br />
                    <ul>
                        <li>Byggeplassgartner/Befaring og kontroller på byggeplass</li>
                        <li>Deltar på byggemøter og planleggingsmøter</li>
                        <li>Byggavfallskurs for god økonomi i prosjektet</li>
                        <li>Utarbeidelse av avfalsplan og sluttrapport</li>
                        <li>Lettleste avfallsstatistikker</li>
                    </ul>
                    <br />
                    For å lese mer om byggavfall, se <NavLink to="https://www.miljodirektoratet.no/aktuelt/">Miljødirektoratet sine sider</NavLink><br />
                    Du kan også <NavLink to="https://ostbo.no/salgs-og-markedsavdelingen">kontakte vår salgsavdeling!</NavLink>
                </p>
                <h2>
                    Lokal gjennvinning - Lokale Fordeler!
                </h2>
                <p>Les hvordan ditt trevirke holder temperaturen på fødestua oppe!</p>
                <p>Østbø leverer hvert år 10.000 tonn flis til forbrenningsanlegget på Rønvikjordet i Bodø. 
                    Vi kverner trevirket vi får inn, dette tørker vi og kjører det opp til "Keisern 
                    (forbrenningsanlegget)". Produksjonssjef Ole-Marius Norheim tar imot oss på
                    avfallsmottaket på Langstranda i Bodø.
                </p>
                <h3>Strenge krav</h3>
                <p>
                    Flisa vi produserer skal bare inneholde 25% fuktighet, så det er en omhyggelig prosess å
                    lage et sluttprodukt med høy kvalitet forteller Norheim. Vi har utstyr som tar ut spiker,
                    beslag og andre fremmedelementer underveis i prosessen, og vi sikter flisa flere ganger
                    for å være sikker på vår kunde skal være fornøyd med produktet.
                </p>
                <p>
                    Miljøgevinsten med å gjenvinne lokalt avfall og benytte ressursene her vi bor er
                    formidabel. Før kjørte vi flisa til Heimdal utenfor Trondheim. Det sier seg selv at det er
                    en mye større gevinst med en tur på 3 kilometer og ikke 700 kilometer. Så nå sparer vi
                    miljøet og varmer opp blant annet sykehuset i samme operasjon.
                </p>
                <p>
                    Noen av byggene som får varme fra vårt trevirke:
                    <ul>
                        <li>Nordlandssykehuset</li>
                        <li>Salten Brann IKS, Brannstasjonen</li>
                        <li>Bodø Fengsel</li>
                        <li>Stormen kulturhus og Stormen Bibliotek</li>
                        <li>City Nord</li>
                        <li>Bodø Spektrum</li>
                        <li>Scandic Havet</li>
                        <li>Radisson Blu Bodø</li>
                    </ul>
                </p>
                <p>
                    Flere av dagens store byggeprosjekter skal også knyttes på:
                    <ul>
                        <li>Ramsalt</li>
                        <li>Bryggerihagen</li>
                        <li>Meierihagen</li>
                        <li>Bodø 360</li>
                        <li>Rådhuset</li>
                    </ul>
                </p>
                <h3>Hageavfall blir ikke flis</h3>
                <p>
                    Driftsleder Tor-Olav Engelsaas forklarer at hageavfall ikke blir flis. Hageavfall lages det
                    kompost av.
                </p>
                <p>
                    Dessuten er treet altfor fuktig, da slukkes ovnene oppe på "Keiseren", og da har vi det
                    gående humrer Engelsaas. Vi produserer opp ca 200/300 tonn i slengen som vi fyller
                    siloene med jevnt fordelt utover uka, hele veien i tett dialog med Bodø Energi Varme.
                </p>
                <p>
                    Selv om mange kjører hageavfallet hit, komposteres det. Kundene våre setter pris på vår
                    nærhet til byen, og at vi er et anlegg som tar imot alle typer avfall.
                </p>
                <p>
                    Vi tar imot alle typer trevirke, særlig impregnert materiale og oppussingsavfall. Vi har
                    mange kunder som pusser opp som leier containere fra oss underveis. Sikkert for å
                    holde kjerringa i godt humør, ler Norheim. 
                </p>

            </Artikkelmain>

        </>
    )
}

export default Byggavfall

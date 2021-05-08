import React from 'react'
import styled from 'styled-components'
import salten from '../Images/salten.png'
const Footerstyle = styled.footer`
    background-color: #93ba3d;
    font-Size: 20px;
    color: black;
    border-Top: 1px solid #E7E7E7;
    line-height: 1.5;
    margin-top: 1rem;
    margin-bottom: 1 rem;
    left: 0;
    bottom: 0;
    margin-top: 5%;
    display: grid;
    grid-template-columns: 41% 39% 10%;
    grid-gap: 5%;
`
const Footer = () =>  {

        return (
            <>
                <Footerstyle className="grid-container">
                    <section className='grid-item'> 
                    <img src={salten} alt="salten logo"  width="600"></img>
                    </section>
                    <section className="grid-item">
                        <p>Kontakt oss:  </p>
                        <p>© ØSTBØ AS   </p>
                        <p>Plassen 5, 8006 Bodø </p>
                        <p>Postadresse: Postboks 1447, 8038 Bodø </p>
                        <p>Telefon +47 75 50 09 00</p>
                        <p>Epost postmottak@ostbo.no</p>
                        <p>Org.nr 920 508 324</p>
                        <p>En del av SB-konsernet</p>
                    </section>

                    <section className='grid-item'>

                    </section>
    
                </Footerstyle>
            </>
        );
}


export default Footer
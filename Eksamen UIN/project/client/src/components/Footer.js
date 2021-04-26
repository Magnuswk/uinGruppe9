import React from 'react'
import styled from 'styled-components'
import salten from '../Images/salten.png'
const Footerstyle = styled.footer`
    background-color: #93ba3d;
    font-Size: 20px;
    color: black;
    border-Top: 1px solid #E7E7E7;
    text-Align: center;
    padding: 20px;
    padding-bottom: 20px;
    border: solid;
    left: 0;
    bottom: 0;
    height: 150px;
    overflow: hidden;
    margin-top: 5%;
    display: grid;
    grid-template-columns: 20% 33% 20%;
    grid-gap: 50px;
`
const Footer = () =>  {

        return (
            <>
                <Footerstyle>
                    <img id='grid-1'src={salten} alt="salten logo"  width="400"></img>
                    <h1 id="grid-2">
                    <p>Kontakt oss:  </p>
                    <p>© ØSTBØ AS   </p>
                    <p>Plassen 5, 8006 Bodø </p>
                    <p>Postadresse: Postboks 1447, 8038 Bodø </p>
                    <p>Telefon +47 75 50 09 00</p>
                    <p>Epost postmottak@ostbo.no</p>
                    <p>Org.nr 920 508 324</p>
                    <p>En del av SB-konsernet</p>
                    <br></br>
                    </h1>     
                    <h1 id='grid-3'>test

                    </h1>
                    <h1 id='grid-4'>test
                        
                    </h1>
                </Footerstyle>
            </>
        );
}


export default Footer
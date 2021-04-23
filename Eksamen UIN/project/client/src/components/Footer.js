import React from 'react'
import styled from 'styled-components'
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
    height: 100px;
    overflow: hidden;
    margin-top: 5%;
    display: grid;
`
const Footer = () =>  {

        return (
            <>
                <Footerstyle>
                    <h1>
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
                </Footerstyle>
            </>
        );
}


export default Footer
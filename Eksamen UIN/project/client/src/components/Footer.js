import React from 'react'
import styled from 'styled-components'
const footerStyle = styled.footer`
    background-color: "#93ba3d";
    font-Size: "20px";
    color: "white";
    border-Top: "1px solid #E7E7E7";
    text-Align: "center";
    padding: "20px";
    left: "0";
    bottom: "0";
    height: "75px";
    width: "100%";
    overflow: "hidden";
    margin-top: "5rem";
`
const Footer = ({children}) =>  {
    return (
        <>
            <footerStyle>{children}</footerStyle>
            <p></p>
        </>
    );
}


export default Footer
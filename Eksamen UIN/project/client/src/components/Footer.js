import React from 'react'
import styled from 'styled-components'
const Footerstyle = styled.footer`
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
            <Footerstyle>{children}</Footerstyle>
            <p></p>
        </>
    );
}


export default Footer
import React from 'react'

const footerStyle = {
    backgroundColor: "#93ba3d",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  };
  
  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };

const Footer = ({children}) =>  {
    return (
        <>
            <div style={phantomStyle}/>
            <div style={footerStyle}>{children}1235665767878</div>
            <p>Test footer 1..2..3</p>
        </>
    );
}


export default Footer
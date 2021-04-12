import React from 'react'

const Sidebar = (props) => {
    return (
        <section id="sidebar">
            <h1>Tjenester</h1>
            <h2>
                {props.children}
            </h2>
            
        </section>
    )
}

export default Sidebar

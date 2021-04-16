import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <section id="sidebar">
            <h1>{props.kat}</h1>
            {props.name.map(function(name, index){
                    return <Link to={props.lnk[index]} key={ index }>{name}<br /><br /></Link>;
                  })}
        </section>
    )
}

export default Sidebar
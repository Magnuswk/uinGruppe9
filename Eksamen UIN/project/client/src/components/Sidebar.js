import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <section id="sidebar">
            <h1>{props.kat}</h1>
            <ul>
            {props.name.map(function(name, index){
                    return <li> <Link to={props.lnk[index]} key={ index }>{name}<br /><br /></Link></li>;
                  })}
            </ul>
        </section>
    )
}
export default Sidebar
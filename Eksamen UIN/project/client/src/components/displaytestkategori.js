import React from 'react'
import { Link } from 'react-router-dom';

const Displaytestkategori = (props) => {
    console.log(props.name)
    return (
            <article>
                  {props.name.map(function(name, index){
                    return <li key={ name.slug }> <Link to={name.slug} >{name.tittel}<br /><br /></Link></li>;
                  })}
            </article>
        
    )
}

export default Displaytestkategori

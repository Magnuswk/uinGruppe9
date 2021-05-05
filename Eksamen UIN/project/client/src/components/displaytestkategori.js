import React from 'react'
import { Link } from 'react-router-dom';
// alle sider som er innen kategorien du trykker på testkategorisort
const Displaytestkategori = ({name}) => {
  // Component som displayer link til alle sider som blir sendt inn som prop
    return (
            <article>
                  {name.map(function(name, index){
                    return <li key={ name.slug }> <Link to={name.slug} >{name.tittel}<br /><br /></Link></li>;
                  })}
            </article>

    )
}

export default Displaytestkategori

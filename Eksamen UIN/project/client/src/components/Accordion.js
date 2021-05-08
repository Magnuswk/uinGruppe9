import React, { useRef } from 'react'
// viser innhold fra sanity delt opp i spørsmål og svar
const Accordion = ({sporsmal, svar}) => {
    //For å referere til svaret
    const style = useRef()
    const handleClick = () => {
        // Sjekk om svaret er vises
        if(style.current.style.display==='block'){
            //Ikke vis svar
            style.current.style.display='none'
        }else{
            //Vis svar
            style.current.style.display='block'
        }
    }
    return (
        <section id='accordion'>
            <button onClick={handleClick}>
                <p>
                    {sporsmal}
                </p>
            </button>
            <article ref={style} className='accordian'>
                <p>
                    {svar}
                </p>
            </article>
        </section>
    )
}

export default Accordion

import React, { useRef } from 'react'

const Accordion = ({sporsmal, svar}) => { 
    const style = useRef()
    const handleClick = () => {
        if(style.current.style.display==='block'){
            style.current.style.display='none'
        }else{
            style.current.style.display='block'
        }
    }
    return (
        <section>
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

import React from 'react'

const Loading = ({data}) => {
    return (
        <>
            {data === null ?<h1 id='loading'>Loading...</h1> : null}
            {data === 'ikke funnet'?
            <>
                <h1 id='error'>Denne siden finnes ikke!</h1>
                <img id="finnes-ikke" src="https://media1.tenor.com/images/a74df99c03852b2f99fa0e813807822f/tenor.gif?itemid=14884175" alt="finnes-ikke"/>
            </>
            : null}
        </>
    )
}

export default Loading

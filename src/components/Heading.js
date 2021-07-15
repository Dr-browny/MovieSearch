import React from 'react'
import styled from 'styled-components'

const HeadingDiv = styled.div`
    height: 5vh;
    color: White;
    background-color: #1C9DAE;
    

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1%;
    
`

const Heading = (props) => {
    return (
        <HeadingDiv>
            <h2>{props.Heading}</h2>
        </HeadingDiv>
    )
}

export default Heading

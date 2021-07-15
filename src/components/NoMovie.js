import React from 'react'
import styled from 'styled-components'

export const NoMovieDiv = styled.div`

    height: 85vh;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

`

const NoMovie = () => {

    return (
       <NoMovieDiv>
           <h1>No Movies Found....</h1>
       </NoMovieDiv>
            
        
    )
}

export default NoMovie

import React, { useState } from 'react'
import styled from 'styled-components'

export const SearchMovieDiv = styled.div`
    width: 100%;
    min-height: 15vh;
    padding: 2%;
    background-color: #1C9DAE;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & h1{
        color: White;
    }

    & form input{
        height: 3rem;
        width: 20rem;
        padding: 2%;
        outline: none;
        border: 3px solid lightpink;

        font-size: 1rem;

    }

    @media only screen and (max-width: 480px){

        flex-direction: column;
    }

   

`

const SearchMovie = (props) => {

    const[movieSearch, setMovieSearch] = useState('')

    const handlerOnSubmit = (e) =>{
        e.preventDefault()
        props.setMovieTitle(movieSearch)

    }
    return (
        <SearchMovieDiv>
            <h1>Movie Search</h1>
            <form onSubmit={handlerOnSubmit}>
                <input  type="text" placeholder='Search Movies....' value={movieSearch} 
                    onChange={(event)=>{
                        setMovieSearch(event.target.value)
                    }
                    }
                />
            </form>
        </SearchMovieDiv>
    )
}

export default SearchMovie

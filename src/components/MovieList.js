import React from 'react'
import styled from 'styled-components'
import NoMovie from './NoMovie'
import { SearchMovieDiv } from './SearchMovie'
import Heading from './Heading'
import SearchTemplate from './SearchTemplate'

export const MovieListDiv =  styled.div`

    

    min-height: 85vh;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: top;
    

    & .movie-div {
        margin: 1rem;
        height: 400px;
        width: 200px;
    }

    & .movie-div .movie-image-div {
        height: 300px;
        width: inherit;
        
    }
    & .movie-div .movie-paragraph-div {
        height: 100px;
        width: inherit;
        background-color: #1C9DAE;
        cursor: pointer;
    
    }



    & .movie-div p {
        color: white;
        text-align: center;
    }

    & img{
        width: 100%;
        height: inherit;
        object-fit: inherit;
        
    }

        @media only screen and (max-width: 480px){
        &{
            flex-wrap: nowrap;
            justify-content: start;
            align-items: center;
            overflow: auto;
        }
    }

`

const MovieList = (props) => {
    return ( ( props.movies.length === 0) ? <SearchTemplate /> :
    <>
        <Heading Heading={'Movies'}/>
        <MovieListDiv>
            {
                props.movies.map(movie =>(
                    <div className='movie-div'>
                        <div className='movie-image-div'>
                            <img src={movie.Poster} alt="movie" />
                        </div>
                        <div onClick={() => props.setFavourites(movie)} className='movie-paragraph-div'>                       
                            <p>{movie.Title}</p>
                            <p>{movie.Year}</p>
                            <p>Add To Favourites</p>
                        </div>
                   </div>
                ))
            }
            
        </MovieListDiv>
    </>
    )
}

export default MovieList

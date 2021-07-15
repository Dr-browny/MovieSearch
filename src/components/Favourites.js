import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'

export const FavouritesDiv = styled.div`

    
    min-height: 30vh;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: top;
    

    & .movie-div {
        margin: 1rem;
        height: 375px;
        width: 200px;
    }

    & .movie-div .movie-image-div {
        height: 300px;
        width: inherit;
        
    }
    & .movie-div .movie-paragraph-div {
        height: 75px;
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

const Favourites = (props) => {
    console.log(props.favourites)

    return ( props.favourites.length === 0 ? <></> :
        <>
            <Heading Heading={'Favourites'}/>
            <FavouritesDiv>
                {
                    props.favourites.map(favourite =>(
                    <>
                        <div className='movie-div'>
                            <div className='movie-image-div'>
                                <img src={favourite.Poster} alt="favourite-movie" />
                            </div>
                            <div  className='movie-paragraph-div'>                       
                                <p>{favourite.Title}</p>
                                <p>{favourite.Year}</p>
                            </div>
                        </div>
                    </>
                        
                    ))
                
                }
            </FavouritesDiv>
        </>
    )
}

export default Favourites

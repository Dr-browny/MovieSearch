import React, { useEffect, useState } from 'react'
import './App.css';
import MovieList from './components/MovieList';
import SearchMovie from './components/SearchMovie';
import Heading from './components/Heading';
import NoMovie, { NoMovieDiv } from './components/NoMovie';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchTemplate from './components/SearchTemplate';
import Favourites from './components/Favourites';

export const AppDiv = styled.div`

  min-height: 100vh;
  

`


function App() {
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])
  const [movieTitle, setMovieTitle] = useState('')
  
  const fetchApi = async (movieTitle) =>{
    const url = `http://www.omdbapi.com/?apikey=f29e7458&s=${movieTitle}&t=${movieTitle}`
  
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    data.Search ? setMovies(data.Search) : setMovies([]) 

    
  } 

  useEffect(()=>[
    fetchApi(movieTitle)
  ],[movieTitle])

  const addFavouritesMovie = (movie) =>{
    const newFavouriteMovie = [...favourites, movie]
    setFavourites(newFavouriteMovie)
  }

 
  return (

      <AppDiv>
        <SearchMovie movieTitle = {movieTitle} setMovieTitle= {setMovieTitle}/>
        <MovieList movies = {movies} setFavourites={addFavouritesMovie} />
        <Favourites favourites={favourites}/>
        
      
      </AppDiv>
    
  );
}

export default App;

import './App.css';
import React, {useState, createContext} from 'react';
import MovieList from './MovieList';

export const MovieContext = createContext();

export const MovieProvider=(props) => {
    const [movies,setMovies]= useState([{
        name : "Django unchained",
        time : "1800"
    },
    {
        name : "GodFather",
        time : "1974"
    },
    {
        name : "The Shawshank Redemption",
        time : "1990"
    }
]);
  console.log("Props: ",props.children)
  console.log("Movies in context: ", movies)  
    return (
    <MovieContext.Provider value ={[movies]}>
        {props.children}
    </MovieContext.Provider>
  );
}


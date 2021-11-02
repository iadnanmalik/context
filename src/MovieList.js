import './App.css';
import React, { useState, useContext }  from 'react';
import {MovieContext} from './MovieContext'

console.log("Outer")
export default function MovieList(){
  
    console.log("Here!")
  const [movies]= useContext(MovieContext)
    console.log("Here with movies", movies)
  return(
     movies.map((movie)=>{
        return(
        <>
        {movie.name}
        {movie.time}
        </>
    )
    }) 
    );
}


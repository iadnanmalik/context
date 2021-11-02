import React, { createContext, useState, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] =  useReducer(bookReducer, [])
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;
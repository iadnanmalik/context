import React from 'react'

export const bookReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, {title: action.payload.title, author: action.payload.author, id: action.payload.id}];
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id);
        default:
            return state
    }
}


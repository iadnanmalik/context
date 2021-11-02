import React, {useState} from 'react';
import UpdatedComponent from './withCounter';
function Hover({count,clickCount}) {
    
    return (
        <h1 onMouseOver={clickCount}>
             Hovered {count} times
        </h1>
            
    );
}

export default UpdatedComponent(Hover);
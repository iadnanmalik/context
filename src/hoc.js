import React, {useState} from 'react';
import UpdatedComponent from './withCounter';

function Hoc({count,clickCount}) {
    
    return (
            <button onClick={clickCount}>

             Clicked {count} times

            </button>
        );

}

export default UpdatedComponent(Hoc);

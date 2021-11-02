import React, {useState} from 'react';

const UpdatedComponent = (OriginalComponent) =>{
  
    
    function NewComponent(){
        const [count, setCount] = useState(0);

        const clickCount = ()=>{
            setCount((count) => count+1);
        }
        return <OriginalComponent count={count} clickCount={clickCount}/>
    }

    return NewComponent

}
export default UpdatedComponent
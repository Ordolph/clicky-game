import React from 'react';
import Board from './Board'

function Image(props){
    return (
            <img 
                className="imgBtn" 
                src={props.src} 
                alt={props.alt}  
                style= { { height: '300px' } }
                data-clicked={props.clicked} />
    );
}

export default Image;
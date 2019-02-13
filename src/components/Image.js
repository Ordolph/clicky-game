import React from 'react';


function Image(props){
    return (
        <button>

            <img className="imgBtn" src={props.src} alt={props.name}  style= { { height: '300px' } } />
        
        </button>
        
    );
}

export default Image;
import React from 'react';
import Image from './Image'

const shuffle = arr => {
    arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] -b[0])
    .map(a => a[1]);
};

const characters = [
    {
    name: 'Bugs Bunny',
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/220px-Bugs_Bunny.svg.png'
    }, 
    {
        name: 'Porky Pig',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Porky_Pig.svg/1200px-Porky_Pig.svg.png'
    },
    {
        name: 'Tasmanian Devil',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Taz-Looney_Tunes.svg/220px-Taz-Looney_Tunes.svg.png'
    },
    {
        name: 'Daffy Duck',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/1200px-Daffy_Duck.svg.png'
    },
    {
        name: 'Elmer Fudd',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/ElmerFudd.gif/220px-ElmerFudd.gif'
    },
    {
        name: 'Marvin The Martian',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Marvin_the_Martian.svg/1200px-Marvin_the_Martian.svg.png'
    },
    {
        name: 'Foghorn Leghorn',
        url: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png'
    },
    {
        name: 'Sylvester',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Sylvester_the_Cat.svg/1200px-Sylvester_the_Cat.svg.png'
    },
    {
        name: 'Tweety',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Tweety.svg/1200px-Tweety.svg.png'
    },
    {
        name: 'Yosemite Sam',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Yosemite_Sam.svg/1200px-Yosemite_Sam.svg.png'
    },
    {
        name: 'Wile E. Coyote',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Wile_E._Coyote.svg/90px-Wile_E._Coyote.svg.png'
    },
    {
        name: 'Roadrunner',
        url: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Roadrunner_looney_tunes.png'
    }

];

const createImages = arr => {
    return (
        characters.map(character => {
            return (<Image src={character.url} alt={character.name} /> );
        })
    )
};

function Board (){
    return (
        <div>
            {createImages(characters)}
        </div>
    );
}




export default Board;
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
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/220px-Bugs_Bunny.svg.png',
        clicked: false
    }, 
    {
        name: 'Porky Pig',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Porky_Pig.svg/1200px-Porky_Pig.svg.png',
        clicked: false
    },
    {
        name: 'Tasmanian Devil',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Taz-Looney_Tunes.svg/220px-Taz-Looney_Tunes.svg.png',
        clicked: false
    },
    {
        name: 'Daffy Duck',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/1200px-Daffy_Duck.svg.png',
        clicked: false
    },
    {
        name: 'Elmer Fudd',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/ElmerFudd.gif/220px-ElmerFudd.gif',
        clicked: false
    },
    {
        name: 'Marvin The Martian',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Marvin_the_Martian.svg/1200px-Marvin_the_Martian.svg.png',
        clicked: false
    },
    {
        name: 'Foghorn Leghorn',
        url: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png',
        clicked: false
    },
    {
        name: 'Sylvester',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Sylvester_the_Cat.svg/1200px-Sylvester_the_Cat.svg.png',
        clicked: false
    },
    {
        name: 'Tweety',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Tweety.svg/1200px-Tweety.svg.png',
        clicked: false
    },
    {
        name: 'Yosemite Sam',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Yosemite_Sam.svg/1200px-Yosemite_Sam.svg.png',
        clicked: false
    },
    {
        name: 'Wile E. Coyote',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Wile_E._Coyote.svg/90px-Wile_E._Coyote.svg.png',
        clicked: false
    },
    {
        name: 'Roadrunner',
        url: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Roadrunner_looney_tunes.png',
        clicked: false
    }

];

export default class Board extends React.Component {

        handleClick(event) {
            console.log('click');
            console.log(event.target.getAttribute('data-clicked'));

            if (event.target.getAttribute('data-clicked') === false) {
                console.log('it worked!')
            } 
        };

        createImages = arr => {
            return (
                characters.map((character, i) => {
                    return (
                        <button 
                            onClick={this.handleClick} 
                            key={i} data-id={i}>
                                <Image 
                                onClick={this.handleClick} 
                                src={character.url} 
                                alt={character.name}
                                clicked={character.clicked} />
                        </button>
                     );
                })
            )
        };

        render() { 
        return (
        <div>
            {this.createImages(characters)}
        </div> 
        )}
}




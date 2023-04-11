import React from 'react';
import CharacterComponent from "../character/characterComponent";

const CharactersComponent = ({characters}) => {
    return (
        <div className="characters">
            {
                characters.map(item =>(
                    <CharacterComponent
                        key = {item.id}
                        character = {item}
                    />))}
        </div>
    );
};

export default CharactersComponent;
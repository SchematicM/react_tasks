import React from 'react';
//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
const CharacterComponent = ({character}) => {
    return (
        <div className="character">
            <h2>{character.id} : {character.name}</h2>
            <div className="info">
                <img src={character.image} alt="character"/>
                <div className="description">
                    <p>Status:{character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterComponent;
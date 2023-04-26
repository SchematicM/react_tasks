import React, {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case "ADD_CAT":
            return {...state, cats: [...state.cats, action.payload]};
        case "ADD_DOG":
            return {...state, dogs: [...state.dogs, action.payload]};
        default:
            return state;
    }
}


function CatsAndDogs() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const handleAddCat = (e) => {
        e.preventDefault();
        const catName = e.target.elements.catName.value;
        dispatch({type: 'ADD_CAT', payload: {name: catName}});
        e.target.reset();
    };

    const handleAddDog = (e) => {
        e.preventDefault();
        const dogName = e.target.elements.dogName.value;
        dispatch({type: 'ADD_DOG', payload: {name: dogName}});
        e.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleAddCat}>
                <label htmlFor="catName">Cat name:</label>
                <input id="catName" type="text"/>
                <button type="submit">Add Cat</button>
            </form>
            <form onSubmit={handleAddDog}>
                <label htmlFor="dogName">Dog name:</label>
                <input id="dogName" type="text"/>
                <button type="submit">Add Dog</button>
            </form>
            <div>
                <h2>Cats:</h2>
                <ul>
                    {state.cats.map((cat) => (
                        <li key={cat.name}>{cat.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Dogs:</h2>
                <ul>
                    {state.dogs.map((dog) => (
                        <li key={dog.name}>{dog.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default CatsAndDogs;

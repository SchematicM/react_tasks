import {carService} from "../../services/car.service";

const Car = ({car,serCarForUpdate, setAllCars}) => {
    const {id, brand, price, year} = car;
    const deleteCar = async () =>{
        await carService.deleteById(car.id);
        setAllCars(prev => !prev);
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>serCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>DELETE</button>


        </div>
    );
};

export {Car};

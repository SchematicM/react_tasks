import React from 'react';
import image from './images/CatDog.jpg'

const HomePage = () => {
    return (
        <div>
            <h2> Home Task</h2>
            <ol>
                <li>
                    отримати пости та вивести їх використовуючи класові копмоненти
                </li>
                <li>
                    отримати коментарі та вивести їх використовуючи класові копмоненти
                </li>
                <li>
                    Використовуючи хук useReducer в якому початковый стейт буде cats: [], dogs:[]
                    Реалізвути збереження окремо нового кота, та окремо собаку (приклад на зображенні)
                    <img src={image} width={'90%'} alt ="mockup of task"/>
                </li>
                <li>
                    Advanced
                    реалізувати видалення для кожного при натисканні на кнопку delete
                </li>

            </ol>
        </div>
    );
};

export default HomePage;
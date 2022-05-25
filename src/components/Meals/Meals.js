import React from 'react';
import './Meals.css';

const Meals = (props) => {
    const { strMeal, strMealThumb, strCategory, strInstructions } = props.meal;

    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <h5>{strCategory}</h5>
            <p>{strInstructions.slice(0, 50)}</p>
        </div>
    );
};

export default Meals;
import { useEffect, useState } from "react";
import Meals from "../Meals/Meals";
import './Restaurent.css';

const Restaurent = () => {
    const [searchText, setsearchText] = useState('');
    const [meals, setmeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

        fetch(url)
            .then(r => r.json())
            .then(d => setmeals(d.meals))
    }, [searchText])
    const searchFood = e => {
        setsearchText(e.target.value);
    }

    return (
        <div>
            <h2>Search your food,What you want?</h2>
            <input onChange={searchFood} type="text" name="" id="" />
            <br />
            <h4>result: {meals.length}</h4>

            <div className="meal-container">
                {
                    meals.map(meal => <Meals

                        key={meal.idMeal}
                        meal={meal}
                    ></Meals>)
                }
            </div>

        </div>
    );
};

export default Restaurent;
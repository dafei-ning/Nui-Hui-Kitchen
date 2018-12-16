import React from 'react';
import './Dish.css';

import DishIngredient from './DishIngredient/DishIngredient';

const dish = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <DishIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className="Dish">
            <DishIngredient type="bread-top" />
            {transformedIngredients}
            <DishIngredient type="bread-bottom" />

        </div>
    );
};

export default dish;
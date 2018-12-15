import React from 'react';
import './Dish.css';

import DishIngredient from './DishIngredient/DishIngredient';

const dish = (props) => {
    return (
        <div className="Dish">
            <DishIngredient type="bread-top" />
            <DishIngredient type="bacon" />
            <DishIngredient type="salad" />
            <DishIngredient type="cheese" />
            <DishIngredient type="meat" />
            <DishIngredient type="bread-bottom" />

        </div>
    );
};

export default dish;
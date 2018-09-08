import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey+ i} type={igKey} />;
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el);
        },[]);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    /** Re-written my way :) Some Master updates */

    const myIngredients = [];
    Object.keys(props.ingredients).forEach((v,i)=>{
        let j = 0;
        while(j < props.ingredients[v]){
            myIngredients.push(<BurgerIngredient key={v+ j} type={v} />);
            j++;
        }
    });

    console.log(myIngredients);
    console.log(transformedIngredients);

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
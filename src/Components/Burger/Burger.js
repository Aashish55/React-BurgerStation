import React from 'react';
import './Burger.css'
import BurgerIngedient from './BurgerIngredients/BurgerIngredients'

const burger = () => {
    return (
        <div className='Burger'>
            <BurgerIngedient type='bread-top' />
            <BurgerIngedient type='salad' />
            <BurgerIngedient type='meat' />
            <BurgerIngedient type='bread-bottom' />
        </div>
    );
};


export default burger;
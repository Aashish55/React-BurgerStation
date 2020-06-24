import React from 'react';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(
        (igkey) => {
            return <li key={igkey}> <span> {igkey}</span>: {props.ingredients[igkey]} </li>
        }
    );
    return (
        <div>
            <h3>
                Your order
        </h3>
            <p>A delicious Burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
        </div>
    );
}

export default orderSummary;
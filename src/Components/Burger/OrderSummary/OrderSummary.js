import React from 'react';
import Button from '../../UI/Buttons/Button'

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
            <p>Total Price: <strong>$ {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button buttonType='Danger' clicked={props.purchaseCancelHandler}>CANCEL</Button>
            <Button buttonType='Success' clicked={props.purchaseContinueHandler}>CONTINUE</Button>
        </div>
    );
}

export default orderSummary;
import React, { Component } from 'react';
import Button from '../../UI/Buttons/Button'

class OrderSummary extends Component {

    componentUpdate(){
        console.log('[ordersummary] will updatte')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igkey) => {
                return <li key={igkey}> <span> {igkey}</span>: {this.props.ingredients[igkey]} </li>
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
                <p>Total Price: <strong>$ {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout ?</p>
                <Button buttonType='Danger' clicked={this.props.purchaseCancelHandler}>CANCEL</Button>
                <Button buttonType='Success' clicked={this.props.purchaseContinueHandler}>CONTINUE</Button>
            </div>
        );
    }

}

export default OrderSummary;
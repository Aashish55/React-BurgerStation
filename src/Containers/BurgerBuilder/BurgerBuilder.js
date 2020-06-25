import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const IngredientPrices = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 4,
        purchasable:false,
        purchasing: false
    }
    updatePurchaseState(ingredients){
       
        const sum =Object.keys(ingredients).map(igKey => {
           return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0})
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = IngredientPrices[type];
        const oldPrice=this.state.price;
        const newPrice = oldPrice + priceAddition;

        this.setState({price:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = IngredientPrices[type];
        const oldPrice=this.state.price;
        const newPrice = oldPrice - priceDeduction;

        this.setState({price:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler=()=>{
        alert('You Continue!!!');
    }

    render() {

        const disabledInfo={
            ...this.state.ingredients
        };
        for( let key in disabledInfo ){
            disabledInfo[key]= disabledInfo[key]<=0
        }
        return (
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                        purchaseCancelHandler={this.purchaseCancelHandler} 
                        purchaseContinueHandler={this.purchaseContinueHandler}
                        price={this.state.price}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.price}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}
                />
            </div>
        );
    }
}

export default BurgerBuilder;
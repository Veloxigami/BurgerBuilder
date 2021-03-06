import React from 'react';

import Auxi from '../../../hoc/auxi/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                 {props.ingredients[igKey]}
            </li>);
        });
    return(
        <Auxi>
            <h3>Your Order</h3>
            <p>As per your selection of ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <strong><p>Total Price: {props.price}</p></strong>
            <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxi>
    );
};

export default orderSummary;
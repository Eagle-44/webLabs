import React from "react";
import './CartTemplate.css';

const CartTemplate = (props) => {
    return(
        <div className="cartItem">
            <h5>Circus Name: {props.circus.name}</h5>
            <h5>Amount Places: {props.circus.amountOfPlaces}</h5>
            <button className='counter' onClick={()=>props.reducer(props.circus.id)}>-</button>
            <label>{props.circus.counter}</label>
            <button className='counter' onClick={()=>props.adder(props.circus.id)}>+</button>
            <label>{props.circus.counter}</label>
            <label>{props.circus.counter*props.circus.amountOfPlaces} Places</label>
            <button className='delete' onClick={()=>props.deleter(props.circus.id)}>delete</button>
        </div>
    );
}

export default CartTemplate;
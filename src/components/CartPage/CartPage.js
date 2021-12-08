import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import CartTemplate from "./CartTemplate/CartTemplate";
import {updateCounter, removeItem } from "../Redux/Actions"


const CartPage = () => {
    const dispatch = useDispatch();
    const cartCircus = useSelector(state => state.cart);
    

    function handleDeleteCart(id){
        dispatch(removeItem({id}))
    }

    function handleReduceCounter(id){
        let counter = -1;
        dispatch(updateCounter({id,counter}))
    }

    function handleAddCounter(id){
        let counter = 1;
        dispatch(updateCounter({id,counter}))
    }

    function TotalCount(){
        return cartCircus.reduce((total,circus) => {
            total += circus.amountOfPlaces*circus.counter;
            return total;
        }, 0);
    }

    function CircusContainer(props){
        let circus = props.circus;

        if(circus.lenght == 0){
            return(<div>Cart Page</div>);
        }else{
            return(
                <div>{
                    circus.map(((circus,keyid) => (
                        <div key={keyid}>
                            <CartTemplate
                                circus={circus}
                                adder={handleAddCounter.bind(circus.id)}
                                reducer={handleReduceCounter.bind(circus.id)}
                                deleter={handleDeleteCart.bind(circus.id)}
                            />
                        </div>)))
                    }
                </div>
                   
            
             );
        }
    }
    return(
        <div className="cartContainer">
            <CircusContainer circus={cartCircus}/>
            <div className = "total">Total:<TotalCount/> places</div>
        </div>
    );
}

export default CartPage;
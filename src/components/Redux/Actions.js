import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_COUNTER} from "./Actions-types.js";

export const addItem = ({id, name, amountOfPlaces, counter=1}) => {
    return {
        type: ADD_TO_CART,
        payload: {id, name, amountOfPlaces, counter}
    }
}

export function removeItem  (circus)  {
    return {
        type: REMOVE_FROM_CART,
        payload: circus
    }
}

export function updateCounter  ({id, counter})  {
    return {
        type: UPDATE_COUNTER,
        payload: {id, counter}
    }
}
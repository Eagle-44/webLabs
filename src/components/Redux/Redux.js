import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_COUNTER} from "./Actions-types";

export default function Reducer (state = [], action={}){
    switch(action.type) {
        case ADD_TO_CART:
            let existingIndex = findProductIndex(state, action.payload.id);
            if (existingIndex !== -1) {
                state[existingIndex].counter += 1;
                return state.concat([]);
            }
            return state.concat(action.payload);

        case UPDATE_COUNTER:
            let existingItemIndex = findProductIndex(state, action.payload.id);

            if (state[existingItemIndex].counter === 0 && action.payload.counter === -1) {
                return [...state.slice(0, existingItemIndex), ...state.slice(existingItemIndex+1)];
            }
            state[existingItemIndex].counter += action.payload.counter;
            return state.concat([]);

        case REMOVE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}
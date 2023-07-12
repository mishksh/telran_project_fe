const ADD_TO_CART = '[PRODUCT_ITEM] ADD_TO_CART';
const DELETE_CART = '[CART] DELETE_CART';
const INCREMENT_ACTION = '[CART] COUNT_MORE';
const DECREMENT_ACTION = '[CART] COUNT_LESS';

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const deleteCartAction = payload => ({ type: DELETE_CART, payload });
export const incrementAction = payload => ({ type: INCREMENT_ACTION, payload });
export const decrementAction = payload => ({ type: DECREMENT_ACTION, payload });


const checkProductInCart = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id)
    if (productInState) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, { ...payload, count: 1, fullPrice: payload.discont_price ? payload.discont_price : payload.price }]
    }
}


export const cartReducer = (state = [], action) => {
    if (action.type === ADD_TO_CART) {
        return checkProductInCart(state, action.payload)
    } else if (action.type === DELETE_CART) {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === INCREMENT_ACTION) {
        state.find(el => el.id === action.payload).count++
        return [...state]
    }
    else if (action.type === DECREMENT_ACTION) {
        const target_cart = state.find(el => el.id === action.payload);
        if (target_cart.count === 1) {
            return state.filter(el => el.id !== action.payload)
        }
        else {
            target_cart.count--
            return [...state]
        }
    }
    else {
        return state
    }
}
const LOAD_PRODUCT = 'LOAD_PRODUCT';

export const loadSingleProductAction = payload => ({ type: LOAD_PRODUCT, payload });


export const singleProductReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCT) {
        return action.payload
    }
    else { return state }

}


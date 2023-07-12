import { createStore, combineReducers, applyMiddleware } from 'redux'
import { productReducer } from './reducers/productReducer';
import thunk from 'redux-thunk'
import { categoryReducer } from './reducers/categoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { singleCategoryReducer } from './reducers/singleCategoryReducer';
import { cartReducer } from './reducers/cartReducer';



    const rootReducer = combineReducers({
        products: productReducer,
        categories: categoryReducer,
        singleProduct: singleProductReducer,
        singleCategory: singleCategoryReducer,
        cart: cartReducer
    
    });

    export const store = createStore(rootReducer, applyMiddleware(thunk));
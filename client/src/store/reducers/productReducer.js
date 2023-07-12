const LOAD_PRODUCTS = '[PRODUCTS_CONTAINER] LOAD_PRODUCTS';
const LOAD_ALL_SALES_PRODUCTS = '[SALES_CONTAINER] LOAD_ALL_SALES_PRODUCTS'
const FILTER_PRODUCTS_BY_PRICE = '[SORT_FORM_BY_SELECT] FILTER_PRODUCTS_BY_PRICE';
const SORT_PRODUCTS = '[SORT_FORM_BY_PRICE] SORT_PRODUCTS';
const TOGGLE_DISCOUNT = '[SORT_FORM_BY_CHECKBOX] TOGGLE_DISCOUNT'


export const loadAllProductsAction = payload => ({ type: LOAD_PRODUCTS, payload });
export const loadAllSalesProductsAction = payload => ({ type: LOAD_ALL_SALES_PRODUCTS, payload });
export const filterProductByPriceAction = payload => ({ type: FILTER_PRODUCTS_BY_PRICE, payload });
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload });
export const filterProductsByCheckbox = payload => ({ type: TOGGLE_DISCOUNT, payload });

let default_state = []

export const productReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
        default_state = action.payload.map(el => ({...el, hide_price:false}))
        return action.payload.map(el => ({...el, hide_price:false}))
    }
    else if (action.type === LOAD_ALL_SALES_PRODUCTS) {
        return action.payload.filter(el => el.discont_price > 0);
    }
    else if (action.type === FILTER_PRODUCTS_BY_PRICE) {
        const { min_value, max_value } = action.payload;
        return state.map(el => {
            const new_price = el.discont_price ? el.discont_price : el.price;
            if (new_price >= min_value && el.price <= max_value) {
                el.hide_price = false
            } else {
                el.hide_price = true
            }
            return el
        })
    }
    else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 'title') {
            state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]));
        } else if (action.payload === 'price') {
            state.sort((a, b) => a[action.payload] - b[action.payload]);
        } else if (action.payload === 'titleZ') {
            state.sort((a, b) => b['title'].localeCompare(a['title']));
        } else if (action.payload === 'priceLess') {
            state.sort((a, b) => {
                const newPriceA = a['discont_price'] || a['price'];
                const newPriceB = b['discont_price'] || b['price'];
                return newPriceB - newPriceA;
            });
        }
        else if (action.payload === 'default') {

            return [...default_state]
        }
        return [...state];
    }
    else if (action.type === TOGGLE_DISCOUNT) {
        if (action.payload) {
            return state.map(el => {
                if (el.discont_price) {
                    return {
                        ...el,
                        hide_sale: true
                    };
                } else {
                    return {
                        ...el,
                        hide_sale: false
                    };
                }
            });
        } else {
            return state.map(el => {
                return {
                    ...el,
                    hide_sale: true
                };
            });
        }
    }
    else {return state}
}
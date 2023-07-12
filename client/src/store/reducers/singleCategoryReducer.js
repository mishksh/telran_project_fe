const LOAD_CATEGORY = 'LOAD_CATEGORY';
const FILTER_PRODUCTS_BY_PRICE_CATEGORY = 'FILTER_PRODUCTS_BY_PRICE_CATEGORY';
const SORT_PRODUCTS_CATEGORY = 'SORT_PRODUCTS_CATEGORY';
const TOGGLE_DISCOUNT_CATEGORY = 'TOGGLE_DISCOUNT_CATEGORY'

export const loadSingleCategoryAction = payload => ({ type: LOAD_CATEGORY, payload });
export const filterProductByPriceCategoryAction = payload => ({ type: FILTER_PRODUCTS_BY_PRICE_CATEGORY, payload });
export const sortProductsCategoryAction = payload => ({ type: SORT_PRODUCTS_CATEGORY, payload });
export const filterProductsCategoryByCheckbox = payload => ({ type: TOGGLE_DISCOUNT_CATEGORY, payload });


let default_state = []

export const singleCategoryReducer = (state = [], action) => {
    if (action.type === LOAD_CATEGORY) {
        default_state = action.payload.map(el => ({ ...el, hide_price: false }))

        return action.payload.map(el => ({ ...el, hide_price: false }))

    } else if (action.type === SORT_PRODUCTS_CATEGORY) {
        if (action.payload === 'default') {
            return [...default_state];
        }
        else if (action.payload === 'title') {
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

        return [...state];
    }
    else if (action.type === FILTER_PRODUCTS_BY_PRICE_CATEGORY) {
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

    else if (action.type === TOGGLE_DISCOUNT_CATEGORY) {
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
    else { return state }
}



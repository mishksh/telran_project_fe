const LOAD_CATEGORIES = 'LOAD_CATEGORIES';


export const loadAllCategoriesAction = payload => ({ type: LOAD_CATEGORIES, payload })


export const categoryReducer = (state = [], action) => {
    if (action.type === LOAD_CATEGORIES) {
        return action.payload
    }
    else { return state }
}
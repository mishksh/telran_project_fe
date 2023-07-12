import { loadAllProductsAction, loadAllSalesProductsAction } from './../store/reducers/productReducer'
import { loadSingleProductAction } from '../store/reducers/singleProductReducer'


export const getProducts = dispatch => {
    fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => {
            const new_json = json.map(el => ({ ...el, hide_price: false, hide_sale: true }))
            dispatch(loadAllProductsAction(new_json))
        })
}

export const getSingleProduct = id => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json[0])))
    }

}

export const getAllSaleProducts = dispatch => {
    fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllSalesProductsAction(json)))
}


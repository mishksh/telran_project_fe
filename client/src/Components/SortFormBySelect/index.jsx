import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { sortProductsAction } from '../../store/reducers/productReducer';



export default function SortFormBySelect() {

    const dispatch = useDispatch();

    const sort = event => dispatch(sortProductsAction(event.target.value));

    return (
        <div className={s.sort_form}>
            <p id={s.sort_title}>Sorted</p>
            <select id={s.sorted} onInput={sort}>
                <option value='default'>By default</option>
                <option value='price'>Price low to high</option>
                <option value='price_desc'>Price high to low</option>
                <option value='title'>Name A to Z</option>
                <option value='title_desc'>Name Z to A</option>
            </select>
        </div>
    );
};


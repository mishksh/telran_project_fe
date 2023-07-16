import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { filterProductsCategoryByCheckbox } from '../../store/reducers/singleCategoryReducer';



export default function SortFormByCheckBoxCategory() {

    const dispatch = useDispatch();

    const toggle_checkbox = event => dispatch(filterProductsCategoryByCheckbox(event.target.checked));

    return (
        <form>
            <label className={s.discount_form}>
                <span>Discounted items</span>
                <input name="discount" type="checkbox" onChange={toggle_checkbox} />
            </label>
        </form>
    );
};
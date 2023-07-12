import React from 'react'
import dwarf from '../../media/dwarf.png'
import s from './index.module.css'
import { useForm } from 'react-hook-form'
import { discountRequest } from '../../async_actions/sale_req'



export default function DiscountContainer() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur'
    });

    const submit = (data) => {
        discountRequest(data, reset);
        reset();
    };

    const phoneRegexp = /^(\+)?(\d{1,3})?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    const phoneRegister = register('phone', {
        required: '*Phone number is a required field',
        pattern: {
            value: phoneRegexp,
            message: '*Your phone number should be valid'
        }
    });
    
    return (
        <div className={s.discount_container}>
            <img src={dwarf} title='dwarf' />
            <div>
                <p id={s.discount_title}>5% off</p>
                <p id={s.discount}>on the first order</p>
                <form onSubmit={handleSubmit(submit)} className={s.form}>
                    <input type='dropdown' placeholder='+49' name='phoneNumber' {...phoneRegister} />
                    {errors.phone && <p id={s.message_error}>{errors.phone?.message}</p>}
                    <button className={s.discount_btn}>Get discount</button>
                </form>
            </div>
        </div>
    )
}


import React from 'react'
import s from './index.module.css'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { orderRequest} from '../../async_actions/order_req'


export default function OrderContainer() {

  const cart_state = useSelector(state => state.cart);

  const total = (cart_state.reduce((acc, { fullPrice, count }) => acc + fullPrice * count, 0)).toFixed(2);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onBlur'
  });

  const submit = (data) => {
    const requestData = {
      id: Date.now(),
      phoneNumber: data.phone
    };

    orderRequest(requestData)
      .then(() => {
        reset();
      });
    reset();
  };

  const phoneRegexp = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

  const phoneRegister = register('phone', {
    required: '*Phone number is a required field',
    pattern: {
      value: phoneRegexp,
      message: '*Your phone number should be valid'
    }
  });

  return (
    <div className={s.order_container}>
      <p id={s.title}>Order details</p>
      <div className={s.totalby}>
        <p id={s.total}>Total</p>
        <p id={s.sum}>{total}<small className={s.currency}>$</small></p>
      </div>

      <form onSubmit={handleSubmit(submit)} className={s.form}>
        <input type='text' placeholder='Phone number' name='phone' {...phoneRegister} />
        {errors.phone && <p id={s.message_error}>{errors.phone?.message}</p>}
        <button>Order</button>
      </form>
    </div>
  )
}

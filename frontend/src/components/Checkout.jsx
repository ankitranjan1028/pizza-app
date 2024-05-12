import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Loader from './Loader';
import Success from './Success';
import Error from './Error';


const Checkout = ({subTotal}) => {
    const orderState = useSelector(state=>state.placeOrderReducer)
    const {loading, error, success} = orderState
    const dispatch = useDispatch()
    const tokenHandler= (token)=>{
        dispatch(placeOrder(token, subTotal))
        console.log(token);
    }
  return (
   <>
    {loading && (<Loader/>)}
    {error && (<Error error='something went wrong'/>)}
   
    {success && (<Success success='Order placed successfully😁'/>)}

    
    <StripeCheckout
    amount={subTotal * 100}
    shippingAddress 
    token={tokenHandler}
    stripeKey='pk_test_51NDUbkSIYj4EHowkVyqyaz4vnNfInkLcnYRJ7SulMX36qFHTIrc8YoCTbUM29SUIgLmUcYxbJuluIKU5MllX1eMA0079WAwuwl'
    currency='INR'
    >
    <Button>Pay Now</Button>
    </StripeCheckout></>
  )
}

export default Checkout

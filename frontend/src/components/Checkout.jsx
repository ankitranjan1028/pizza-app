import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Loader from './Loader';
import Success from './Success';
import Error from './Error';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Checkout = ({subTotal}) => {
    const orderState = useSelector(state=>state.placeOrderReducer)
    const {loading, error, success} = orderState
    const dispatch = useDispatch()
    const tokenHandler= (token)=>{
        dispatch(placeOrder(token, subTotal))
        console.log(token);
    }
    const history=useHistory();
    if(loading===false&&success===true){
      localStorage.removeItem("cartItems")
      setTimeout(()=>{
        history.push("/orders")
      },5000);
    }
    const cartItems=JSON.parse(localStorage.getItem("cartItems"))
    console.log(cartItems)
  return (
   <>
    {loading && (<Loader/>)}
    {error && (<Error error='something went wrong'/>)}
   
    {success && (<Success success='Order placed successfully😁'/>)}

    
    {cartItems&&cartItems.length>0&&
    <StripeCheckout
    amount={subTotal * 100}
    shippingAddress 
    token={tokenHandler}
    stripeKey='pk_test_51NDUbkSIYj4EHowkVyqyaz4vnNfInkLcnYRJ7SulMX36qFHTIrc8YoCTbUM29SUIgLmUcYxbJuluIKU5MllX1eMA0079WAwuwl'
    currency='INR'
    >
    <Button>Pay Now</Button>
    </StripeCheckout>}
    </>
  )
}

export default Checkout

import axios from "axios"

export const placeOrder = (token, subTotal)=> async (dispatch, getState)=>{
    dispatch({type:'PLACE_ORDER_REQUEST'});
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try{
        const res = await axios.post(process.env.REACT_APP_BACKEND_URL+'/orders/placeorder',{token, subTotal, currentUser, cartItems,})
        dispatch({type:'PLACE_ORDER_SUCCESS'})
        console.log(res)
    }
    catch(error){
        dispatch({type:'PLACE_ORDER_FAIL'})
        console.log(error);
    }
}


export const getUserOrders =()=>async (dispatch, getState) =>{
    const currentUser = getState().loginUserReducer.currentUser
    dispatch({
        type:'USER_ORDER_REQUEST'
    })
    try{
        const response = await axios.post(process.env.REACT_APP_BACKEND_URL+'/orders/getuserorder',{userid:currentUser._id})
        console.log(response)
        dispatch({type:'USER_ORDER_SUCCESS', payload: response.data})

    }
    catch(error){
        dispatch({type:'USER_ORDER_FAIL', payload: error})
    }
}

export const getAllOrders =()=>async (dispatch, getState) =>{
    //const currentUser = getState().loginUserReducer.currentUser
    dispatch({
        type:'ALL_ORDER_REQUEST'
    })

    try{
        const response = await axios.get(process.env.REACT_APP_BACKEND_URL+'/orders/alluserorder')
        //console.log(response)
        dispatch({type:'ALL_ORDER_SUCCESS', payload: response.data})
    }
    catch(error){
        dispatch({type:'ALL_ORDER_FAIL', payload: error})
    }
}


export const deliverOrder =(orderid)=>async (dispatch, getState) =>{
    //const currentUser = getState().loginUserReducer.currentUser
    dispatch({
        type:'GET_ALL_ORDER_REQUEST'
    })
    try{
        await axios.post(process.env.REACT_APP_BACKEND_URL+'/orders/deliverorder',{orderid}) 
        alert("Delivered Successfully😍")
        //console.log(response)
        const orders = await axios.get('/api/orders/alluserorder')
        dispatch({type:'GET_ALL_ORDER_SUCCESS', payload: orders.data})
        window.location.href='/admin/orderlist'

    }
    catch(error){
        dispatch({type:'GET_ALL_ORDER_FAIL', payload: error})
    }
}

import axios from 'axios';

//Data
const initialState = {
    user: {},
    cart: [[],[]],
    product: [],
    // total: {}
}

//Types
const GET_USER_INFO = 'GET_USER_INFO'
const GET_CART = 'GET_CART'
const GET_PRODUCT = 'GET_PRODUCT'
const DECREMENT_CART = 'DECREMENT_CART'
const INCREMENT_CART = 'INCREMENT_CART'
const GET_CART_TOTAL = 'GET_CART_TOTAL'


//Action Builder
export function getUserInfo() {

    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })

    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getProduct(product){

    let productData = axios.get('/api/product/' + product).then(res => {
        return res.data
    })

    return {
        type: GET_PRODUCT,
        payload: productData
    }
}

export function getCart(user){
    
    let itemData = axios.get(`/api/cart/${user}`)
    let totalData = axios.get(`/api/cartTotal/${user}`)
    let cartData = axios.all([itemData, totalData]).then(res=>{
        console.log(res);
        return [res[0].data, res[1].data]
    })

    return {
        type: GET_CART,
        payload: cartData
    }
}

export function getCartTotal(user){
    let totalData = axios.get(`/api/cartTotal/${user}`).then(res=>{
        return res.data
    })

    return {
        type: GET_CART_TOTAL,
        payload: totalData
    }
}

export function incrementCart(customer,product,quantity){
    console.log(quantity);
    let inc=Number(quantity)+1;
    let incData = axios.put(`/api/cart/${customer}/${product}/${inc}`).then(res=>{
        console.log(res.data)
        return res.data
    })

    return {
        type: INCREMENT_CART,
        payload: inc
    }
}

export function decrementCart(customer,product,quantity){
    let dec=Number(quantity)-1;
    let decData = axios.put(`/api/cart/${customer}/${product}/${dec}`).then(res=>{
        return res.data
    })

    return {
        type: DECREMENT_CART,
        payload: dec
    }
}

//Switch
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_CART + '_FULFILLED':
            return Object.assign({}, state, { cart:action.payload})
        case GET_PRODUCT + '_FULFILLED':
            return Object.assign({}, state, { product:action.payload})
        case INCREMENT_CART + '_FULFILLED':
            return Object.assign({}, state, { cart:action.payload})
        case DECREMENT_CART + '_FULFILLED':
            return Object.assign({}, state, {cart:action.payload})
        case GET_CART_TOTAL + '_FULFILLED':
            return Object.assign({}, state, {total:action.payload})
        default:
            return state
    }
}
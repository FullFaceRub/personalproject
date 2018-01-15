import axios from 'axios';

//Data
const initialState = {
    user: {},
    cart: [],
    product: []
}

//Types
const GET_USER_INFO = 'GET_USER_INFO'
const GET_CART = 'GET_CART'
const GET_PRODUCT = 'GET_PRODUCT'


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
    
    let cartData = axios.get(`/api/cart/${user}`).then(res=>{
        return res.data;
    })

    return {
        type: GET_CART,
        payload: cartData
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
        default:
            return state
    }
}
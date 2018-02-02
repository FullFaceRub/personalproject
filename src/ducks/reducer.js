import axios from 'axios';

//Data
const initialState = {
    user: {},
    cart: [[], []],
    product: [],
    search: [],
    redirect: '/',
    slide: false
}

//Types
const GET_USER_INFO = 'GET_USER_INFO'
const GET_CART = 'GET_CART'
const GET_PRODUCT = 'GET_PRODUCT'
const DECREMENT_CART = 'DECREMENT_CART'
const INCREMENT_CART = 'INCREMENT_CART'
const GET_SEARCH = 'GET_SEARCH'
const GET_REDIRECT = 'GET_REDIRECT'
const MOB_SLIDE = 'MOB_SLIDE'


//Action Builder
export function mobSlide() {

    return {
        type: MOB_SLIDE
    }
}

export function getRedirect(url) {
    let redirectData = url

    return {
        type: GET_REDIRECT,
        payload: redirectData
    }
}

export function getUserInfo() {

    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })

    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getProduct(product) {

    let productData = axios.get('/api/product/' + product).then(res => {
        return res.data
    })

    return {
        type: GET_PRODUCT,
        payload: productData
    }
}

export function getCart(user) {

    let itemData = axios.get(`/api/cart/${user}`)
    let totalData = axios.get(`/api/cartTotal/${user}`)
    let cartData = axios.all([itemData, totalData]).then(res => {
        return [res[0].data, res[1].data]
    })

    return {
        type: GET_CART,
        payload: cartData
    }
}

export function incrementCart(customer, product, quantity) {
    let inc = Number(quantity) + 1;
    let incData = axios.put(`/api/cartquantity/${customer}/${product}/${inc}`).then(res => {
        let newCart = [];
        newCart.push(res.data.cart, res.data.total)
        return newCart
    })

    return {
        type: INCREMENT_CART,
        payload: incData
    }
}

export function decrementCart(customer, product, quantity) {
    let dec = Number(quantity) - 1;
    let decData;
    if (dec<1){
            axios.delete(`/api/deletecartitem/${customer}/${product}`).then(res=> {
                let newCart = [];
                newCart.push(res.data.cart, res.data.total)
                return newCart;
        })}
    decData = axios.put(`/api/cartquantity/${customer}/${product}/${dec}`).then(res => {
        let newCart = [];
        newCart.push(res.data.cart, res.data.total)
        return newCart
        })

    return {
        type: DECREMENT_CART,
        payload: decData
    }
}

export function getSearch(query) {
    let searchData = axios.get('/api/products/search/' + query).then(res => {
        return res.data
    })

    return {
        type: GET_SEARCH,
        payload: searchData
    }
}

//Switch
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_CART + '_FULFILLED':
            return Object.assign({}, state, { cart: action.payload })
        case GET_PRODUCT + '_FULFILLED':
            return Object.assign({}, state, { product: action.payload })
        case INCREMENT_CART + '_FULFILLED':
            return Object.assign({}, state, { cart: action.payload })
        case DECREMENT_CART + '_FULFILLED':
            return Object.assign({}, state, { cart: action.payload })
        case GET_SEARCH + '_FULFILLED':
            return Object.assign({}, state, { search: action.payload })
        case GET_REDIRECT:
            return Object.assign({}, state, { redirect: action.payload })
        case MOB_SLIDE:
            return Object.assign({}, state, { slide: !state.slide })
        default:
            return state
    }
}
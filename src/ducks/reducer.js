import axios from 'axios';

//Data
const initialState = {
    user: {}
}

//Types
const GET_USER_INFO = 'GET_USER_INFO'


//Action Builder
export function getUserInfo() {

    let userData = axios.get('/auth/me').then(res => {
        console.log(res);
        return res.data;
    })

    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

//Switch
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        default:
            return state
    }
}
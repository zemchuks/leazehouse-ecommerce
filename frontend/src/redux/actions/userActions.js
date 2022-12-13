import * as types from '../types'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: types.USER_LOGIN_REQUEST})
        const config = { headers: { 'Content-Type': 'application/json'}}

        const { data } = await axios.post('/api/users/login', { email, password}, config)
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: data})

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (err) {
         dispatch({
            type: types.USER_LOGIN_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    dispatch({ type: types.USER_LOGOUT })
}

export const register = (name, email, password) => async (dispatch) => { 
    try {
        dispatch({ type: types.USER_REGISTER_REQUEST})
        const config = { headers: { 'Content-Type': 'application/json'}}

        const { data } = await axios.post('/api/users', {name, email, password}, config)
        
        dispatch({ type: types.USER_REGISTER_SUCCESS, payload: data})
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: data})

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (err) {
         dispatch({
            type: types.USER_REGISTER_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => { 
    try {
        dispatch({ type: types.USER_DETAILS_REQUEST})
        const { userLogin: { userInfo }} = getState()
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}`}}

        const { data } = await axios.get(`/api/users/${id}`, config)
        
        dispatch({ type: types.USER_DETAILS_SUCCESS, payload: data})

    } catch (err) {
         dispatch({
            type: types.USER_DETAILS_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}
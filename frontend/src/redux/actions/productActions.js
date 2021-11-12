import axios from 'axios'
import * as types from '../types'

// Get Products
export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')

        dispatch({
            type: types.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: types.PRODUCT_LIST_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

// Get single Product
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: types.PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: types.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: types.PRODUCT_DETAILS_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}
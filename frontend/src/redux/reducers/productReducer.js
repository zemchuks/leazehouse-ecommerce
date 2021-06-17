import * as types from '../types'

const initialState = {
    products: [],
    error: null,
    loading: false
}

export const productListReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case types.PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case types.PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
       
        default:
            return state;
    }
}

const initialState2 = {
    product: { rewiews: [] },
    error: null,
    loading: false
}
export const productDetailsReducer = (state = initialState2, action) => {
    switch(action.type) {
        case types.PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case types.PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case types.PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
       
        default:
            return state;
    }
}
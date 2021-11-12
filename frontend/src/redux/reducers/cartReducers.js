import * as types from "../types"

const initialState = {
  cartItems: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD_ITEM:
      // payload
      const item = action.payload

      // check if item already exist in cart,
      const existItem = state.cartItems.find((x) => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    default:
      return state
  }
}

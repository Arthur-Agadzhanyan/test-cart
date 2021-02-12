import { ADD_ITEM,REMOVE_ITEM,CLEAR_CART } from "./constants"

export const addItem = (id)=>{
    return {
        type: ADD_ITEM,
        id
    }
}

export const removeItem = (id)=>{
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const clearCart = ()=>{
    return{
        type: CLEAR_CART
    }
}
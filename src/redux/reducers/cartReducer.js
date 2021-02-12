import { ADD_ITEM,REMOVE_ITEM,CLEAR_CART } from "../constants"

let initialState = {
    cart: [
        { id: 1, quantity: 0, img: 'product.png', title: 'Best-in 10 British Big Eggs', price: 1.59, priceChanged: null, offer: null, totalPrice: 0 },
        { id: 2, quantity: 0, img: 'product.png', title: 'Best-in 10 British Big Eggs', price: 1.4, priceChanged: 1.59, offer: null, totalPrice: 0 },
        { id: 3, quantity: 0, img: 'product.png', title: 'Best-in 10 British Big Eggs', price: 1.59, priceChanged: null, offer: 20, totalPrice: 0 }
    ],
    totalPrice: 0,
    totalQuantity: 0
}

if(localStorage.getItem('cart')){
    initialState = JSON.parse(localStorage.getItem('cart'))
}

const getTotalPrice = (arr) => arr.reduce((total, item) => total + item.totalPrice, 0)
const getTotalQuantity = (arr) => arr.reduce((total, item) => total + item.quantity, 0)

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {

            const newCart = state.cart.map((item) => {
                const newQuantity = item.quantity + 1
                return action.id === item.id
                    ?
                        {
                            ...item,
                            quantity: newQuantity,
                            totalPrice: newQuantity * item.price
                        }
                    
                    : item
            })

            return {             
                cart: newCart,
            totalQuantity: getTotalQuantity(newCart),
            totalPrice: getTotalPrice(newCart),
            }
        }
        case REMOVE_ITEM:{

            const newCart = state.cart.map((item) => {
                const newQuantity = item.quantity - 1
                return action.id === item.id
                    ?
                        {
                            ...item,
                            quantity: newQuantity,
                            totalPrice: newQuantity* item.price
                        }
                    
                    : item
            })

            return {             
                cart: newCart,
                totalQuantity: getTotalQuantity(newCart),
                totalPrice: getTotalPrice(newCart),
            }
        }

        case CLEAR_CART:{
            return {
                cart: [
                    { id: 1, quantity: 0, img: 'product.png', title: 'Best-in 10 British Big Eggs', price: 1.59, priceChanged: null, offer: null, totalPrice: 0 },
                    { id: 2, quantity: 0, img: 'product.png', title: 'Best-in 10 British Big Eggs', price: 1.4, priceChanged: 1.59, offer: null, totalPrice: 0 },
                    { id: 3, quantity: 0, img: 'product.png', title: 'Best-in 10 British Big Eggs', price: 1.59, priceChanged: null, offer: 20, totalPrice: 0 }
                ],
                totalPrice: 0,
                totalQuantity: 0
            }
        }
            
        default:
            return state
    }
}
import { AppStore } from "../../interfaces/app-store"


export const selectCart = (state:AppStore)=>{
    return state.cart
} 

export const selectCartCount = (state:AppStore)=>{
    return state.cart.length
} 
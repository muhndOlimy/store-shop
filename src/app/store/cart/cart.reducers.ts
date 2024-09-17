import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "./cart.actions";
import { Product } from "../../interfaces/products.interfaces";

const intialState:Product[] = [];

export const cartReducer = createReducer(
    intialState,
    on(addToCart  , (state , product)=>{
        return [...state , product]
    }),
    on(removeFromCart , (state , product)=>{
        const index = state.findIndex(elem => elem.id === product.id);
        let newState = [...state].splice(index, 1);
        return [...newState , product]
    })
)
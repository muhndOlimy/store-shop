import { createReducer, on } from "@ngrx/store";
import { ProductData } from "../../interfaces/products.interfaces";
import { loadProductsFailure, loadProductsSuccess } from "./products.actions";

const intialState:any = {
    products:[],
    total:0,
    limit:0,
    skip:0
};

export const productDataReducer = createReducer(
    intialState,
    on(loadProductsSuccess , (state, {products , total , skip , limit}:ProductData)=>({
        ...state,
        products,
        total,
        skip,
        limit
    })),
    on(loadProductsFailure, (state) => state)
)
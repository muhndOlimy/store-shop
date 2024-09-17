import { createAction, props } from "@ngrx/store";
import { Product } from "../../interfaces/products.interfaces";

export const addToCart = createAction('[Item] Add to Cart' , props<Product>());
export const removeFromCart = createAction('[Item] Remove from Cart', props<Product>());
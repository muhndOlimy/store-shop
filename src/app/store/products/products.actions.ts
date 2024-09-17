import { createAction, props } from "@ngrx/store";
import { ProductData } from "../../interfaces/products.interfaces";

export const loadProducts = createAction('[Products] Load Products', props<{skip:number , limit:number}>());
export const loadProductsSuccess = createAction('[Products] Load Products Success' ,props<ProductData>());
export const loadProductsFailure = createAction('[Products] Load Products Failure', props<{error:unknown}>());

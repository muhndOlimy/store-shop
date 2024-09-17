import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsFetchingService } from "../../services/products.fetching.service";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.actions";
import { catchError, map , of, switchMap } from "rxjs";

@Injectable()
export class ProductsEffects{

    private _cachedIntervalByMin = 15;
    private _actions = inject(Actions);
    private _productsService = inject(ProductsFetchingService);

    fetchProducts = createEffect(() =>
        this._actions.pipe(
            ofType(loadProducts),
            switchMap(({skip , limit}) => {
                const isProductsCached = localStorage.getItem(JSON.stringify({skip , limit}));
                const cachedProducts = isProductsCached ? JSON.parse(isProductsCached) : null;
                if(cachedProducts && cachedProducts.timestamp >= Date.now()){
                    return of(loadProductsSuccess(cachedProducts))
                }
                return this._productsService.getProducts(skip,limit).pipe(
                    map((productsData)=>{
                        localStorage.setItem(JSON.stringify({skip , limit}), JSON.stringify({...productsData , timestamp:(Date.now() + (this._cachedIntervalByMin*60*1000))}));
                        return loadProductsSuccess(productsData)
                    }),
                    catchError((error)=> of(loadProductsFailure({error})))
                )
            })
        )
    )
}
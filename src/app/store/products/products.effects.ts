import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsFetchingService } from "../../services/products.fetching.service";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./products.actions";
import { catchError, debounce, debounceTime, map , of, switchMap } from "rxjs";

@Injectable()
export class ProductsEffects{

    private _cachedIntervalByMin = 15;
    private _actions = inject(Actions);
    private _productsService = inject(ProductsFetchingService);

    fetchProducts = createEffect(() =>
        this._actions.pipe(
            ofType(loadProducts),
            switchMap(({skip , limit, query}) => {
                const canCache = query === '';
                const cacheKey = localStorage.getItem(JSON.stringify({skip , limit}));
                const cachedProducts = cacheKey ? JSON.parse(cacheKey) : null;
                if(canCache && cachedProducts && cachedProducts.timestamp >= Date.now()){
                    return of(loadProductsSuccess(cachedProducts))
                }
                return this._productsService.getProducts(skip,limit,query).pipe(
                    debounceTime(5000),
                    map((productsData)=>{
                        if(canCache){
                            localStorage.setItem(JSON.stringify({skip , limit}), JSON.stringify({...productsData , timestamp:(Date.now() + (this._cachedIntervalByMin*60*1000))}));
                        }
                        return loadProductsSuccess(productsData)
                    }),
                    catchError((error)=> of(loadProductsFailure({error})))
                )
            })
        )
    )
}
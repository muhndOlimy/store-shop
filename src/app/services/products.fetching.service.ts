import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Product, ProductData } from '../interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchingService {

  private _http = inject(HttpClient);


  getProducts(skip = 0 , limit = 20):Observable<ProductData>{
    return this._http.get<ProductData>(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  }

  getProductsById(id:number):Observable<Product>{
    return this._http.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}

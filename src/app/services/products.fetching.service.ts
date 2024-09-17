import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductData } from '../interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchingService {

  private _http = inject(HttpClient);


  getProducts(skip:number, limit:number , query:string):Observable<ProductData>{
    return this._http.get<ProductData>(`https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${query}`);
  }

  getProductsById(id:number):Observable<Product>{
    return this._http.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}

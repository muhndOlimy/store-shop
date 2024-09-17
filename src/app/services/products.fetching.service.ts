import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductData } from '../interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchingService {

  private _http = inject(HttpClient);


  getProducts(skip:number, limit:number):Observable<ProductData>{
    return this._http.get<ProductData>(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  }

  getProductsById(id:number):Observable<Product>{
    return this._http.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}

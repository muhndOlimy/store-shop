import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchingService {

  private _http = inject(HttpClient);


  getProducts():Observable<Product[]>{
    return this._http.get<Product[]>('https://dummyjson.com/products?limit=20');
  }

  getProductsById(id:number):Observable<Product>{
    return this._http.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}

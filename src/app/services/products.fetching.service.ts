import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsFetchingService {

  private _http = inject(HttpClient);


  getProducts():Observable<any>{
    return this._http.get<any>('https://dummyjson.com/products?limit=20');
  }
}

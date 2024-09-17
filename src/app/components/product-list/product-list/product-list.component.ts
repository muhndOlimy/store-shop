import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { ProductData } from '../../../interfaces/products.interfaces';
import { Store } from '@ngrx/store';
import { selectProductData } from '../../../store/products/products.selectors';
import { loadProducts } from '../../../store/products/products.actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,PaginatorModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productsData!:ProductData | null;
  private _router = inject(Router);
  private _store = inject(Store);

  ngOnInit(){
    this.fetchProductsData(0 , 20);
    this._store.select(selectProductData).subscribe((data=>{
      this.productsData = data
    }))
  }

  navigateToDetails(id:number):void{
    this._router.navigateByUrl(`/product-details/${id}`)
  }

  onPageChange(event:any){
    this.fetchProductsData(event.first , event.rows);
  }

  fetchProductsData(skip:number , limit:number , query:string = ''){
    this._store.dispatch(loadProducts({skip , limit , query}));
  }
}

import { Component, inject } from '@angular/core';
import { ProductsFetchingService } from '../../../services/products.fetching.service';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { ProductData } from '../../../interfaces/products.interfaces';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,PaginatorModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productsSub$!:Subscription;
  productsData!:ProductData | null;
  private _productsFetchingService = inject(ProductsFetchingService);
  private _router = inject(Router);

  ngOnInit(){
    this.fetchProductsData(0);
  }

  navigateToDetails(id:number):void{
    this._router.navigateByUrl(`/product-details/${id}`)
  }

  onPageChange(event:any){
    this.fetchProductsData(event.first);
  }

  fetchProductsData(skip:number){
    this.productsSub$ = this._productsFetchingService.getProducts(skip).subscribe((data)=>{
      this.productsData = data;
    });
  }

  ngOnDestory(){
    if(this.productsSub$) this.productsSub$.unsubscribe()
  }
}

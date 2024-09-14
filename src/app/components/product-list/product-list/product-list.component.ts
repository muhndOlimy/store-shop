import { Component, inject } from '@angular/core';
import { ProductsFetchingService } from '../../../services/products.fetching.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products$!:Observable<any>;
  private _productsFetchingService = inject(ProductsFetchingService);
  private _router = inject(Router);

  ngOnInit(){
    this.products$ = this._productsFetchingService.getProducts();
  }

  navigateToDetails(id:number):void{
    this._router.navigateByUrl(`/product-details/${id}`)
  }

}

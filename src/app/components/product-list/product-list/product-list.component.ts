import { Component, inject } from '@angular/core';
import { ProductsFetchingService } from '../../../services/products.fetching.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";

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

  ngOnInit(){
    this.products$ = this._productsFetchingService.getProducts();
  }

}

import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { ProductsFetchingService } from '../../services/products.fetching.service';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/products.interfaces';


@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [GalleriaModule , FormsModule,ButtonModule],
  templateUrl: './product-details.page.component.html',
  styleUrl: './product-details.page.component.scss'
})
export class ProductDetailsPageComponent {

  private _productsFetchingService = inject(ProductsFetchingService);
  product$!:Observable<Product>;
  @Input() productId!: number;


  ngOnInit(){
    this.product$ = this._productsFetchingService.getProductsById(this.productId);
  }

  images:any[]=[
    {
      itemImageSrc: 'assets/placeholder.jpg',
      thumbnailImageSrc: 'assets/placeholder.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'assets/placeholder.jpg',
      thumbnailImageSrc: 'assets/placeholder.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'assets/placeholder.jpg',
      thumbnailImageSrc: 'assets/placeholder.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    }
  ]
}

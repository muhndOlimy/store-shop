import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [GalleriaModule , FormsModule,ButtonModule],
  templateUrl: './product-details.page.component.html',
  styleUrl: './product-details.page.component.scss'
})
export class ProductDetailsPageComponent {
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

import { Component } from '@angular/core';
import { FilterMenuComponent } from "../../components/products/filter-menu/filter-menu.component";
import { ProductListComponent } from '../../components/products/product-list/product-list.component';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [FilterMenuComponent , ProductListComponent],
  templateUrl: './product-list.page.component.html',
  styleUrl: './product-list.page.component.scss'
})
export class ProductListPageComponent {

}

import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCart } from '../../../store/cart/cart.selectors';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {

  private _store = inject(Store);
  cartList:any= [];

  ngOnInit(){
    this._store.select(selectCart).subscribe((data)=>{
      this.cartList = data;
    })
  }

}

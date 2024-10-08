import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { loadProducts } from '../../../store/products/products.actions';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { NgClass } from '@angular/common';
import { CartListComponent } from "../../cart/cart-list/cart-list.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, InputTextModule, NgClass, OverlayPanelModule, CartListComponent],
  templateUrl: './header.component..html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private _store = inject(Store);
  private _router = inject(Router);
  isInvalidSearch:boolean = false;

  search(event:any):void{
    const regex = /^[a-zA-Z0-9\s.,!?-]+$/;
    if (regex.test(event.target.value)) {
      this.isInvalidSearch = false;
      this._store.dispatch(loadProducts({skip:0 , limit:20 , query:event.target.value}));
    }else{
      this.isInvalidSearch = true;
    }

  }

  navigateToMain():void{
    this._router.navigateByUrl(`/`)
  }
}
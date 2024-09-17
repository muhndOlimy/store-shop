import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { loadProducts } from '../../../store/products/products.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './header.component..html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private _store = inject(Store);

  search(event:any):void{
    this._store.dispatch(loadProducts({skip:0 , limit:20 , query:event.target.value}));
  }
}
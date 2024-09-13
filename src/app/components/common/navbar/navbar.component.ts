import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  categories:string[] = ["Electronics" ,"Mobile", "Men", "Women" , "Home" ,"Beauty & Health","Baby & Toys" , "SuperMarket" , "Sell On Platform" , "New Deals"]

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';


@Component({
  selector: 'app-filter-menu',
  standalone: true,
  imports: [CommonModule,CheckboxModule,BadgeModule,InputNumberModule,FormsModule,SliderModule],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss',
})
export class FilterMenuComponent {

  minPrice:number = 100;

  maxPrice:number = 10000;

  rating:number[] = [1,4];
  categories: string[] = [
    'All Electronics & Mobiles',
    'Computers & Accessories',
    'Video Games',
    'Mobiles & Accessories',
    'Portable Audio & Video',
    'Wearables',
    'Camera & Photo',
    'Television & Video',
  ];
  brands:{title:string, count:number}[] = [
    {title:'Samsung' , count:12},
    {title:'Sony' , count:11},
    {title:'Xiaomi' , count:11},
    {title:'Apple' , count:9},
    {title:'Canon' , count:5},
    {title:'HUAWEI' , count:4},
    {title:'HP' , count:4},
    {title:'Lenovo' , count:3}
  ]
}

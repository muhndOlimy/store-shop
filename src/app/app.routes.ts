import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'' ,
        loadComponent:()=>import('./pages/product-list.page/product-list.page.component').then((c)=>c.ProductListPageComponent)
    },
    {
        path:'product-details/:productId' ,
        loadComponent:()=>import('./pages/product-details.page/product-details.page.component').then((c)=>c.ProductDetailsPageComponent)
    }
];

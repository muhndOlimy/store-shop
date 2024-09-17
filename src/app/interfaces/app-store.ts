import { Product, ProductData } from "./products.interfaces";

export interface AppStore {
    cart:Product[],
    productsData:ProductData
}

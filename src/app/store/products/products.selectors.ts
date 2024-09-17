import { AppStore } from "../../interfaces/app-store";

export const selectProductData = (state:AppStore) => state.productsData;
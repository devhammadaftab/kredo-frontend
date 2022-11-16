import { ActionConstent } from "constants/store";
import api from "endpoints";

export const setCategories = async () => {
    let categories = await api.getCategries();
    return { type: ActionConstent.SET_CATEGORIES, payload: categories }
}

export const setProducts = async (payload: number) => {
    let products = await api.getProducts(payload);
    return { type: ActionConstent.SET_PRODUCTS, payload: products }
}

export const setProduct = async (payload: number) => {
    let product = await api.getProduct(payload);
    return { type: ActionConstent.SET_PRODUCT, payload: product }
}

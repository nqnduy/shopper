import api  from "../core/constants/api.js";

export const productService = {
    getProduct(query = '') {
        return api.get(`/product${query}`);
    }
}
import axios from "../axios";

const api = {
    getCategries: async () => {
        let response = await axios.get('/category');
        return response.data;
    },
    getProducts: async (payload: number) => {
        let response = await axios.get('/category/' + payload);
        return response.data.products
    },
    getProduct: async (payload: number) => {
        let response = await axios.get('/products/' + payload);
        return response.data
    }
}

export default api
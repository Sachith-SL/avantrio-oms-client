import axiosInstance from "../apis/axiosinstance";

//get all products
export const getAllProductsApi = async () => {
  try {
        const response = await axiosInstance
            .get(`/product`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
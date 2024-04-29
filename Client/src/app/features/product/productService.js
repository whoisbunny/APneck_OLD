import API from "../../../config/API";

const getProducts = async () => {
  const res = await API.get(`product`);
  
  return res.data;
};

const getProduct = async (id) => {
    const res = await API.get(`product/${id}`);
    
    return res.data;
  };

export const productService = {
  getProducts,
  getProduct
};



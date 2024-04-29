import API from "../../../config/API";

const getProducts = async () => {
  const res = await API.get(`product/`);
  return res.data;
};
const getProduct = async (data) => {
  const res = await API.get(`product/${data}`);
  return res.data;
};
const addProducts = async (data) => {
  const res = await API.post(`product/`, data);
  return res.data;
};
const deleteProducts = async (data) => {
  const res = await API.delete(`product/${data}`);
  return res.data;
};
const updateProducts = async (data) => {
  const res = await API.put(
    `product/${data?.id}`,
    data?.formData
  );
  return res.data;
};

const productService = {
  getProducts,
  addProducts,
  deleteProducts,
  updateProducts,
  getProduct,
};

export default productService;

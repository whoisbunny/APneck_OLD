import API from "../../../config/API";

const getCart = async () => {
  const res = await API.get(`cart`);
  return res.data;
};
const addCart = async (data) => {
  const res = await API.post(`cart`, data);
  return res.data;
};
const updateCart = async (DATA) => {
  const res = await API.put(
    `cart/${DATA?.id}`,
    DATA
  );

  return res.data;
};
const deleteCart = async (data) => {
  const res = await API.delete(`cart/${data}`);
  return res.data;
};






const cartService = {
  getCart,
  addCart,
  updateCart,
  deleteCart,

};

export default cartService;
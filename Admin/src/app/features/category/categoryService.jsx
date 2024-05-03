import API from "../../../config/API";
const getcategories = async () => {
  const res = await API.get(`category`);
  return res.data;
};
const addcategory = async (data) => {
  const res = await API.post(`category`, data);
  return res.data;
};
const delcategory = async (data) => {
  const res = await API.delete(`category/${data}`);
  return res.data;
};
const editcategory = async (data) => {
  const res = await API.put(
    `category/${data.id}`,
    data.formData,
  );
  return res.data;
};
const getcategory = async (data) => {
  const res = await API.get(`category/${data}`);
  return res.data;
};

const blogService = {
  getcategories,
  addcategory,
  delcategory,
  editcategory,
  getcategory,
};

export default blogService;

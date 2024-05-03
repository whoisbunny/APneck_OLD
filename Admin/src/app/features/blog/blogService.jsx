import API from "../../../config/API";
const getblogs = async () => {
  const res = await API.get(`blog`);
  return res.data;
};
const Addblog = async (data) => {
  const res = await API.post(`blog`, data);
  return res.data;
};
const Delblog = async (data) => {
  const res = await API.delete(`blog/${data}`);
  return res.data;
};
const Editblog = async (data) => {
  const res = await API.put(
    `blog/${data.id}`,
    data.formData,
  );
  return res.data;
};
const getblog = async (data) => {
  const res = await API.get(`blog/${data}`);
  return res.data;
};

const blogService = {
  getblogs,
  Addblog,
  Delblog,
  Editblog,
  getblog,
};

export default blogService;

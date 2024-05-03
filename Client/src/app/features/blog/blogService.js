import API from "../../../config/API";

const getBlogs = async () => {
  const res = await API.get(`blog`);
  
  return res.data;
};

const getBlog = async (id) => {
    const res = await API.get(`blog/${id}`);
    
    return res.data;
  };

export const blogService = {
  getBlog,
  getBlogs
};



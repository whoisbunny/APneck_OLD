import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getBlogs, openAddModal } from "../../app/features/blog/blogSlice";
import BlogList from "./BlogList";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
// import ReactTable from "react-table";
const BlogPostPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const { blogs } = useSelector((state) => state.blog);

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-between items-center my-6 m-4">
          <h4 className="font-medium lg:text-2xl text-xl capitalize  dark:text-slate-300 text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
            Blog
          </h4>
          <div className="md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse ">
            <button
              className="btn btn inline-flex justify-center bg-slate-900 dark:bg-slate-700  text-white h-min text-sm font-normal px-6 py-3 rounded-sm"
              onClick={() => dispatch(openAddModal(true))}
            >
              Add Blog
            </button>
          </div>
        </div>
        <BlogList blogs={blogs} />
        <AddBlog />
        <EditBlog/>
      </div>
    </>
  );
};

export default BlogPostPage;

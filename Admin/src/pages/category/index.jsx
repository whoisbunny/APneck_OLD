import { useEffect } from "react";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, openAddModal } from "../../app/features/category/categorySlice";
import CategoryList from "./CategoryList";

const CategoryPostPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { categories } = useSelector((state) => state.category);

  return<>
   <div>
        <div className="flex flex-wrap justify-between items-center my-6 m-4">
          <h4 className="font-medium lg:text-2xl text-xl capitalize  dark:text-slate-300 text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
            Category
          </h4>
          <div className="md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse ">
            <button
              className="btn btn inline-flex justify-center bg-slate-900 dark:bg-slate-700  text-white h-min text-sm font-normal px-6 py-3 rounded-sm"
              onClick={() => dispatch(openAddModal(true))}
            >
              Add Category
            </button>
            
          </div>
        </div>
        <CategoryList categories={categories} />
      <AddCategory/>
      <EditCategory/>
      </div>
  </>
}

export default CategoryPostPage;
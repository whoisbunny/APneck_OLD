import { useEffect } from "react";
import { getProducts, toggleAddModal } from "../../app/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
// import ReactTable from "react-table";
const ProductPostPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { products } = useSelector((state) => state.product);

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-between items-center my-6 m-4">
          <h4 className="font-medium lg:text-2xl text-xl capitalize  dark:text-slate-300 text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
            Product
          </h4>
          <div className="md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse ">
            <button
              className="btn btn inline-flex justify-center bg-slate-900 dark:bg-slate-700  text-white h-min text-sm font-normal px-6 py-3 rounded-sm"
              onClick={() => dispatch(toggleAddModal(true))}
            >
              Add Product
            </button>
            
          </div>
        </div>
        <ProductList products={products} />
      <AddProduct/>
      <EditProduct/>
      </div>
    </>
  );
};

export default ProductPostPage;

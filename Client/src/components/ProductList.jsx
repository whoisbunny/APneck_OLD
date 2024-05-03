import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../app/features/product/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { products } = useSelector((state) => state.product);
  console.log(products);
  const adToCart = (id) => {
    const data = {
      productId: id,
      quantity: 1,
    };

    console.log(data);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product) => {
          return (
            <>
              <div className="mb-6 p-4  rounded-md">

                <Link className="card h-full m-auto border-r-2 max-w-[18rem] py-[12px] px-[10px] overflow-hidden rounded-[24px] ">
                  <img
                    src={product?.image}
                    alt=""
                    className="w-full h-[18rem] rounded-[18px] p-4"
                  />
                  <div className="card-body p-4">
                    <h5>{product.brand}</h5>
                    <p className="mb-2">{product.name}</p>
                    <p className="mb-3">{product.price} &nbsp; </p>
                    <Link to={`/details/${product._id}`} >
                      <p className="text-center mb-3">
                        <button
                          onClick={() => console.log(product._id)}
                          className="text-[#535bf2] border-none p-0 items-center text-2xl"
                        >
                          View Details
                        </button>
                      </p>
                    </Link>
                    <div className="flex items-center mb-4">
                      <button
                        onClick={() => adToCart(product._id)}
                        className="bg-primary2 text-white px-2 py-3 rounded-xl border m-auto  "
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;

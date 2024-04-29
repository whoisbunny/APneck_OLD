import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS, PRODUCTS1 } from "./ProductDummy";
const ProductList = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => {
          return (
            <>
              <div className="mb-6 p-4  rounded-md">
                <Link className="card h-full m-auto border-r-2 max-w-15.625 pt-1.5 pr-0.5 overflow-hidden rounded-[24px] ">
                  <img
                    src={product?.image}
                    alt=""
                    className="w-full h-auto rounded-[18px] p-4"
                  />
                  <div className="card-body p-12">
                    <h5>{product.brand}</h5>
                    <p className="mb-2">{product.name}</p>
                    <p className="mb-2">{product.price} &nbsp; </p>
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

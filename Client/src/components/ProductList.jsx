import React from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            
          <div className="mb-6">
            <Link className="card h-full m-auto">
              <img src="" alt="" className="w-full h-auto" />
              <div className="card-body">

              </div>
            </Link>
          </div>
        }
      </div>
    </>
  );
};

export default ProductList;

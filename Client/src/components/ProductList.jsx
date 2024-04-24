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
                    <Link to="/details">
                      <p className="text-center mb-3">
                        <button className="text-[#535bf2] border-none p-0 items-center text-2xl">
                          View Details
                        </button>
                      </p>
                    </Link>
                  <div className="flex items-center mb-4">
                    <button className="bg-primary2 text-white px-2 py-3 rounded-xl border m-auto  ">
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

// import { ShopContext } from './shopcontext';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../app/features/product/productSlice";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  //   const { selectedProduct, closeProductDetails, addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext);

  // Set selectedProduct to 0
  //   const productId = selectedProduct || 0;

  //   const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);

  //   if (!product) {
  //     return null;
  //   }
  //   const cartItemAmount = cartItems[product.id];

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const { product } = useSelector((state) => state.product);

  return (
    <div className="container p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-1">
          <div className="card p-5 mx-auto">
            <img
              src={product.image}
              alt=""
              className="card-img-top img-fluid p-2"
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card p-3 mx-auto">
            <div className="card-body">
              <h5 className="card-title">{product.brand}</h5>
              <h3 className="card-text">{product.name}</h3>
              <p className="card-text">
                <span className="text-danger text-lg me-2">
                  {product.price}$
                </span>
                <strike>{product.price * 2}$</strike>
              </p>
              <p className="card-text">{product.description}</p>
              

              <div className="flex items-center mb-3 col-span-6">
                <button
                  className="btn btn-outline-secondary me-2"
                  // onClick={() => addToCart(product.id)}
                >
                  +
                </button>
                <input
                  className="form-control text-center"
                  type="number"
                  // value={cartItems[product.id]}
                  // onChange={(e) =>
                  // updateCartItemCount(Number(e.target.value), product.id)
                  // }
                />
                <button
                  className="btn btn-outline-secondary ms-2"
                  // onClick={() => removeToCart(product.id)}
                >
                  -
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  // onClick={() => {
                  //   addToCart(product.id);
                  //   event.target.classList.toggle("red");
                  // }}
                  id="button-link"
                  className="myButton"
                >
                  Add To Cart
                  {/* {cartItemAmount > 0 && ` (${cartItemAmount})`} */}
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            {/* <div className="flex justify-center flex-col items-center">
              <h2 className="text-center mb-2">More products of the same</h2>
              <p className="mb-2">
                We have more products, visit the shop to get amazing deals from
                us!!
              </p>
            </div> */}
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                {/* {PRODUCTS.slice(3, 7).map((product) => (
                  <div key={product.id}>
                    <div className="card h-100">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                  </div>
                ))} */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {/* {PRODUCTS1.slice(2, 6).map((product) => (
                  <div key={product.id}>
                    <div className="card h-100">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

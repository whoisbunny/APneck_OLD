import React, { useContext, useEffect, useState } from "react";
import { PRODUCTS, PRODUCTS1 } from "../components/ProductDummy";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../app/features/cart/cartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <section className="cart bg-lighter1">
        <div className="container mx-auto xl:px-5 py-5 ">
          <div className="row px-24 text-primary ">
            <div className="p-2 text-center">
              <h2>Cart</h2>
            </div>
            <div className="w-full md:w-5/12 text-center">
              <h5>Product</h5>
            </div>
            <div className="w-full md:w-5/12 text-center">
              <h5>Details</h5>
            </div>

            {cart?.map((el) => {
              return (
                <>
                  {el?.items.map((e) => {
                    return (
                      <>
                        <div className="p-12 w-full ">
                          <CartItem
                            id={e?.productId?._id}
                            name={e?.productId?.name}
                            price={e?.productId?.price}
                            image={e?.productId?.image}
                          />
                        </div>
                      </>
                    );
                  })}
                </>
              );
            })}

            <div className="p-3">
              <div className="w-full p-2 text-right">
                <button onClick="submit" id="clear-cart">
                  {" "}
                  Clear Cart{" "}
                </button>
              </div>

              <hr />
              <div className="row">
                <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
                  <button onClick={() => navigate("/product")}>
                    {isMobile ? "Continue" : "Continue Shopping"}
                  </button>
                </div>

                <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
                  <div className="w-full">
                    <div className="text-right">
                      <h2 className="mb-3">
                        <b>Total</b>
                      </h2>
                      <div className="flex items-center">
                        <div>
                          <p className="flex items-center text-primary">
                            <b>${0}</b>
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate("/checkout")}
                        className="mt-5"
                      >
                        {isMobile ? "Check Out" : "Proceed to Checkout"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-5">
            <div className="row">
              <div className="text-center p-5 mb-4">
                <h2>Your Cart Is Empty!!!</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

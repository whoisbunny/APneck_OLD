import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../app/features/cart/cartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const { cart, totalCartProducts } = useSelector((state) => state.cart);

  console.log(totalCartProducts);
  return (
    <>
      <section className="cart bg-lighter1">
        <div className="container mx-auto xl:px-5 py-5 ">
          {totalCartProducts > 0 ? (
            <>
              <div className="row px-24 text-primary ">
                <div className="p-2 w-full text-3xl text-center">
                  <h2>Cart</h2>
                </div>
                <div className="w-full md:w-6/12 text-2xl text-center">
                  <h5>Product</h5>
                </div>
                <div className="w-full md:w-6/12 text-2xl text-center">
                  <h5>Details</h5>
                </div>

                {cart?.map((el) => {
                  return (
                    <>
                      <div className="p-12 w-full ">
                        <CartItem
                          id={el._id}
                          name={el?.productId?.name}
                          price={el?.productId?.price}
                          image={el?.productId?.image}
                          quantity={el.quantity}
                        />
                      </div>
                    </>
                  );
                })}

                <div className="p-3 w-full  text-2xl text-center">
                  {/* <div className="w-full p-2 text-right">
                <button onClick="submit" id="clear-cart">
                  {" "}
                  Clear Cart{" "}
                </button>
              </div> */}

                  <hr />
                  <div className="row  w-full">
                    <div className=" col-span-12 md:col-span-6 total mx-auto flex flex-col p-5">
                      <button
                        onClick={() => navigate("/product")}
                        className="border border-gray-300 rounded-lg text-center px-3 py-2 bg-gray-700   text-white hover:text-gray-800 hover:bg-gray-50"
                      >
                        {"Continue"}
                      </button>
                    </div>

                    <div className="col-span-12 md:col-span-6 total mx-auto flex flex-col p-5">
                      <div className="w-full">
                        <div className="">
                          <h2 className="mb-3">
                            <b className="">Total</b>
                          </h2>
                          <div className="flex items-center">
                            <div className="flex justify-end w-full my-4">
                              <p className="flex items-center text-sm  text-primary mb-4">
                                <b>${0}</b>
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => navigate("/checkout")}
                            className="border border-gray-300 rounded-lg text-center px-3 py-2 bg-gray-700   text-white hover:text-gray-800 hover:bg-gray-50"
                          >
                            {"Proceed to Checkout"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container mx-auto px-5 min-h-96 flex justify-center items-center">
                <div className="row">
                  <div className=" text-3xl text-primary   p-5 mb-4">
                    <h2> Your Cart Is Empty!!!  </h2>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;

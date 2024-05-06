/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteCart, editCart, getCart } from "../app/features/cart/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity } = props;

  const [newQuantity, setNewQuantity] = useState(quantity);

  return (
    <div className="container card my-3 rounded-xl h-80">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="col-span-1 md:col-span-1">
          <div className="p-3 ">
            <div className="cart-item-image flex justify-center items-center w-full mx-auto">
              <img
                src={image}
                className="card-img-top img-fluid h-32 w-32 "
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          <div className="p-3">
            <h2>{name}</h2>
            <p className="cart-item-id">
              Product Price: <b className="text-center mb-1">${price}</b>
            </p>
            <p className="cart-item-id">
              Product Number: <b className="text-center mb-3">{id}</b>
            </p>
            {/* <p className="cart-item-id">
              Items in Stock: <b className="text-danger">{itemsInStock}</b>
            </p> */}
          </div>
          <div className="p-3 d-flex justify-content-between align-items-center">
            <div className="mb-6  ">
              <button
                className="btn border rounded-lg text-center w-16   border-gray-300 text-gray-700 hover:text-gray-800 hover:bg-gray-50"
                onClick={() => {
                  setNewQuantity(newQuantity + 1);

                  dispatch(
                    editCart({
                      id: id,
                      quantity: newQuantity + 1,
                    })
                  );
                }}
              >
                +
              </button>
              <input
                className="text-red-500  w-1/4 h-1/4 text-center"
                value={newQuantity ? newQuantity : quantity}
              />
              <button
                className="btn border border-gray-300 rounded-lg text-center w-16  text-gray-700 hover:text-gray-800 hover:bg-gray-50"
                onClick={() => {
                  setNewQuantity(newQuantity - 1);

                  dispatch(
                    editCart({
                      id: id,
                      quantity: newQuantity - 1,
                    })
                  );
                }}
              >
                -
              </button>
            </div>

            <button
              className="btn btn-outline-danger text-sm lg:text-base p-3 lg:p-6 bg-primary1 text-white border border-transparent transition duration-500 ease-in-out rounded-lg"
              onClick={() => {
                dispatch(deleteCart(id));
                setTimeout(() => {
                    dispatch(getCart())
                }, 500);
              }}
            >
              <RiDeleteBack2Line />
            </button>
          </div>
          <div className="p-3"></div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CartItem;

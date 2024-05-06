/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../app/features/cart/cartSlice';

const CartItem = (props) => {


    const dispatch = useDispatch()
    const { id, name, price, image } = props;
    console.log(image);
    const itemsInStock = id === 0 ? Math.ceil((id + 2.5) * 102 / 2) : Math.ceil((id * 102.5) / 2);

    return (
        <div className="container card my-3 rounded-xl h-80">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="col-span-1 md:col-span-1">
                    <div className="p-3 ">
                        <div className="cart-item-image flex justify-center items-center w-full mx-auto">
                            <img src={image} className="card-img-top img-fluid h-32 w-32 " alt="..." />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1">
                    <div className="p-3">
                        <h2>{name}</h2>
                        <p className="cart-item-id">Product Price: <b className='text-center mb-1'>${price}</b></p>
                        <p className="cart-item-id">Product Number: <b className='text-center mb-3'>{id}</b></p>
                        <p className="cart-item-id">Items in Stock: <b className='text-danger'>{itemsInStock}</b></p>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                        <div className="count-handler">
                            {/* <button className="btn btn-outline-secondary" onClick={() => addToCart(id)}>+</button> */}
                            {/* <input className='text-danger fs-4 form-control' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} /> */}
                            <button className="btn btn-outline-secondary" onClick={() => dispatch(deleteCart(id))}>-</button>
                        </div>
                        <button className="btn btn-outline-danger" onClick={() =>dispatch(deleteCart(id))}>
                            <RiDeleteBack2Line />
                        </button>
                    </div>
                    <div className="p-3">
                        <input type="text" className="form-control" id="coupon" placeholder="Enter coupon code..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

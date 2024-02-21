import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./cart.css";
import { IoMdRemoveCircle } from "react-icons/io";
import CartLeftCard from "./CartLeftCard";
const Cart = ({ cart, handleDelete, count, handleplaceOrder }) => {
  return (
    <div className="column">
      <div className="cartright">
        {cart.length == 0 ? (
          <h1 className="noitems">No items in cart</h1>
        ) : (
          cart.map((each) => {
            const { id, title, price, thumbnail } = each;
            return (
              <div key={id} className="Smallcart">
                <div className="divsamllCart">
                  <div className="Smallcartleftside">
                    <img src={thumbnail} alt={id} className="cartimg" />
                  </div>
                  <div className="Smallcartrightside">
                    <p className="title"> {title}</p>
                    <p className="smallrightside">
                      <span className="span">Special price : </span>{" "}
                      <span>${price}</span>{" "}
                      <strike className="spans">$ 999</strike>
                    </p>
                    <div className="smallcartflex">
                      <Link
                        to={`/delivery/${id}`}
                        className="button"
                        count={count}
                      >
                        Placeorder
                      </Link>
                      <Button onclick={() => handleDelete(id)}>
                        <IoMdRemoveCircle fontSize={20} className="remove" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="cartflex">
        {cart.length >= 1 && <CartLeftCard cart={cart} />}
      </div>
    </div>
  );
};

export default Cart;

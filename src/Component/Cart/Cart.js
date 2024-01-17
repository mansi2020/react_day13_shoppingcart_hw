import React, { useEffect, useState } from "react";
import "./Cart.css";
import emptycart from "./empty_cart.svg";

const Cart = (props) => {
  // state for crat data
  let [cartText, setCartText] = useState(true);

  useEffect(() => {
    let showEmptyCart = () => {
      if (props.productData.totalPrice == 0) {
        setCartText(true);
      } else {
        setCartText(false);
      }
    };
    showEmptyCart();
  }, [props.productData.totalPrice]);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartText ? (
        <div class="cart-empty-container">
          <img src={emptycart} alt="" />
          <p className="cartEmpty">Cart is Empty!</p>
        </div>
      ) : (
        props.productData.Products.map((item) => {
          if (item.value >= 1) {
            return (
              <div className="cart">
                <h4>{item.name}</h4>
                <div className="cart-qty-price">
                  <h4>{item.value}*</h4>
                  <h4>{item.price}</h4>
                </div>
              </div>
            );
          }
        })
      )}

      <div className="total-price">
        <h1>Total Price:</h1>
        <p>{props.productData.totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;

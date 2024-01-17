import { useReducer, useState } from "react";
import Cart from "../Cart/Cart";
import "./Product.css";
import Header from "../Header/Header";
import Products from "./../Product";

const Product = () => {
  //useReducer for manage cart data
  function reducerFn(state, action) {
    switch (action.type) {
      case "decrese":
        let newTotalPrice = 0;
        return {
          ...state,
          Products: state.Products.map((item) => {
            if (item.id == action.id) {
              newTotalPrice = state.totalPrice - item.price;
              return {
                ...item,
                value: item.value > 0 ? item.value - 1 : item.value,
              };
            }
            return item;
          }),
          totalPrice: newTotalPrice,
        };

      case "increase":
        let newTotalPrice1 = 0;
        return {
          ...state,
          Products: state.Products.map((item) => {
            if (item.id == action.id) {
              newTotalPrice1 = state.totalPrice + item.price;
              return {
                ...item,
                value: item.value + 1,
              };
            }
            return item;
          }),
          totalPrice: newTotalPrice1,
        };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    Products: Products,
    totalPrice: 0,
  });
  return (
    <>
      {/* header */}
      <Header />

      {/* product container */}
      <div className="product-container">
        <div className="product-left-container">
          <h1>Products</h1>
          {state.Products.map((item) => {
            return (
              <div className="product-Data" key={item.id}>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <div className="product-qty">
                  <button
                    onClick={() => {
                      dispatch({ type: "decrese", id: item.id });
                    }}
                  >
                    -
                  </button>
                  <span>{item.value}</span>
                  <button
                    onClick={() => {
                      dispatch({ type: "increase", id: item.id });
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="product-container-cart">
          <Cart productData={state}></Cart>
        </div>
      </div>
    </>
  );
};

export default Product;

import React from "react";
import CartPreviewLine from "./CartPreviewLine";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
const CartPreview = props => {
  var cart = [];
  if (cookie.load("cart")) {
    cart = cookie.load("cart");
  }

  return (
    <div
      className="modal fade"
      id="cartPreview"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="cartPreview"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Cart Preview
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {cart.map(item => (
              <CartPreviewLine key={item.Id} product={item} />
            ))}
          </div>
          <div className="modal-footer">
            <Link to="/store/checkout">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#cartPreview"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPreview;

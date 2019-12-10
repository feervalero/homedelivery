import React from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";

class PLPGridItem extends React.Component {
  addToCart = () => {
    var cart =new Array();
    cart =Array.from(cookie.load("cart"));
    console.log("this is the origin cart",cart);
    
    if (cart) {
      cart.push(this.props.product);
      cart = JSON.stringify(cart);
      
    } else {
      var cart_arr = [];

      cart_arr.push(this.props.product);

      var cart = JSON.stringify(cart_arr);

      
    }
    console.log("this is the result cart",cart);
    cookie.save("cart", cart);
    
  };
  render() {
    return (
      <div className="col-md-3 p-3" style={{ width: "fitContent" }}>
        <div className="row">
          <img
            src="/imageDefault.png"
            alt="thumbnail"
            height="200px"
            width="200px"
          />
        </div>
        <div className="row">
          <p>{this.props.product.Name}</p>
        </div>
        <div className="row">
          <h6>$450.00</h6>
        </div>
        <div className="row p-2">
          <Link to={`/store/pdp/${this.props.product.Id}`}>
            <button className="btn btn-secondary">View Details</button>
          </Link>
        </div>
        <div className="row p-2">
          <button className="btn btn-primary" onClick={this.addToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}

export default PLPGridItem;

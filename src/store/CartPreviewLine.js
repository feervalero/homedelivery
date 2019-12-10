import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPreviewLine = props => {
  return (
    <div className="row p-2 d-flex">
      <img
        className=""
        src="/imageDefault.png"
        height="50px"
        width="50px"
        alt="minicartThumb"
      />
      <h6 className="p-2 flex-grow-1">{props.product.Name}</h6>
      <div className="p-2">$300.00</div>
      <div className="p-2">
        <button className="reset">
          <FontAwesomeIcon style={{ color: "red" }} icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default CartPreviewLine;

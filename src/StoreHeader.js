import React from "react";
import { Link } from "react-router-dom";
import CartPreview from "./store/CartPreview";
import ZipCodeModal from './store/ZipCodeModal';
const StoreHeader = (props) => {
  
  return (
    <>
    <ZipCodeModal />
    <CartPreview />
    <div className="container d-flex p-2 mb-4">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/store" className="nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/store/plp" className="nav-link">
            PLP
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/store/pdp/1" className="nav-link">
            PDP
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            ADMIN
          </Link>
        </li>
      </ul>
      <div className="flex-grow-1"></div>
      <div>
        
        {(!props.ZipCode)?<button data-toggle="modal" data-target="#zipCodeModal" className="btn btn-danger">Add Zip Code</button>:<a href="/store/plp">Your zip code is {props.ZipCode} </a>}
        
        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#cartPreview">
          Cart <span className="badge badge-light">4</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default StoreHeader;

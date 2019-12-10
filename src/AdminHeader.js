import React from "react";
import {Link} from 'react-router-dom';
const AdminHeader = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/admin" className="nav-link active">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/cities" className="nav-link">
          Cities
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/states" className="nav-link">
          States
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/store" className="nav-link">
          STORE
        </Link>
      </li>
    </ul>
  );
};

export default AdminHeader;

import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Auth.css";

export const Auth = () => {
  return (
    <div className="auth">
      <h1>Product</h1>
      <div className="btngroup">
        {" "}
        <Link to="/auth/login">
          {" "}
          <button>All Product</button>
        </Link>
        <Link to="/auth/signup">
          <button>Users</button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

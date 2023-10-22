import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="page-center">
      <h1>404 Page Error</h1>
      <p> This Page is not found.</p>
      <p>Kindly initialize<Link className="homeError" to="/">
      this</Link> to return to our home page</p>
      
    </div>
  );
};

export default NotFound;

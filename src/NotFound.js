import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="page-center">
      <h1>404 Page Error</h1>
      <p>Page not found.</p>
      <p>Navigate Back with the Home Button</p>
      <Link className="homeError" to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;

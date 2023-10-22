import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="homePage">Welcome to My App Homepage</h1>

            <div className="toCounter">
              <p> <Link to="/counter">Below is the link to my Counter Page
                  </Link> 
              </p>
            </div>
            <div className="toPage"><p><Link to="/404">
              Error404 Page</Link> </p>
            </div>
            
            <div className="toError"><Link  to="/test">
              Test  Error Boundary here
            </Link> </div>
            
    </div>
  );
};

export default Home;

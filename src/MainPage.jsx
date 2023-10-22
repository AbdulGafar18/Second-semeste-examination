import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="homePage">Welcome to My App Homepage</h1>

            <div className="toCounter">
              <p> This is the link to my <Link to="/counter"> Counter Page</Link> 
              </p>
            </div>
            <div className="toPage"><p><Link to="/404">
              Error404 Page</Link> </p>
            </div>
            
            <div className="toError"><Link  to="/test">
              Test  Error Boundary here
            </Link> </div>

          <p> Created  by <a href="http://github.com/AbdulGafar18">AbdulGafar</a></p>  
            
    </div>
  );
};

export default Home;

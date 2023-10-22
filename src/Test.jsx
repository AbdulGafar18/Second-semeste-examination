import React from "react";
import { Link } from "react-router-dom";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  render() {
    if (this.state.error) {
      throw new Error("Test error");
    }

    return (
      <div>
        <h1>Error Boundary Test</h1>

        <p> Hey, Welcome </p>
        <p> This is an error boundary test page</p>

        <p className="homeErrBound"><Link to="/">
          Click to retrun to Home page</Link>
        </p>
        
      </div>
    );
  }
}

export default Test;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="content">
          <h1 className="heading">Welcome</h1>
          <h2 className="hone-h2">The Spark Foundation Bank</h2>
          <div className="button">
            <Link to="/login" className="waves-effect waves-light btn">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

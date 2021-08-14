import React from "react";
import { ReactComponent as ErrorImg } from ".././assets/error.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="error-container">
        <div className="error">
          <div className="error-left">
            <h1>Whoops! Lost in Space?</h1>
            <p>The page you're looking for isn't found :( <br/>We suggest you back to home</p>

            <div className="home-btns">
              <Link to="/" className="s-btn h-btn h-signup e-btn">
                Back to Home 🏡
              </Link>
            </div>
          </div>
          <div className="error-right">
                <ErrorImg/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;

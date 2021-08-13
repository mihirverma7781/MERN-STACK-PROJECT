import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

const Login = () => {
  const LoginContainer = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: LoginContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Login.json"),
    });
  }, []);

  return (
    <>
      <section className="signup login-section">
        <div className="signup-container">
          <div className="signup-left">
            <div className="signup-head">
              <h2 className="signup-title">Login</h2>
            </div>
            <div className="signup-form">
              <form className="s-form" id="s-form" action="" method="post">
                <div class="form-group">
                  <label for="email">
                    {" "}
                    <i class="zmdi zmdi-email zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value=""
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Your Email"
                    autocomplete="off"
                  />
                </div>

                <div className="form-group">
                  <label for="password">
                    <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value=""
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    autocomplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-s btn-primary">
                  Login ✔
                </button>
              </form>
            </div>
          </div>

          <div className="signup-right">
            <div className="signup-image" ref={LoginContainer}></div>
            <div className="login-link">
              <Link to="/signup">Don't have an account?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

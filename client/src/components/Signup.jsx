import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
const Signup = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Blogging.json"),
    });
  }, []);
  return (
    <>
      <section className="signup">
        <div className="signup-container">
          <div className="signup-left">
            <div className="signup-head">
              <h2 className="signup-title">Signup</h2>
            </div>
            <div className="signup-form">
              <form className="s-form" id="s-form" action="" method="post">
                <div class="form-group">
                  <label for="name">
                    <i class="zmdi zmdi-account-circle  zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value=""
                    name="name"
                    aria-describedby="name"
                    placeholder="Your Name"
                    autocomplete="off"
                  />
                </div>
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
                <div class="form-group">
                  <label for="mobile">
                    <i class="zmdi zmdi-smartphone-iphone zmdi-hc-lg "></i>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    value=""
                    name="mobile"
                    aria-describedby="mobile"
                    placeholder="Your Mobile"
                    autocomplete="off"
                  />
                </div>
                <div class="form-group">
                  <label for="work">
                    <i class="zmdi zmdi-star zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="work"
                    value=""
                    name="work"
                    aria-describedby="workHelp"
                    placeholder="Your Profession"
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
                <div className="form-group">
                  <label for="cpassword">
                    <i class="zmdi zmdi-shield-check zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    value=""
                    className="form-control"
                    id="cpassword"
                    placeholder="Confirm password"
                    autocomplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-s btn-primary">
                  Submit ✔
                </button>
              </form>
            </div>
          </div>

          <div className="signup-right">
            <div className="signup-image" ref={container}>
              {/* <Blogging/> */}
            </div>
            <div className="login-link">
              <Link to="/login">Already have an account?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

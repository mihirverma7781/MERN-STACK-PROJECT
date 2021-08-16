import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import lottie from "lottie-web";
const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Registration Succesfull");
      console.log("Registration Succesfull");
      history.push("/login");
    }
  };

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
              <form className="s-form" id="s-form" method="post">
                <div class="form-group">
                  <label for="name">
                    <i class="zmdi zmdi-account-circle  zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={handleChange}
                    name="name"
                    aria-describedby="name"
                    placeholder="Your Name"
                    autocomplete="off"
                    value={user.name}
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
                    onChange={handleChange}
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Your Email"
                    autocomplete="off"
                    value={user.email}
                  />
                </div>
                <div class="form-group">
                  <label for="phone">
                    <i class="zmdi zmdi-smartphone-iphone zmdi-hc-lg "></i>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    onChange={handleChange}
                    name="phone"
                    aria-describedby="phone"
                    placeholder="Your Mobile"
                    autocomplete="off"
                    value={user.phone}
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
                    onChange={handleChange}
                    name="work"
                    aria-describedby="workHelp"
                    placeholder="Your Profession"
                    autocomplete="off"
                    value={user.work}
                  />
                </div>
                <div className="form-group">
                  <label for="password">
                    <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    autocomplete="off"
                    value={user.password}
                  />
                </div>
                <div className="form-group">
                  <label for="cpassword">
                    <i class="zmdi zmdi-shield-check zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    onChange={handleChange}
                    className="form-control"
                    id="cpassword"
                    placeholder="Confirm password"
                    autocomplete="off"
                    value={user.cpassword}
                  />
                </div>
                <button
                  type="submit"
                  name="signup"
                  id="signup"
                  className="btn btn-s btn-primary"
                  onClick={postData}
                >
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

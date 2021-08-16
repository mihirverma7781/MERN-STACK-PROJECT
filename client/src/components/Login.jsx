import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import lottie from "lottie-web";

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleChangeLogin = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const userLogin = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    const res = await fetch("/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    console.log(res);
    if (res.status === 400 || !data) {
      window.alert("Invalid login");
    } else {
      window.alert("login successfully");
      history.push("/");
    }
  };

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
                    <i class="zmdi zmdi-email zmdi-hc-lg"></i>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={handleChangeLogin}
                    value={login.email}
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
                    value={login.password}
                    className="form-control"
                    onChange={handleChangeLogin}
                    id="password"
                    placeholder="Password"
                    autocomplete="off"
                  />
                </div>
                <button
                  type="submit"
                  name="login"
                  id="login"
                  className="btn btn-s btn-primary"
                  onClick={userLogin}
                >
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

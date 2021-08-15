import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

const Home = () => {




  const home = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: home.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Home.json"),
    });
  }, []);

  return (
    <>
      <section className="home-section">
        <div className="home">
          <div className="h-sections">
            <h1 className="home-header">MERN Developer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              commodi, provident quia ipsam sequi vitae qui vero quibusdam
              excepturi id possimus adipisci dolores ducimus?
            </p>
            <div className="home-btns">
                <Link to="/login" className="l-btn h-btn">Login</Link>
                <Link to="/signup" className="s-btn h-btn h-signup">Signup</Link>
            </div>
          </div>
          <div className="h-sections" ref={home}></div>
        </div>
      </section>
    </>
  );
};

export default Home;

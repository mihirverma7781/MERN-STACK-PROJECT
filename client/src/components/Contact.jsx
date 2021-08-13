import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import lottie from "lottie-web";
const Contact = () => {
    const ContactContainer = useRef(null);
    useEffect(() => {
      lottie.loadAnimation({
        container: ContactContainer.current,
        render: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../assets/Contact.json"),
      });
    }, []);
  return (
    <>
      <section className="contact-section">
<div className="contact-upper">
    <div className="c-details">
    <h5>Email:</h5><p>info@lookup.com</p>
    </div>
    <div className="c-details">
    <h5>Phone:</h5><p>+91 85462 54763</p>
    </div>
    <div className="c-details">
    <h5>Address:</h5><p>7 Wall Street, Nyc-45075</p>
    </div>
</div>

        <div className="contact">
          <div className="contact-image" ref={ContactContainer}></div>
          <div className="contact-info">
              <h2>Send Us Query</h2>
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
                <label for="phone">
                  <i class="zmdi zmdi-smartphone-iphone zmdi-hc-lg "></i>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  value=""
                  name="phone"
                  aria-describedby="phone"
                  placeholder="Your Mobile"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <label for="message">
                  <i class="zmdi zmdi-comment-alt-text zmdi-hc-lg"></i>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  value=""
                  name="message"
                  aria-describedby="message"
                  placeholder="Your Message"
                  autocomplete="off"
                />
              </div>

              <button
                type="submit"
                name="contact"
                id="contact"
                className="btn btn-s btn-primary"
              >
                Send query 🚀
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

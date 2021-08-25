import React, { useEffect, useRef, useState } from "react";

import lottie from "lottie-web";
const Contact = () => {
  const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});
  const callContact = async () => {
    try {
      console.log("in a try");
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData({
        ...userData,
        name:data.name,
        email:data.email,
        phone:data.phone
      });
      console.log(data);
      console.log("userdata " + userData);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleInputs=(e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({
      ...userData,
      [name]:value
    });
  }

  // 

  const ContactContainer = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: ContactContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Contact.json"),
    });
    callContact();
  }, []);
  return (
    <>
      <section className="contact-section">
        <div className="contact-upper">
          <div className="c-details">
            <h5>Email:</h5>
            <p>info@lookup.com</p>
          </div>
          <div className="c-details">
            <h5>Phone:</h5>
            <p>+91 85462 54763</p>
          </div>
          <div className="c-details">
            <h5>Address:</h5>
            <p>7 Wall Street, Nyc-45075</p>
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
                  value={userData.name}
                  onChange={handleInputs}
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
                  value={userData.email}
                  onChange={handleInputs}
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
                  value={userData.phone}
                  onChange={handleInputs}

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
                  value={userData.message}
                  name="message"
                  aria-describedby="message"
                  placeholder="Your Message"
                  autocomplete="off"
                  onChange={handleInputs}

                />
              </div>

              <button
                type="submit"
                name="contact"
                id="contact"
                className="btn btn-s btn-primary"
                onClick={handleContact}
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

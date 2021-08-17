import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Welcome } from ".././assets/Welcome.svg";
const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const callAbout = async () => {
    try {
      console.log("in a try");
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      console.log(data);
      console.log("userdata "+ userData);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };
  useEffect(() => {
    callAbout();
  }, []);

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4 about-img">
              <Welcome />
            </div>

            <div className="col-md-6 name-sec">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  Ratings:<span className="ratings"> 5/5</span>{" "}
                </p>

                <ul class="nav" role="tablist">
                  <li className="nav-item inner-navs">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item inner-navs">
                    <a
                      className="nav-link "
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 edit-btn">
              <button
                type="text"
                className="btn btn-primary profile-edit-btn"
                name="btn-addmore"
              >
                Edit &nbsp;<i class="zmdi zmdi-edit"></i>
              </button>
            </div>
          </div>
          <div className="row lower-abt">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Links:</p>
                <div className="work-list">
                  <Link to="https://google.com">Google Home</Link>
                </div>
                <div className="work-list">
                  <Link to="https://google.com">Google Home</Link>
                </div>
                <div className="work-list">
                  <Link to="https://google.com">Google Home</Link>
                </div>
                <div className="work-list">
                  <Link to="https://google.com">Google Home</Link>
                </div>
                <div className="work-list">
                  <Link to="https://google.com">Google Home</Link>
                </div>
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>+91 {userData.phone}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$ /hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>58</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Tech Stack</label>
                    </div>
                    <div className="col-md-6">
                      <p>MERN</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Available</label>
                    </div>
                    <div className="col-md-6">
                      <p>Yes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;

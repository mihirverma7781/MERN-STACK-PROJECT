import React from "react";
import { ReactComponent as Welcome } from ".././assets/Welcome.svg";
const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form action="" method="get">
          <div className="row">
            <div className="col-md-4 about-img">
              <Welcome />
            </div>

            <div className="col-md-6 name-sec">
              <div className="profile-head">
                <h5>Mihir Verma</h5>
                <h6>Full Stack Developer</h6>
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
                <a href="https://google.com" target="_blank">
                  Google Home
                </a>
                </div>
                <div className="work-list">
                <a href="https://google.com" target="_blank">
                  Google Home
                </a>
                </div>
                <div className="work-list">
                <a href="https://google.com" target="_blank">
                  Google Home
                </a>
                </div>
                <div className="work-list">
                <a href="https://google.com" target="_blank">
                  Google Home
                </a>
                </div>
                <div className="work-list">
                <a href="https://google.com" target="_blank">
                  Google Home
                </a>
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
                      <p>5466555445</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Mihir Verma</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>mihirv7781@gmail.com</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>+91 85462-54756</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 abt-nav-heads">
                      <label htmlFor="User ID">Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>WEB Developer</p>
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

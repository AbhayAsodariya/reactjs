import React from "react";
import Header from "./Navbar";
import Button from "react-bootstrap/Button";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <header className="head">
        <Header />
        <div className="text-center my-5 py-5">
          <h1 className="text-white w-50 mx-auto pt-5 mt-5">
            Buy Or Sell Your Your Home in Central Florida
          </h1>
          <p className="text-white w-25 mx-auto ">
            Our guarantee programs eliminate the risk and the stress of selling
            your home.
          </p>
          <div>
            <Button
              className="sell-btn fw-bold border-0 rounded-0 fs-6 py-3 px-4 me-4 "
              size="lg"
              active
            >
              Find Your Home's Value
            </Button>
            <Button
              className="Looking-btn fw-bold bg-transparent rounded-0 fs-6 py-3 px-4"
              size="lg"
              active
            >
              Looking for a Home?
            </Button>
          </div>
        </div>
      </header>

      <section className="container">
        <div className="row">
          <div className="col-lg-6 mt-5 pt-5 ">
            <p className="fs-1 fw-bold">As Seen & Heard On</p>
            <div className="line"></div>
            <p>
              John operate a family business that has sold over $500 million in
              real estate. They are consistently ranked as a top-selling team in
              Central Florida and have been named “Hot 100 Real Estate Agents”
              by Orlando Magazine for 15 years.
            </p>
            <p>
              Our team takes great pride in having helped thousands of families
              with their real estate needs. The majority of their business comes
              from repeat clients and referrals. They offer several guarantee
              programs that eliminate the risk and the stress of selling your
              home.
            </p>
            <div>
              <Button
                className="sell-btn fw-bold border-0 rounded-0 fs-6 py-3 px-4 me-4 "
                size="lg"
                active
              >
                More About Us
              </Button>
              <Button
                className="Looking-btn fw-bold bg-transparent text-black rounded-0 fs-6 py-3 px-4"
                size="lg"
                active
              >
                Call Us Anytime
              </Button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="./img/2.png" alt="" width={"100%"} />
          </div>
        </div>
      </section>

      <Testimonial/>
    </>
  );
}

export default Home;

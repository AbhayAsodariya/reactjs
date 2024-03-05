import React from "react";
// import { Container } from "react-bootstrap";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Testimonial() {
  const Slid = [
    {
      src: "./img/4.jpg",
      name: "Susan R. Seim",
      cnt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque cras ac, euismod id fames. Est laoreet ac vitae eratmassa a enim. Eu platea netus aliquam nunc convallis eros.",
      date: "August 21,2022.",
    },
    {
      src: "./img/5.jpg",
      name: "Susan R. Seim",
      cnt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque cras ac, euismod id fames. Est laoreet ac vitae eratmassa a enim. Eu platea netus aliquam nunc convallis eros.",
      date: "August 21,2022.",
    },
    {
      src: "./img/3.jpg",
      name: "Susan R. Seim",
      cnt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque cras ac, euismod id fames. Est laoreet ac vitae eratmassa a enim. Eu platea netus aliquam nunc convallis eros.",
      date: "August 21,2022.",
    },
    {
      src: "./img/4.jpg",
      name: "Susan R. Seim",
      cnt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque cras ac, euismod id fames. Est laoreet ac vitae eratmassa a enim. Eu platea netus aliquam nunc convallis eros.",
      date: "August 21,2022.",
    },
  ];
  return (
    <div className="mt-5 pt-5">
      <h1 className="text-center">Testimonials from Our Satisfied Clients</h1>
      <div className="line mx-auto "></div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-5"
      >
        {Slid.map((v) => (
          <SwiperSlide className="bg-white p-3 rounded-2">
            <div>
              <div className="d-flex justify-content-between px-2">
                <div className="d-flex">
                  <div className="me-2">
                    <img
                      src={v.src}
                      alt=""
                      className="rounded-circle"
                      height={"50px"}
                      width={"50px"}
                    />
                  </div>
                  <div>
                    <h6>{v.name}</h6>
                    <p className="text-secondary">{v.date}</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/f40f/6ee4/358ef1906247ba6b8ed47d57619337b1?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HQ8qEUTiFYvNtCNTuCtpaG6o~NP7SNUX0C1VnKVvzrH4GqSPWSGd9XVNOthhmuAap8vJnzMbKLs-2fshbwpfddcq9beLUtO~SLvWxJd7N2PBIMVe0QBiGkhwizOIVgom5ly~nrQNZn19icBhXybI0eviYVQ4JPrkOfVLVd9PTH0CDpOqqQo8BLLqr2m2PdolooS66cAwkgAzhAdKTYRsu4C-Yn67dE1emonMQ38onHYF7NLp2ExzyP8W8rYx5Mx8C958ZUHSxZPkdUZMzapESN8FWtYXt~kM2oMx1uQLhF99GCGnh9yfpVCIELrgY-m9tAoEwrUJ9-rc~ixY2iHdfw__"
                    alt=""
                    height={"40px"}
                  />
                </div>
              </div>
              <div>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
              </div>
              <p>{v.cnt}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;

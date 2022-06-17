import React from "react";
import "./Home.css";
import Mintbtn from "./MintBtn";

export default function Page1() {
  {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1,
      speed: 2000,
      draggable: false,
      slidesToShow: 6,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }

  return (
    <div className="sec1">
      <div className="container-fluid sec1">
        <div className="row pt-3">
          <div className="col-1"></div>
          <div className="col-10">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img className="logo" src="./imgs/logo.png" />{" "}
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item px-2 pt-1">
                      <a className="nav-link " aria-current="page" href="#mi">
                        Mint Now
                      </a>
                    </li>
                    <li className="nav-item px-2 pt-1">
                      <a className="nav-link" href="#coll">
                        Collection
                      </a>
                    </li>
                  </ul>
                  <button className="btn-nav">Connect</button>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <hr className="line1" />

      <div className="container-fluid sec1">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12 text-center">
              <p className="heading">Sekuya Kingdom x Inspiring Creators</p>
              <h1 className="heading1">10.000 Rare NFT</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid collection">
        <div className="container">
          <div className="row AAA mt-5">
            <div className="col-3"></div>
            <div className="col-md-6 text-center shad ">
              <h2 className="rare">
                CONGRATULATIONS!
                <br />
                You got 1 Rare NFT!
              </h2>
              <div className="awesome pt-3">
                <button className="awe">Awesome!</button>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
      <a id="mi"></a> */}
      <div className="container-fluid sec1">
        <Mintbtn />
      </div>
      <div className="container-fluid sec1">
        <div className="container">
          <div className="row story">
            <div className="col-md-12 text-center">
              <p className="text-white story">© 2022 Sekuya Multiverse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

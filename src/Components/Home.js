import React from "react";
import "./Home.css";
import Slider from "react-slick";
import Img6 from "../Images/icon.png";
import Img7 from "../Images/icon1.png";
import Img8 from "../Images/icon2.png";
import Img9 from "../Images/icon3.png";
import Img10 from "../Images/1.png";
import Img11 from "../Images/2.png";
import Img12 from "../Images/3.png";
import Img13 from "../Images/4.png";
import Img14 from "../Images/5.png";
import Img15 from "../Images/6.png";
import Img16 from "../Images/7.png";
import Img17 from "../Images/8.png";
import Img18 from "../Images/9.png";
import Img19 from "../Images/10.png";
import Img21 from "../Images/Artboard 18.svg";
import Img22 from "../Images/Artboard 19.png";
import Img23 from "../Images/Artboard 20.png";

export default function Home() {
  window.addEventListener("load", videoScroll);
  window.addEventListener("scroll", videoScroll);

  function videoScroll() {
    if (document.querySelectorAll("video[autoplay]").length > 0) {
      var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll("video[autoplay]");

      for (var i = 0; i < videoEl.length; i++) {
        var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

        if (
          videoClientRect <= windowHeight - videoHeight * 0.5 &&
          videoClientRect >= 0 - videoHeight * 0.5
        ) {
          thisVideoEl.play();
        } else {
          thisVideoEl.pause();
        }
      }
    }
  }
  {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1,
      speed: 4000,
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
                <a className="navbar-brand" href="#">
                  <img className="logo" src="./imgs/logo.png" />
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
                      <a className="nav-link " aria-current="page" href="#st">
                        Story
                      </a>
                    </li>
                    <li className="nav-item px-2 pt-1">
                      <a className="nav-link" href="#cr">
                        Creator
                      </a>
                    </li>
                    <li className="nav-item px-2 pt-1">
                      <a className="nav-link" href="/mint">
                        Mint
                      </a>
                    </li>

                    <li className="nav-item px-2">
                      <a
                        className="nav-link "
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        <a href="/mint">
                          <button className="btn-nav">Connect</button>
                        </a>
                      </a>
                    </li>
                  </ul>
                  <img className="social px-2" src={Img21} />
                  <i className="fa-brands fa-twitter mx-1 p-2"></i>
                  <i className="fa-brands fa-telegram mx-1 p-2"></i>
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
        <div className="slider pt-5">
          {/* <h2> Responsive </h2> */}
          <Slider {...settings}>
            <div>
              <img className="w-100" src="./imgs/slider1.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider11.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider2.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider12.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider3.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider13.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider4.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider14.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider5.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider15.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider6.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider16.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider7.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider17.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider8.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider18.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider9.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider19.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider10.png" />
            </div>
            <div>
              <img className="w-100" src="./imgs/slider20.png" />
            </div>
          </Slider>
        </div>
        <div className="row pt-5">
          <div className="col-md-12 text-center">
            <a href="/mint">
              <button className="btn1">Connect</button>
            </a>
          </div>
        </div>
        <a id="st"></a>
        <div className="container">
          <div className="row story">
            <div className="col-md-12 text-center">
              <h1 className="heading2">The Story</h1>
              <p className="sek pt-4">
                Inspired by{" "}
                <span className="leg">
                  100 Legends of Sekuya, 10,000 Sekuya
                </span>
                created to keep the
                <br />
                world at peace with the name called{" "}
                <span className="leg">Sekuya Kingdom. </span>
                Be part of the
                <br /> kingdom and explore the
                <span className="leg"> world of multiverse.</span>
              </p>
            </div>
          </div>
          <div className="row story">
            <div className="col-md-12 text-center">
              <h1 className="heading2">Ultimate Power</h1>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-3  gap text-center">
              <img className="icon" src={Img6} />
              <p className="bullet pt-3">10% Rewards</p>
            </div>
            <div className="col-md-3 gap text-center">
              <img className="icon" src={Img7} />
              <p className="bullet pt-3">Skin in game</p>
            </div>
            <div className="col-md-3 gap text-center">
              <img className="icon" src={Img8} />
              <p className="bullet pt-3">Land Ticket</p>
            </div>
            <div className="col-md-3 gap text-center">
              <img className="icon" src={Img9} />
              <p className="bullet pt-3">
                0.1 - 0.5 BNB
                <br />
                Mint Price
              </p>
            </div>
          </div>
          <div className="row story">
            <div className="col-md-12 text-center">
              <h1 className="heading2">Requirement</h1>
              <p className="bullet pt-3">10,000,000 $SKUY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid sec2">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="heading3">Mint price</h1>
          </div>
        </div>
        <div className="row pt-5 mint">
          <div className="col-md-3 text-center gap">
            <h1 className="heading4">0.1 BNB</h1>
            <p className="bullet1">999 NFTs</p>
          </div>
          <div className="col-md-3 text-center gap">
            <h1 className="heading4">0.2 BNB</h1>
            <p className="bullet1">1000 - 1999 NFTs</p>
          </div>
          <div className="col-md-3 text-center gap">
            <h1 className="heading4">0.3 BNB</h1>
            <p className="bullet1">2000 - 6999 NFTs</p>
          </div>
          <div className="col-md-3 text-center gap">
            <h1 className="heading4">0.4 BNB</h1>
            <p className="bullet1">7000 - 10.000 NFTs</p>
          </div>
        </div>
      </div>
      <div className="container-fluid sec3">
        <div className="row pt-5">
          <div className="col-md-12 text-center">
            <h1 className="heading6">$20.000 Giveaway</h1>
          </div>
        </div>
        <div className="row pt-5 mint">
          <div className="col-md-4 text-center gap">
            <h1 className="heading4">$10.000</h1>
            <p className="bullet1">to top holder</p>
          </div>
          <div className="col-md-4 text-center gap">
            <h1 className="heading4">$5000 </h1>
            <p className="bullet1">
              to random 5<br />
              top 100 holders
            </p>
          </div>
          <div className="col-md-4 text-center gap">
            <h1 className="heading4">$5000</h1>
            <p className="bullet1">
              to random 5<br />
              top 50 holders
            </p>
          </div>
        </div>
      </div>
      <a id="cr"></a>
      <div className="container-fluid sec1 creators">
        <div className="row story">
          <div className="col-md-12 text-center">
            <h1 className="heading3">Meet Inspiring Creators</h1>
            <h3 className="heading6">Coming soon, Phase 2</h3>
          </div>
        </div>
        {/* <div className="row pt-5">
          <div className="col-md-1 p-0 m-0 "></div>
          <div className="col-md-2 col-sm-4 member text-left p-0 m-0">
            <img className="w-100" src={Img11} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam
            </p>
          </div>
          <div className="col-md-2 col-sm-4 member2 text-left p-0 m-0">
            <img className="w-100" src={Img12} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam
            </p>
          </div>
          <div className="col-md-2 col-sm-4 text-left member p-0 m-0">
            <img className="w-100" src={Img13} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam
            </p>
          </div>
          <div className="col-md-2 col-sm-6 text-left member2 p-0 m-0">
            {" "}
            <img className="w-100 size" src={Img10} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam
            </p>
          </div>
          <div className="col-md-2 col-sm-6 member text-left p-0 m-0 ">
            {" "}
            <img className="w-100" src={Img14} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-md-1 p-0 m-0"></div>
        </div>
        <div className="row pt-5">
          <div className="col-md-1 p-0 m-0 "></div>
          <div className="col-md-2 col-sm-4 member col-sm-3 text-left p-0 m-0 ">
            <img className="w-100" src={Img15} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam
            </p>
          </div>
          <div className="col-md-2 col-sm-4 member2 col-sm-3 text-left p-0 m-0">
            <img className="w-100" src={Img16} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam
            </p>
          </div>
          <div className="col-md-2 col-sm-4 text-left col-sm-3 member p-0 m-0 ">
            <img className="w-100" src={Img17} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam
            </p>
          </div>
          <div className="col-md-2 col-sm-6 text-left col-sm-3 member2 p-0 m-0 ">
            {" "}
            <img className="w-100 size" src={Img18} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam
            </p>
          </div>
          <div className="col-md-2 col-sm-6 member col-sm-3 text-left p-0 m-0">
            {" "}
            <img className="w-100" src={Img19} />
            <h3 className="name">
              Your
              <br />
              Name
            </h3>
            <hr className="line" />
            <h4 className="lorem">Lorem ipsum</h4>
            <p className="text-white p-2">
              Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed
              diam Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-md-1 p-0 m-0"></div>
        </div> */}

        <div className="container">
          <div className="row story">
            <div className="col-md-12 text-center">
              <h1 className="heading3">Watch Trailer</h1>
              <video className="video pt-5" controls autoplay="true" muted>
                <source src="trailer.mp4"></source>
              </video>
              <div className="btn-2 story">
                <a href="https://sekuya.io/" target="_blank">
                  <button className="btn2">Visit Sekuya Main Site</button>
                </a>
              </div>
              <p className="text-white story">© 2022 Sekuya Multiverse</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row">
          <a
            href="https://nft.sekuya.io/ultrarare"
            target="_blank"
            className="col-sm-6"
            style={{ background: "#e2b830" }}
          >
            <img src="./imgs/left.png" className="p-5" />
            <h3 className="name">
              100 3D NFT <br /> LEGENDS OF SEKUYA
            </h3>
          </a>
          <a
            className="col-sm-6"
            href="https://nft.sekuya.io/rare"
            target="_blank"
          >
            <img src="./imgs/right.png" className="p-5" />
            <h3 className="name">
              10.000 3D NFT <br />
              SEKUYA KINGDOM
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

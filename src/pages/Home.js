import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppBarThree } from "./components/AppBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { ButtonView } from "../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { MagicStar, HeartTick, Quant, Tag2 } from "iconsax-react";
// import Banner from './components/Banner';
import Carousal from "./components/Carousal";
import { HomeProductThree } from "./HomeProducts";
// import Countdown from './components/DayCount';
const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // Offset (in px) from the original trigger point
      delay: 500, // Values from 0 to 3000, with step 50ms
      duration: 3000, // Values from 0 to 3000, with step 50ms
      easing: "ease", // Default easing for AOS animations
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/about");
  };
  const handleproductnavigate = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="over">
        <AppBarThree />
        <img
          src={require("../assets/images/banner/banner_elevel.jpg")}
          className="img-fluid w-100"
          alt="product name"
        />
        <div className="padding">
          <Container>
            <Row>
              <div class="blast-one">
                <img
                  src={require("../assets/sivasakthicrackersimage/blast_one.gif")}
                  class="img-fluid"
                  alt="Blast Crackers"
                />
              </div>
              <div class="blast-two">
                <img
                  src={require("../assets/sivasakthicrackersimage/blast_two.gif")}
                  class="img-fluid"
                  alt="Blast Crackers"
                />
              </div>

              <Col lg={6} xs="12">
                <div className="home-top">
                  <div class="title-box">
                    <span class="section-sub-title arial">
                      Vinitha Pyro World
                    </span>
                    <div class="section-title mt-10 arial">
                      Quality Makes the Belief for Customers
                    </div>
                  </div>
                  <div className="regular">
                    <p class="mb-35 helvetica">
                      We provide all top branded diwali crackers &amp; other
                      occasional Fire crackers retails and wholesale. We build
                      your surprising occasion with lighting and sensational
                      Gift box with our inspiring crackers. We provide all top
                      branded diwali crackers &amp; other occasional Fire
                      crackers retails and wholesale.
                    </p>
                  </div>

                  <div class="row mb-35">
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="ml-4 relate">
                        <p class="helvetica">
                          <i class="bi bi-check2-circle iconss clr1"></i>
                          Attractive
                        </p>
                        <p class="helvetica">
                          <i class="bi bi-check2-circle iconss clr1"></i>
                          Colourful
                        </p>
                        <p class="helvetica">
                          <i class="bi bi-check2-circle iconss clr1"></i>
                          Manufacturing
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="ml-4 relate">
                        <p class="helvetica">
                          <i class="bi bi-check2-circle iconss clr1"></i>Genuine
                          Price
                        </p>
                        <p class="helvetica">
                          <i class="bi bi-check2-circle iconss clr1"></i>Safety
                        </p>
                        <p class="helvetica">
                          <i class="bi bi-check2-circle iconss clr1"></i>
                          Satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="about-us">
                    <a
                      className="primary-btn-1 btn-hover arial"
                      href="/about"
                      onClick={handlenavigate}
                    >
                      about us &nbsp; | <i className="bi bi-arrow-right"></i>
                      <span></span>
                    </a>

                    <div class="call-us">
                      <div class="icon-1">
                        <i class="bi bi-telephone"></i>
                      </div>
                      <div class="content p-relative">
                        <span class="helvetica">Call Us Now</span>
                        <h5 class="arial">
                          <a href="tel:919943833618" class="helvetica black">
                            +91 9943833618
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} xs="12">
                <img
                  src={require("../assets/sivasakthicrackersimage/crackerscenter.webp")}
                  className="img-fluid crackerscenter"
                  alt="best discount in diwali sale"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid className="p-0">
          <Row className="gx-0">
            <Col lg="12">
              <div class="homeparallax">
                <div class="container-fluid px-lg-5 py-5">
                  <div class="row">
                    <div
                      class="col-lg-3 col-md-6 mt-5 wow fadeInDown animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInDown",
                      }}
                    >
                      <div class="count-box">
                        <ul id="counter" class="fullpad raleway">
                          <i class="bi bi-clock-history black heading2"></i>
                          <li>
                            <span
                              class="count percent counttext bold"
                              data-count="10"
                            >
                              10
                            </span>
                            <span class="bannerhead">+</span>
                          </li>
                          <p class="helvetica text-white">
                            Years Of Experience
                          </p>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-lg-3 col-md-6 mt-5 wow fadeInDown animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInDown",
                      }}
                    >
                      <div class="count-box">
                        <ul id="counter" class="fullpad raleway">
                          <i class="bi bi-magic black heading2"></i>
                          <li>
                            <span
                              class="count percent counttext bold"
                              data-count="200"
                            >
                              200
                            </span>
                            <span class="bannerhead">+</span>
                          </li>
                          <p class="helvetica text-white">Products</p>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-lg-3 col-md-6 mt-5 wow fadeInDown animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInDown",
                      }}
                    >
                      <div class="count-box">
                        <ul id="counter" class="fullpad raleway">
                          <i class="bi bi-people black heading2"></i>
                          <li>
                            <span
                              class="count percent counttext bold"
                              data-count="2000"
                            >
                              2000
                            </span>
                            <span class="bannerhead">+</span>
                          </li>
                          <p class="helvetica text-white">Happy Clients</p>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-lg-3 col-md-6 mt-5 wow fadeInDown animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInDown",
                      }}
                    >
                      <div class="count-box">
                        <ul id="counter" class="fullpad raleway">
                          <i class="bi bi-heart black heading2"></i>
                          <li>
                            <span
                              class="count percent counttext bold"
                              data-count="100"
                            >
                              100
                            </span>
                            <span class="bannerhead">%</span>
                          </li>
                          <p class="helvetica text-white">Satisfaction</p>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div class="container py-5">
          <div class="row">
            <div
              class="col-lg-12 text-center mb-5 wow bounceInDown animated"
              style={{ visibility: "visible", animationName: "bounceInDown" }}
            >
              <div class="arial heading6">New Arrivals</div>
              <div class="arial heading1 shadownew1 clr1">Our Products</div>
              <p class="helvetica">
                In a competitive world of fire crackers, we are well known for
                qualitative crackers and fancy novelties at reasonable price.
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 col-12 mb-5 feature-block wow fadeInLeft animated"
              bounceInDown
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div class="feature-block-one">
                <div class="inner-box p_relative">
                  <figure class="image-box p_relative">
                    <img
                      src={require("../assets/sivasakthicrackersimage/chakkar.webp")}
                      className="img-fluid crackerscenter"
                      alt="best discount in diwali sale"
                    />
                  </figure>
                  <div class="text p_absolute padd35 bg_white tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="d_iblock black">
                        Ground Chakkar
                      </a>
                    </h3>
                  </div>
                  <div class="overlay-content p_absolute padd35 bg_yellow tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="p_relative d_iblock black">
                        Ground Chakkar
                      </a>
                    </h3>
                    <p class="helvetica text-center clr1">Vinitha Pyro World</p>
                    <div class="btn1">
                      <a
                        href="/products"
                        onClick={handlenavigate}
                        class="helvetica"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-12 mb-5 feature-block wow fadeInDown animated"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              <div class="feature-block-one">
                <div class="inner-box p_relative">
                  <figure class="image-box p_relative">
                    <img
                      src={require("../assets/sivasakthicrackersimage/shots.webp")}
                      className="img-fluid crackerscenter"
                      alt="best discount in diwali sale"
                    />
                  </figure>
                  <div class="text p_absolute padd35 bg_white tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="d_iblock black">
                        Sky Shots
                      </a>
                    </h3>
                  </div>
                  <div class="overlay-content p_absolute padd35 bg_yellow tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="p_relative d_iblock black">
                        Sky Shots
                      </a>
                    </h3>
                    <p class="helvetica text-center clr1">Vinitha Pyro World</p>
                    <div class="btn1">
                      <a
                        href="/products"
                        onClick={handlenavigate}
                        class="helvetica"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-12 mb-5 feature-block wow fadeInRight animated"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div class="feature-block-one">
                <div class="inner-box p_relative">
                  <figure class="image-box p_relative">
                    <img
                      src={require("../assets/sivasakthicrackersimage/flower.webp")}
                      className="img-fluid crackerscenter"
                      alt="best discount in diwali sale"
                    />
                  </figure>
                  <div class="text p_absolute padd35 bg_white tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="d_iblock black">
                        Flower Pots
                      </a>
                    </h3>
                  </div>
                  <div class="overlay-content p_absolute padd35 bg_yellow tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="p_relative d_iblock black">
                        Flower Pots
                      </a>
                    </h3>
                    <p class="helvetica text-center clr1">Vinitha Pyro World</p>
                    <div class="btn1">
                      <a
                        href="/products"
                        onClick={handlenavigate}
                        class="helvetica"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-12 mb-5 feature-block wow fadeInRight animated"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div class="feature-block-one">
                <div class="inner-box p_relative">
                  <figure class="image-box p_relative">
                    <img
                      src={require("../assets/sivasakthicrackersimage/single.webp")}
                      className="img-fluid crackerscenter"
                      alt="best discount in diwali sale"
                    />
                  </figure>
                  <div class="text p_absolute padd35 bg_white tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="d_iblock black">
                        Single Sound
                      </a>
                    </h3>
                  </div>
                  <div class="overlay-content p_absolute padd35 bg_yellow tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="p_relative d_iblock black">
                        Single Sound
                      </a>
                    </h3>
                    <p class="helvetica text-center clr1">Vinitha Pyro World</p>
                    <div class="btn1">
                      <a
                        href="/products"
                        onClick={handlenavigate}
                        class="helvetica"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-12 mb-5 feature-block wow fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div class="feature-block-one">
                <div class="inner-box p_relative">
                  <figure class="image-box p_relative">
                    <img
                      src={require("../assets/sivasakthicrackersimage/rockets.webp")}
                      className="img-fluid crackerscenter"
                      alt="best discount in diwali sale"
                    />
                  </figure>
                  <div class="text p_absolute padd35 bg_white tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="d_iblock black">
                        Rockets
                      </a>
                    </h3>
                  </div>
                  <div class="overlay-content p_absolute padd35 bg_yellow tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="p_relative d_iblock black">
                        Rockets
                      </a>
                    </h3>
                    <p class="helvetica text-center clr1">Vinitha Pyro World</p>
                    <div class="btn1">
                      <a
                        href="/products"
                        onClick={handlenavigate}
                        class="helvetica"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-12 mb-5 feature-block wow fadeInLeft animated"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div class="feature-block-one">
                <div class="inner-box p_relative">
                  <figure class="image-box p_relative">
                    <img
                      src={require("../assets/sivasakthicrackersimage/sparkler.webp")}
                      className="img-fluid crackerscenter"
                      alt="best discount in diwali sale"
                    />
                  </figure>
                  <div class="text p_absolute padd35 bg_white tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="d_iblock black">
                        Sparklers
                      </a>
                    </h3>
                  </div>
                  <div class="overlay-content p_absolute padd35 bg_yellow tran_5">
                    <h3 class="arial p_relative fs_24">
                      <a href="products.php" class="p_relative d_iblock black">
                        Sparklers
                      </a>
                    </h3>
                    <p class="helvetica text-center clr1">Vinitha Pyro World</p>
                    <div class="btn1">
                      <a
                        href="/products"
                        onClick={handlenavigate}
                        class="helvetica"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parallax">
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-lg-12 col-md-12 parallaxpad text-center wow zoomInRight animated"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.5s",
                  animationName: "zoomInRight",
                }}
              >
                <h1 class="text-white arial">
                  We are one of the leading sellers of crackers
                </h1>
                <h4 class="text-white pb-3 helvetica">
                  Our service created a positive image among our customers
                </h4>
                <div>
                  <a
                    href="/products"
                    onClick={handlenavigate}
                    class="paralbtn btn-5"
                  >
                    View My Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sale bg start*/}

        <div className="padding">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <div className="text-center" data-aos="fade-right">
                  <h1 className="bold h1color"> Brands We Handle</h1>
                </div>
                <div class="smallborder1"></div>
                <div>
                  <Carousal />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* sale bg end*/}
        <Footer />
      </div>
    </>
  );
};

export default Home;

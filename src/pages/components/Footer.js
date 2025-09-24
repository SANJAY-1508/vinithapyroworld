import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import WhatsAppButton from "./Whatsapp";
import { useNavigate } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handlenavigate = () => {
    navigate("/products");
  };
  return (
    <>
      {location.pathname !== "/products" && (
        <div className="fixed point2 blink" onClick={handlenavigate}>
          <img
            src={require("../../assets/sivasakthicrackersimage/quickpurchase.png")}
            className="img-fluid priceicn2 float-right"
            alt="special price"
          />
        </div>
      )}
      <div className="fixed point">
        <WhatsAppButton
          name="Hi Vinitha Pyro World"
          phoneNumber="916374365891"
        />
      </div>
      <a href="https://maps.app.goo.gl/44Perm7MPaHANNLJ7">
        <div className="fixed point3" style={{ cursor: "pointer" }}>
          <img
            src={require("../../assets/images/googlelocation.png")}
            className="img-fluid priceicn float-left"
            alt="special price"
          />
        </div>
      </a>
      <a href="tel:+916374365891">
        <div className="fixed point4" style={{ cursor: "pointer" }}>
          <img
            src={require("../../assets/images/callicon.webp")}
            className="img-fluid priceicn float-left"
            alt="product name"
          />
        </div>
      </a>

      {/* <a href="https://www.instagram.com/amaranramesh1122000?igsh=aGE2dnJoZnU1M2g=">
        <div className="fixed point4" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/inst.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://www.facebook.com/profile.php?id=61556757217479&mibextid=ZbWKwL">
        <div className="fixed point5" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/fb.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://youtube.com/@rkamaran...6617?si=-oU5tWwgPmQbLxIn">
        <div className="fixed point6" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/you.jpg')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> */}
      <>
        <div className="footer-bg foot-pad">
          <Container className="z">
            <Row className="align-items-center ">
              <Col lg="12" className="py-4">
                <Row className="justify-content-center">
                  <Col lg="3" className="align-self-center py-3">
                    <h4 className="bold"> Quick Links</h4>
                    <ul className="list-unstyled">
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/about">About</Link>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/products">Products</Link>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/safetytips">Safety Tips</Link>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <Link to="/contactus">Contact US</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col lg="3" className="py-3 text-center">
                    <div className="ft-logo">
                      <img
                        src={require("../../assets/images/storelogo.png")}
                        className="img-fluid logo-circle"
                        alt="Vinitha Pyro World"
                      />
                    </div>
                  </Col>

                  <Col lg="5" className="align-self-center py-3">
                    <h4 className="bold"> Contact Us</h4>
                    <ul className="list-unstyled">
                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          <CiLocationArrow1 />
                        </p>
                        <div className="text_one">
                          Sivakasi to Vemmakottai road,Sathirapatti, Sivakasi
                        </div>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          {" "}
                          <FaSquarePhone />
                        </p>
                        <div className="text_one">+91 9943384933</div>
                      </li>
                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          <FaWhatsapp />
                        </p>
                        <div className="text_one">+91 6374365891</div>
                      </li>

                      <li className="mx-3 pb-3 smallfnt">
                        <p>
                          <FaRegEnvelope />
                        </p>
                        <div className="text_one">
                          vinithapyroworld@gmail.com
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col lg="12" className="text-center py-3 ms-auto">
                    <div className="regular">
                      As per 2018 supreme court order, online sale of
                      firecrackers are not permitted! We value our customers and
                      at the same time, respect jurisdiction. We request you to
                      add your products to the cart and submit the required
                      crackers through the enquiry button. We will contact you
                      within 24 hrs and confirm the order through WhatsApp or
                      phone call. Please add and submit your enquiries and enjoy
                      your Diwali with Vinitha Pyro World. Our License No.----.
                      Vinitha Pyro World as a company following 100% legal &
                      statutory compliances and all our shops, go-downs are
                      maintained as per the explosive acts. We send the parcels
                      through registered and legal transport service providers
                      as like every other major companies in Sivakasi is doing
                      so.
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
      <>
        <div className="mark-bg-ft">
          <Container>
            <Row>
              <Col lg="12" className="py-3">
                <div className="text-center regular blue fw-bolder">
                  {" "}
                  Copyright © 2025, Vinitha Pyro World. All rights reserved{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </>
  );
};

export default Footer;

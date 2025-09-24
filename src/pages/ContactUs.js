import React from "react";
import MetaTags from "./components/MetaTags";
import { AppBarThree } from "./components/AppBar";
import { Container, Row, Col } from "react-bootstrap";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Mark from "./components/Mark";
const ContactUs = () => {
  return (
    <div>
      <MetaTags
        title="Contact Us - Vinitha Pyro World - Whole sale Crackers"
        type="website"
        siteName="vinithapyroworld.com"
        url="https://vinithapyroworld.com/contactus"
        keywords="Contact Us | Vinitha Pyro World  "
        description="Contact for wholesale Crackers and Retail Crackers"
        revisitAfter="10 Days"
      />
      <AppBarThree />
      <img
        src={require("../assets/images/banner/banner_three.jpg")}
        className="img-fluid w-100"
        alt="product name"
      />
      <Container className="padding">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="py-3">
            <h1 className="bold blue text-center"> Contact Us</h1>
          </Col>
          <Col lg="4" md="12" className="py-3">
            <div className="box">
              <div className="box-icon">
                <PiMapPinSimpleAreaBold size={40} color={"#000"} />
              </div>
              <div className="regular">
                Sivakasi to Vemmakottai road,Sathirapatti, Sivakasi
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <BiPhoneCall size={40} color={"#000"} />
              </div>
              <div>
                <li>+91 9943384933</li>
                <li>+91 6374365891</li>
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <MdOutlineAlternateEmail size={40} color={"#000"} />
              </div>
              <div className="pb-4">
                <div>vinithapyroworld@gmail.com</div>
              </div>
            </div>
          </Col>

          <Col lg="12" md="12" xs="12" className="py-5">
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3936.539249075469!2d77.78048007502308!3d9.373976690701786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjInMjYuMyJOIDc3wrA0Nic1OS4wIkU!5e0!3m2!1sen!2sin!4v1741075674546!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Maps Embed of Sri Siva Sakthi, Tamil Nadu"
              />
            </>
          </Col>
        </Row>
      </Container>

      <>
        <Mark />
      </>
    </div>
  );
};

export default ContactUs;

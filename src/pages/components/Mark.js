import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Mark = () => {
  return (
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
  );
};

export default Mark;

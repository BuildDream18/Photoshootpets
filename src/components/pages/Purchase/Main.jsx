import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Main.css";

import { useLocation } from "react-router-dom";

function Purchase() {
  const location = useLocation();
  const base64Image = location.state?.base64Image;

  return (
    <>
      <div className="p_urchase">
        <Container>
          <Row className="purchase__head">
            <h1 className="purchase__h" style={{ color: "red" }}>
              WAIT!
            </h1>
            <h3 className="purchase__h">Exclusive Canvas Offer : </h3>
            <h5 className="purchase__h">
              Turn Your Pet's Pic into Canvas Art! -
              <span className="text__color">$29</span>
              <span className="spacing"></span>
              <del>$99</del>
            </h5>
          </Row>
          <Row className="justify-content-center">
            <div
              style={{
                width: "700px",
                height: "700px",
                borderRadius: "15%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={`${base64Image}`}
                alt="Generated Image"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                  margin: "auto",
                }}
                thumbnail
              />
            </div>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col xs={12} md={6} className="mb-2 mb-md-0 text-center">
              <Button variant="success" className="btn-block btn-lg" href="/pricing">
                Yes, I want Pet Canvas
              </Button>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <Button variant="danger" className="btn-block btn-lg" href="/">
                No, I Hate My Pet Picture
              </Button>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </>
  );
}

export default Purchase;

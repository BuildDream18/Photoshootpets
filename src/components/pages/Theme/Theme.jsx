import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import "./Theme.css";
import themes from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";

function Theme() {
  const location = useLocation();
  const navigate = useNavigate();
  const base64Image = location.state?.base64Image;
  const [showModal, setShowModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [showGif, setShowGif] = useState(false);

  const handleCardClick = (idx) => {
    const theme = themes[idx];
    setSelectedTheme(theme);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGenerateClick = () => {
    setShowGif(true);

    // Display the GIF for 5 seconds
    setTimeout(() => {
      setShowGif(false); // Hide the GIF (optional)
      navigate("/result", { state: { base64Image: base64Image } }); // Navigate to /purchase
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  return (
    <>
      {showGif ? (
        <>
          <div className="hold">
            <Row>
              <h2 className="hold__h">Please Hold...</h2>
            </Row>
            <Row>
              <h2 className="hold__h">Photoshoot In Progress</h2>
            </Row>
          </div>
          <img
            src={"images/facescan.gif"}
            alt="Generating..."
            className="img-fluid"
            style={{ width: "100%", height: "100%" }}
          />
        </>
      ) : (
        <>
          <div className={"card__container darkBg"}>
            <Row xs={1} sm={2} md={3} className="g-4">
              {themes.map((theme, idx) => (
                <Col key={theme.id} className={"card__col"}>
                  <Card onClick={() => handleCardClick(idx)}>
                    <Card.Img variant="top" src={theme.url} />
                    <Card.Body>
                      <Card.Title>{theme.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <Modal show={showModal} onHide={handleCloseModal} size="lg">
            <Modal.Body>
              {selectedTheme && (
                <Container className="theme__modal">
                  <Row>
                    <Col xs={12} md={8}>
                      <img
                        src={selectedTheme.url}
                        alt="Selected Theme"
                        className="img-fluid"
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <h4>Your Pet Image</h4>
                      <img
                        src={`${base64Image}`}
                        alt="Generated Image"
                        className="mb-3"
                      />
                      <Button variant="primary" onClick={handleGenerateClick}>
                        Generate
                      </Button>
                    </Col>
                  </Row>
                </Container>
              )}
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
}

export default Theme;

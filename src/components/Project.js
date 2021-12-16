import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export default function Project() {
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-center">
          <Row className="g-4 row w-100">
            <div className="row justify-content-around w-100">
              <a href="https://github.com/tbetti/coffee-chat">
                <Card border="success" style={{ width: 300, height: 300 }}>
                  <Card.Body className="text-center">
                    <Card.Title>Project 1</Card.Title>

                    <Card.Text>This is project 1</Card.Text>
                  </Card.Body>
                </Card>
              </a>

              <a href="https://github.com/tbetti/coffee-chat">
                <Card border="success" style={{ width: 300, height: 300 }}>
                  <Card.Body className="text-center">
                    <Card.Title>Project 2</Card.Title>

                    <Card.Text>This is project 2</Card.Text>
                  </Card.Body>
                </Card>
              </a>

              <a href="https://github.com/tbetti/coffee-chat">
                <Card border="success" style={{ width: 300, height: 300 }}>
                  <Card.Body className="text-center">
                    <Card.Title>Project 3</Card.Title>

                    <Card.Text>This is project 3</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
}

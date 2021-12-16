import React from "react";
import Container from "react-bootstrap/Container";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-center">
          <a href="https://github.com/DBueno1464/">
            <AiFillGithub size={100} />
          </a>
          <a href="https://www.linkedin.com/in/derrick-bueno-52941a188/">
            <AiFillLinkedin size={100} />
          </a>
        </div>
      </Container>
    </>
  );
}
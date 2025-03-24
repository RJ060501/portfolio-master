import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ryan Russell </span>
            based in <span className="purple"> Salt Lake City, Utah.</span>
            <br />With an Associate’s degree in Computer Science, specializing
             in Software Development, I am currently a junior pursuing
              a Bachelor’s in Cloud Computing at Western Governors University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mountain Biking
            </li>
            <li className="about-activity">
              <ImPointRight /> Skiing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Seek creating things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ryan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

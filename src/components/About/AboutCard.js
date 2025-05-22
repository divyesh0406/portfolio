import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Divyesh Mistry </span>
            from <span className="purple"> Los Angeles, California.</span>
            <br />
            I am currently employed as a Data Science Intern at ServiceLink.
            <br />
            I am pursuing my <span className="purple">Masters in Computer Science - Data Science</span> at the <span className="gold">University of Southern California </span> <span className="cardinal">USC</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Roadtrips
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Some people read the world. I tokenize it, transform it, and make it learn!"{" "}
          </p>
          <footer className="blockquote-footer">Divyesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

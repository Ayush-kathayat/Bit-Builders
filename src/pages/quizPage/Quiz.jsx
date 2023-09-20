import React, { useState } from "react";
import "./Quiz.css";

import data from "../../../data/data";
import QuestionCard from "./components/QuestionCar";

import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function Quiz() {
  const question_quantity = data.length;
  const [currentQuestion, setcurrentQuestion] = useState(0);
  let question = data[currentQuestion];

  const prevQuestion = () => {
    console.log(currentQuestion);
    if (currentQuestion == 0 || currentQuestion < 0) {
    } else {
      setcurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    console.log(currentQuestion);

    if (currentQuestion == data.length - 1) {
    } else {
      setcurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <p className="fs-3 fw-bolder text-center mt-5">Quiz: Level-Easy</p>
      <div className="quiz">
        <Container>
          <Row>
            <div className="text-end">Time left:</div>
            <span className="text-left">
              ({question.id } of {question_quantity})
            </span>
          </Row>
          <Row className="float-end"></Row>
          <Row>
            <Col>
              <QuestionCard data={question} />
            </Col>
          </Row>
          <Row className="pt-4">
            <Col>
              <Button variant="outline-dark" onClick={prevQuestion}>
                Previous
              </Button>
            </Col>
            <Col>
              <Button
                variant="outline-dark"
                onClick={nextQuestion}
                className="float-end"
              >
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Quiz;

import React, { useState } from 'react'
import './Quiz.css'

import data from '../../../data/data'
import QuestionCard from './components/QuestionCar';

import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";


function Quiz() {
    const question_quantity = data.length
    const [currentQuestion, setcurrentQuestion] = useState(0)
    let question = data[currentQuestion];

    const prevQuestion = () => {
        console.log(currentQuestion)
        if (currentQuestion == 0 || currentQuestion < 0) { }
        else {
            setcurrentQuestion(currentQuestion - 1);
        }
    }

    const nextQuestion = () => {
        console.log(currentQuestion)

        if (currentQuestion == data.length - 1) { }
        else {
            setcurrentQuestion(currentQuestion + 1);
        }
    }

    return (
        <div className='quiz'>
            <Container>
                <Row className='float-end'>
                    <div style={{ float: 'right' }}>Time left</div>
                    <div style={{ float: 'right' }}>Time left</div>
                </Row>
                <Row>
                    <Col>
                        <span className='text-left'>({question.id + 1} of {question_quantity})</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <QuestionCard data={question} />
                    </Col>
                </Row>
                <Row className='pt-4'>
                    <Col>
                        <Button variant="outline-dark" onClick={prevQuestion}>Previous</Button>
                    </Col>
                    <Col >
                        <Button variant="outline-dark" onClick={nextQuestion} className='float-end'>Next</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Quiz
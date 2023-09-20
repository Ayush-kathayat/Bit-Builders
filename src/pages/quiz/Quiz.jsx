import React, { useState } from 'react'
import './style.css'

import data from '../../data/data'
import Card from './Card';

function Quiz() {
    const question_quantity = data.length
    const [currentQuestion, setcurrentQuestion] = useState(0)
    let question = data[currentQuestion];

    const prevQuestion = () => {
        console.log(currentQuestion)
        if (currentQuestion == 0 || currentQuestion<0) { }
        else {
            setcurrentQuestion(currentQuestion - 1);
        }
    }

    const nextQuestion = () => {
        console.log(currentQuestion)

        if (currentQuestion == data.length-1) { }
        else {
            setcurrentQuestion(currentQuestion + 1);
        }
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                    <div className="border">
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                <h4>MCQ Quiz</h4>
                                <span>({question.id + 1} of {question_quantity})</span>
                            </div>
                        </div>

                        <Card question={question} options={question.options} />

                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                        <button className="btn btn-primary d-flex align-items-center btn-danger" type="button" onClick={prevQuestion}>
                            &nbsp;previous
                        </button>
                        <button className="btn btn-primary border-success align-items-center btn-success" type="button" onClick={nextQuestion}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz
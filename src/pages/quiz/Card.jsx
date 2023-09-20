import React from 'react'
import './style.css'


function Card({ question, options }) {

    return (
            <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row align-items-center question-title">
                    <h3 className="text-danger">Q {question.id + 1}</h3>
                    <h5 className="mt-1 ml-2">{question.question}</h5>
                </div>

                {options.map((option) => (
                        <div className="ans ml-2">
                            <label className="radio">
                                <input type="radio" name={option} value={option} />
                                <span>{option}</span>
                            </label>
                        </div>
                ))}
            </div>
    )
}


export default Card;
import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";


function QuestionCar({ data }) {

    let options = data.options

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <Container className='text-left'>
            <Row>
                <div className='fs-5 fw-semibold'>
                    {data.id}. {data.question}
                </div>
            </Row>
            <Row>
                {options.map((option, index) => (
                    <Row>
                        <label className="form-check-label float-left m-2 fs-5">
                            <input
                                type="radio"
                                className="form-check-input mx-2"
                                value={option}
                                name={option}
                                checked={selectedOption === option}
                                onChange={() => handleOptionChange(option)}
                            />
                            {option}
                        </label>
                    </Row>
                ))}
            </Row>

        </Container>
    )
}


export default QuestionCar;
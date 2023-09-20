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
            <Row>{data.id}. {data.question}</Row>
            <Row>
                {options.map((option, index) => (
                    <Row>
                        <label className="form-check-label float-left m-2">
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
        // <div className="card">
        //     <div className="card-body">
        //         <p className="card-text">{data.id}. {data.question}</p>
        //         <ul className="list-group">

        //             {options.map((option, index) => (
        //                 <div key={index} className="d-flex align-items-center list-group-item">
        //                     <label className="form-check-label float-left m-2">
        //                         <input
        //                             type="radio"
        //                             className="form-check-input mx-2"
        //                             value={option}
        //                             name={option}
        //                             checked={selectedOption === option}
        //                             onChange={() => handleOptionChange(option)}
        //                         />
        //                          {option}
        //                     </label>
        //                 </div>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
    )
}


export default QuestionCar;
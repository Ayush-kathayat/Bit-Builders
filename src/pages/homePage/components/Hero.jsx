import React from 'react'
import Button from 'react-bootstrap/Button';
import homeimg from '../../../../img/home-img.jpg'

import './Hero.css'
import { Container, Row, Col } from "react-bootstrap"


function Main() {
  return (
    <Container>

      <Row className="d-flex align-items-center w-100">

        <Col sm={6} className="align-items-center">
          <div className='px-5'>
            <div className='user fs-1 fw-semibold'>
              Hii, user
            </div>
            <p className='fs-5'>Let's get your incredible journey begin already</p>
          </div>
        </Col>

        <Col sm={6} >
          <img src={homeimg} className="img-fluid animated" alt="" />
        </Col>

      </Row>

      <Row>

        <Col sm={12} >
          <div className='fs-5'>
            <p className='fs-3'>Quizs</p>
            <div className='mx-5'>
              <p className='my-1'>Start a new quix:</p>
              <Button variant="dark" size="lg" className='mx-3'>
                Start a quiz
              </Button>
            </div>

            <div className='mx-5 mt-4'>
              <p className='my-1'>Continue a previous quiz</p>
              <Button variant='dark' size='lg' className='text-white-50 mx-3' disabled>
                Previous Quiz
              </Button>
            </div>
          </div>
        </Col>

      </Row>
    </Container>



  )
}

export default Main
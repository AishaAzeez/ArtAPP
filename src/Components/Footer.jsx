import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <hr />
        <Row className='w-100 Container'>
          <Col className='uploader' xs={12} md={3}> <br />
          <h5 style={{fontWeight:'bold'}}>Wall+</h5>
            <p style={{fontSize:'12px'}}>Upload your arts in seconds on Streamable.We accept a variety of formats.It's free,try it now!</p>
          </Col>
          <Col className='link' xs={12} md={3} > <br />
            <h5>Links</h5>
         <div className='red'>Landing page<br />Home <br /> Favourites</div>
          </Col>
          <Col className='guide' xs={12} md={3} > <br />
          <h5>Guides</h5>
        <div className='red'>  React<br />React bootstrap<br /> Routing </div>
          </Col>
          <Col className='contact' xs={12} md={3}> <br />
          <h5>Contact us</h5>
        <Form.Control style={{width:'80%'}}
          placeholder="enter email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <Button id='button'>Send</Button>{' '}
          </Col>
        </Row>
    </div>
  )
}

export default Footer
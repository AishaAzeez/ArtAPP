import { useState } from 'react';
import { Modal, Card, Row, Col } from 'react-bootstrap';
import './art.css'
function ArtCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <h1 style={{ background: 'linear-gradient(45deg, #FF4040 18.56%, #A20BD8)',WebkitBackgroundClip:' text ',WebkitTextFillColor:'transparent'}} className='ms-3 text'>Latest</h1>
      <Card className='mb-5 mt-3 btn' style={{height:'280px', width: '280px'}} onClick={handleShow}>
        <Card.Img variant="top" className='card-img' src="https://i.postimg.cc/SKbz6dWf/aesthetic-art-2.jpg" />
        <Card.Body>
        </Card.Body>
      </Card>


      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='align-items-center'>
            <Col sm={12} md={6}>
              <img className='img-fluid' src="https://s.tmimgcdn.com/scr/800x500/285200/anvandargranssnitt-for-calculator-app-med-platt-och-modern-stil_285283-original.jpg" alt="Project Image" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className="fw-bolder text-warning">Title</h2>
              <p>Project Overview : <span className='fw-bolder'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet, necessitatibus accusamus aperiam voluptatibus consequatur quo quas dolores! Tempora, et vero.</span></p>
              <p>Language Used : <span className='fw-bolder text-danger'>HTML, CSS, JS</span></p>
            </Col>
          </Row>
          <div className="mt-2">
            <a href="https://github.com/ardrabiju/E-Cart" target='_blank' style={{ cursor: 'pointer', color: 'black' }} className='btn'><i className="fa-brands fa-github fa-2x"></i> </a>
            <a href="https://www.interviewbit.com/blog/web-development-projects/" target='_blank' style={{ cursor: 'pointer', color: 'black' }} className='btn ms-2'><i className="fa-solid fa-link fa-2x"></i> </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ArtCard;

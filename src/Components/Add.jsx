import { useState } from "react"
import { Modal } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import uploadProject from '../assets/upl2.png'



function Add() {
  const [show, setShow] = useState(false)
  const handleShow = ()=>setShow(true)
  const handleClose = ()=>setShow(false)
  return (
    <>
    <button onClick={handleShow} style={{textDecoration:'none'}} className="btn btn-link text-warning d-flex align-items-center fw-bolder"><i style={{height:'34px'}} className="fa-solid fa-plus fa-2x me-2"></i>Add Your Work</button>
    <Modal size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Art Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
    <div className="col-lg-4">
      <label className="w-100 d-flex align-items-center flex-column justify-content-center">
        <input type="file" style={{display:'none'}} />
        <img height={'200px'} width={'200px'} className="mt-3" src={uploadProject} alt="project upload pic" />
        <p style={{fontSize:'15px', marginTop:'5px'}}>Upload Your Masterpiece</p>
      </label>
    </div>
    <div className="col-lg-8">
    <div className="mb-3">
      <input className="border rounded p-2 w-100" type="text" placeholder="Title of the Artwork" />
    </div>
    <div className="mb-3">
      <input className="border rounded p-2 w-100" type="text" placeholder="Medium Used" />
    </div>
    <div className="mb-3">
      <input className="border rounded p-2 w-100" type="text" placeholder="Inspiration or Concept Behind the Piece" />
    </div>
    <div className="mb-3">
      <input className="border rounded p-2 w-100" type="text" placeholder="Dimensions" />
    </div>
    <div className="mb-3">
      <input className="border rounded p-2 w-100" type="text" placeholder="Availability for Purchase (if applicable)" />
    </div>
    </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
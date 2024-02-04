import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import UploadProfile from '../assets/up1.png'


function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{marginBottom:'10px'}} className="border rounded p-2">
      <div className="d-flex justify-content-between">
        <h2 style={{color:"white"}}>Profile</h2>
        <button  onClick={() => setOpen(!open)} className="btn btn-outline-warning"><i className="fa-solid fa-caret-down"></i></button>
      </div>
      <Collapse in={open}>
        <div className='text-center' id="example-collapse-text">
          <label>
            <input type="file" style={{display:'none'}} />
            <img width={'150px'} height={'150px'} className='img-fluid rounded circlw' src={UploadProfile} alt="Upload Profile Picture"/>
          </label>
          <form>
           <div className='mt-3 mb-3'> 
           <input type="text" className="rounded p-1 w-75" placeholder='Artist Biography' />
           </div>
           <div className='mb-3'> 
           <input type="text" className="rounded p-1 w-75" placeholder='Portfolio' />
           </div>
           <div className="mb-3 d-grid w-75 mx-auto">
            <button className='btn btn-warning'>Update</button>
           </div>
          </form>
        </div>
      </Collapse>
    </div>
  )
}

export default Profile
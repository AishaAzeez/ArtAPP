import Add from "../Components/Add"
import Edit from "../Components/Edit"

function MyProjects() {
  return (
    <div style={{marginBottom:'10px'}}  className="border rounded p-2">
      <div className="d-flex justify-content-between">
        <h2 style={{color:'white'}}>Add</h2>
        <Add/>
      </div>
<div className="mt-4">
<div className="border rounded d-flex justify-content-between align-items-center mb-3 p-2">
<h5 style={{color:'white'}}>Title</h5>
<div className="icons d-flex align-items-center">
  <Edit/>
<button className="btn btn-link text-danger ms-2"><i style={{height:'34px'}} className="fa-solid fa-trash fa-2x"></i></button>
</div>
</div>
</div>
    </div>
  )
}

export default MyProjects
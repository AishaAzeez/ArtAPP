import Header from "../components/Header"
import MyProjects from "../Components/MyProjects"
import Profile from "../Components/Profile"


function Dashboard() {
  return (
    <>
    <Header insideDashboard/>
  <div style={{marginTop:"100px",height:'100vh',backgroundColor: '#1a1a1a'}}>
       <div style={{marginTop:'100px', marginBottom:'20px'}} className="pt-3 container-fluid"> 
       <h1 style={{color:'white'}}>Welcome <span className="text-warning">User</span></h1>
       <div className="row">
        <div className="col-lg-8">
          <MyProjects/>
        </div>
        <div className="col-lg-4">
          <Profile/>
        </div>
       </div>
       </div>
  </div>
    </>
  )
}

export default Dashboard
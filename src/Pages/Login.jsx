import './login.css';
import login from '../assets/login.jpeg';

function Login() {
  return (
    <>
        <div className='a1' style={{ marginTop:'100px', height: '1000px', backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='container a2' style={{ top: '100px', padding: '20px', height: '570px', width: '650px', backgroundColor: 'black' }}>
  
     <div style={{ width: '100%' ,overflow: 'hidden',borderRadius: '7px' }}>
                <img className='img-log' src={login} alt="" />
              </div>
  
  
             <div className='text-center' style={{marginTop:'10px'}}>
              <p style={{color:'white'}} className='h1'>Login to Your Account</p>
              <p className='p1' style={{ top:'6px'}}>To keep connected with us please emter your personal info !!!</p>
             </div>
  
        <div  style={{height:'40px'}}  className='row usepa'>
      <div className='col-lg-6'>
      <input className='a3' style={{width:'100%',height:'100%', paddingLeft:'5px'}} type="text" placeholder="Username" />
      </div>
  
      <div className='col-lg-6'>
      <input className='a4' style={{width:'100%',height:'100%', paddingLeft:'5px'}} type="text" placeholder="Password" />
  
      </div>
        </div>
  
      <div style={{marginTop:'15px'}} className='text-center login'>
  <button className='b1' style={{ width:'325px',height:'42px', borderRadius:"7px",color:'white'}}>Login</button>
      </div>
  
      <div style={{marginTop:'10px'}} className='p8 text-center d-flex justify-content-center align-items-center'>
        <div style={{width:'325px',color:'white'}} className="container row hr1">
        
          <div className="col-lg-5"><hr /></div>
          <div className="col-lg-2">or</div>
          <div className="col-lg-5"><hr /></div>
         
        </div>
      </div>
  
      <div className='text-center'>
      <button className='b2' style={{width:'325px',height:'42px',padding:'2px', fontSize:'13px'}}>
                  <img style={{height:'14px', marginRight:"4px"}} className='img-fluid' src="https://i.postimg.cc/G2Nqd2yB/download-removebg-preview.png" alt="" />
       <span > Connect with google</span></button>
  
      </div>
        
          </div>
        </div>
    
    </>
  );
}

export default Login;
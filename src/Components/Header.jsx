
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <>
    <div style={{position:'fixed',top:'0px',zIndex:'1000'}}>
      
      <Navbar style={{ backgroundColor: 'black' }} expand="lg" fixed="top">
      <Navbar.Brand style={{ color: 'white' }} className='ms-5' href="#home">Wall+</Navbar.Brand>
      <Navbar.Toggle style={{ background: 'white' }} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto text-center"> 
          <Nav.Link style={{ color: 'white' }} href="#home">Home</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#home">Login | Register</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#pricing">Dashboard</Nav.Link>
        </Nav> </Navbar.Collapse>      
    </Navbar> 
    <div style={{height:'100px',width:'100%',backgroundColor: 'black',position:'fixed' }}>
        <h1 style={{color:'white'}}>WALL+</h1></div>
    </div></>
  )
}

export default Header
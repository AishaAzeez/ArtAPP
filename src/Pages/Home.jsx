import { Link } from 'react-router-dom'
import ArtCard from '../Components/ArtCard'
import landing from '../assets/ph.jpeg'
import { useEffect, useState } from 'react';
import './home.css'
function Home() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Set a delay to show the title after the background image has loaded
    const delayToShowTitle = setTimeout(() => {
      setShowTitle(true);
    }, 1000);

    return () => clearTimeout(delayToShowTitle);
  }, []);

  return (
    <>
  <div style={{marginTop:'100px',height: '90vh', backgroundColor: 'black', backgroundImage: `url(${landing})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }} className="w-100 d-flex justify-content-center align-items-end">
      <div  className={`landing-title ${showTitle ? 'visible' : ''}`}>
        <h1 id='h1'>"<span style={{ background: 'linear-gradient(45deg, #FF4040 18.56%, #A20BD8)',WebkitBackgroundClip:' text ',WebkitTextFillColor:'transparent'}}>Elevate</span> Your Senses with Fine Art"</h1>
        <p className='full-screen d-flex align-items-center justify-content-center alight-content-center text-center flex-column p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum, aspernatur doloremque odit dolore velit aliquid illo maiores cupiditate iusto quisquam inventore necessitatibus optio debitis alias. Officia, veniam. Nostrum, atque!</p>
    <div style={{textAlign:'center'}}>
       <Link to={'/login'} style={{background:'transparent',textDecoration:'none'}} className='button'>Get Started</Link></div>
      </div>
    </div>





<div style={{marginTop:'-48px', backgroundColor:'black'}}>
<div>
  <h1 style={{color:'white'}} className="text-center mt-5 mb-5">Most Popular Arts</h1>
  <marquee>
    <div className="d-flex">
      <div style={{height:"300px"}} className="project me-5">
        <ArtCard/>
      </div>
    </div>
  </marquee>
  <div className="text-center">
    {/* <Link to={'/projects'} className="btn btn-link">View More Projects</Link> */}
  </div>
 </div> <br /> <br /> <br /> <br />

</div> 
</>
  )
}

export default Home
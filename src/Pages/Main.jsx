import { Col, Row } from "react-bootstrap";
import Header from "../components/Header";
import landing from '../assets/landingg.png';
import './MainPa.css';
import ArtCard from "../Components/ArtCard";

function Main() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '60px', backgroundColor: 'black', width: '100%' }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4" style={{ backgroundImage: `url(${landing})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px', width: '100%' }}>
              <div style={{ marginTop: "90px" }} className="text-center">
                <p className="text-center" style={{ fontSize: "60px", color: "white", fontWeight: 'bold' }}>WELCOME</p>
                <p style={{ fontSize: '15px', marginTop: "-23px", color: 'white' }}>Millions of arts are here to discover. Explore now.</p>
               
                <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">Search</button>
    </div>

              </div>
            </div>
          </div>

          <Row className="mt-5">
            <Col sm={12} md={6} lg={4}>
              <ArtCard />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Main;

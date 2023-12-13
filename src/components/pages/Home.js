import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
// import About from './components/pages/About';
import About from '../pages/About';
import Life from '../pages/Life';



function Home() {
  return (
    <div className="homepage">
      <div className="container-fixed">
        <Carousel>
          <Carousel.Item interval={1000}>
          <img src={slider1} alt="slider1" style={{height:680,width:1700}}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img src={slider2} alt="slider2" style={{height:680,width:1700}}/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={slider3} alt="slider3" style={{height:680,width:1700}} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <About/>
      <Life/>
      </div>
      
    </div>
    
    
  );
}

export default Home;

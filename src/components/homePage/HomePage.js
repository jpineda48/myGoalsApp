import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



const HomePage = () => {

    const fontStyle ={
        fontSize:'60px',
        color: 'yellow',
        fontFamily:'PT Serif, serif',
        textShadow: '2px 2px black',
        textAlign:'left'
        
        
    }
  return (
    <div>
     <Carousel data-bs-theme="dark" class="carousel slide" data-ride="carousel" data-interval="1000" >
      <Carousel.Item>
        <img
          className="d-block m-auto rounded-1"
          style={{width: '900px', height:'400px', opacity: '0.5'}}
          src="https://i.imgur.com/tyKoP9d.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto rounded-1 me-1"
          style={{height:'500px', opacity: '0.5'}}
          src="https://i.imgur.com/w8mkg46.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
            <div style={fontStyle }>
                
                <p >Set intentions through goals.</p>
                <br/>
                <br/>
            </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded-1"
          style={{height:'500px', opacity: '0.5'}}
          src="https://i.imgur.com/e7Mfh5J.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{color:'white'}}>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HomePage

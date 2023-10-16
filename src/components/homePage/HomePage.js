import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



const HomePage = () => {

    const fontStyle ={
        color:'white',
        background: 'black',
        opacity: '0.5',
        fontSize:'40px'
        
    }
  return (
    <div>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block m-auto rounded-1"
          style={{width: '900px', height:'400px', opacity: '0.5'}}
          src="https://i.imgur.com/tyKoP9d.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

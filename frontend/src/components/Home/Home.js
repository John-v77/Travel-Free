import React from 'react';
import Slider from 'react-slick';
import './Home.css'


function Home(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      
        <div className='carusel'>
            <h2>Explore a world of posibilities!</h2>
            <Slider {...settings}>
      <div>
      <img className= 'multi-dest' src = './Images/Multi-dest.jpg' alt= 'multiple destinations'/>
      </div>
      <div >
        <img className= 'Tokyo' src = './Images/1-3.jpg' alt= 'Tokyo'/>
      </div>
      <div>
      <img className= 'Turkey' src = './Images/1-6.jpg' alt= 'Turkey'/>
      </div>
      <div>
      <img className= 'Albania' src = './Images/1b_Albania.jpg' alt= 'Albania'/>
      </div>
      <div>
      <img className= 'Thai' src = './Images/123.jpg' alt= 'Thailan'/>
      </div>
      <div>
      <img className= 'Singapore' src = './Images/1234.jpg' alt= 'Singapore'/>
      </div>
      
    </Slider>

            
        </div>
    );
}

export default Home;
import React from "react";
import outlierHQ from '../images/outlier-headquarters.png';
// import Slider from "react-slick";

const Hero = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
	return (
        <div className="hero">
            <div className="hero__slider-content">
                <div className="hero__img-container">
                    <img src={outlierHQ} alt="Outlier HQ"/>
                </div>
                <div className="hero__content">
                    <h3 className="hero__content-heading">we are<br/>
                        <strong>outlier</strong>
                    </h3>
               <p>
                Ten years ago, Outlier was made made of only a few entrepreneurs. Over the next few years, we developed,bought and built the companies you see Headers. Now 12,000 strong and driving $1B in revenue but still driven by a small but might team of operating expoerts, we are Outlier. And we are just getting started.
                 </p>
                
            </div>
        </div>
        </div>
	// 	<Slider {...settings}>
    //         <div>
    //             <h3>we are</h3>
    //             <p>outlier</p>
    //             <p>
    //             Ten years ago, Outlier was made made of only a few entrepreneurs. Over the next few years, we developed,bought and built the companies you see Headers. Now 12,000 strong and driving $1B in revenue but still driven by a small but might team of operating expoerts, we are Outlier. And we are just getting started.
    //             </p>
    //         </div>
    //         <div>
    //             <h3>2</h3>
    //         </div>
    //         <div>
    //             <h3>3</h3>
    //         </div>
    //   </Slider>
	);
};

export default Hero;



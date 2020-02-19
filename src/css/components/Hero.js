import React from "react";
import Slider from "react-slick";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
	return (
		<Slider {...settings}>
            <div>
                <h3>we are</h3>
                <p>outlier</p>
                <p>
                Ten years ago, Outlier was made made of only a few entrepreneurs. Over the next few yeras, we developed,bought and built the companies you see Headers. Now 12,000 strong and driving $1B in revenue but still driven by a small but might team of operating expoerts, we are Outlier. And we are just getting started.
                </p>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
      </Slider>
	);
};

export default Hero;



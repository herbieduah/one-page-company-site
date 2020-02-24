import React from "react";

const Hero = () => {
	return (
		<div className="numbers">
           <div className="row">
                <div className="col-66 numbers__by-the-numbers all-caps">
                    <p>by the <span className="standout">numbers</span></p>
                </div>
                <div className="col-33 numbers__text-gray-bg">
                    <p>
                        The good news: every single company we run is profitable. The great news: every company is also growing at an aggressive clip. This combination enables us to fund future acquisitions completely internally. Now <span className="all-caps">that</span>'s insane.
                    </p>
                </div>   
           </div>
           <div className="row all-caps">
                <div className="col-33 numbers__gross-rev">
                    <span className="numbers__callout">$1B</span>
                    <span className="numbers__callout-text">gross revenue</span>
                </div>
                <div className="col-33 numbers__worldwide">
                    <span className="numbers__callout">$1,015</span>
                    <span className="numbers__callout-text">locations worldwide</span>
                </div>
                <div className="col-33 numbers__yoy">
                    <span className="numbers__callout">44%</span>
                    <span className="numbers__callout-text numbers__callout-text--yoy">year-over-year growth</span>
                </div>  
           </div>
           <div className="row">
                <div className="col-33 numbers__text-main-bg">
                    <p>
                        We thought you might like to see the folks that make the magic happen each day. While they look normal. We assure you that every one of them is very much an Outlier.
                    </p>
                </div>  
                <div className="col-66 numbers__meet-team all-caps">
                    <p>meet the <span className="standout">team</span></p>
                </div> 
           </div>
       
            
        </div>
	);
};


export default Hero;




import React from "react";

const Hero = () => {
	return (
		<div className="numbers">
            <div className="numbers__info">
                <h2>12,000</h2>
                <p>Our people rock. They make up who we are and drive where we're going. That's why we are proud to support the 12,000 incredible team members that choose to work under one of Outlier's companies every day.pre
                </p>
            </div>
            <div className="numbers__timeline">
                <div className="timeline">
                    <span>then</span>
                    <span>now</span>

                </div>
            </div>
            
        </div>
	);
};


export const Timeline = props => {
	const year = props.year;
    const title = props.title;
    const locations = props.locations;
    const team = props.team;
	return (
        <div className="timeline__info">
            {year ? 
            (<span className="timeline__year">
                ${year}
            </span> )
            : ''}
            <span className="timeline__title">
                {title}
            </span>
            <span className="timeline__location">
                {locations}
            </span>
            <span className="timeline__team">
                {team}
            </span>
        </div>
    );
};

export default Hero;




import React from "react";

const Timeline = () => {
  return (
    <div className="history">
      <div className="history__employees-blurb">
        <h2 className="history__employees">12,000</h2>
        <p className="history__blurb history__blurb--desktop">
          Our people rock. They make up who we are and drive where we're going. That's why we are proud to support the
          12,000 incredible team members that choose to work under one of Outlier's companies every day.
        </p>
        <p className="history__blurb history__blurb--mobile">team members strong</p>
      </div>
      <div className="timeline">
        <div className="timeline__line">
          <div className="timeline__info timeline__info--start">
            <div className="timeline__content">
              {/* <h3></h3> */}
              <p>entrepreneurial ventures</p>
              <span>1 location</span>
              <span>2 people</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TimelineValues = props => {
  //   const year = props.year;
  //   const title = props.title;
  //   const locations = props.locations;
  //   const team = props.team;
  const { year, title, locations, team } = props;
  return (
    <div className="timeline__info">
      {year ? <span className="timeline__year">${year}</span> : ""}
      <span className="timeline__title">{title}</span>
      <span className="timeline__location">{locations}</span>
      <span className="timeline__team">{team}</span>
    </div>
  );
};

export default Timeline;

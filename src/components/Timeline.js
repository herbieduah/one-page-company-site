import React, { Fragment } from "react";

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
          {/* <TimelineDate values={timelineData.estHealthDivision} />
          <TimelineDate values={timelineData.expandedHealthCareDivision} /> */}
          <TimelineDates />
        </div>
        {/* <div className="timeline__line">
          <div className="timeline__info timeline__info--start">
            <div className="timeline__content">
            
              <p>entrepreneurial ventures</p>
              <span>1 location</span>
              <span>2 people</span>
            </div>
          </div>
        </div> */}

        {/* <div
          className="timeline__line"
          style={{
            left: `20%`
          }}>
          <div className="timeline__info timeline__info--top">
            <div className="timeline__content">
              <h3>2010</h3>
              <p>eestablished healthcare division</p>
              <span>1 location</span>
              <span>2 people</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export const TimelineDate = props => {
  const { year, title, location, team, pos, placement } = props.values;
  const placementClass = placement ? `timeline__info--${placement}` : "";
  return (
    <div
      className={`timeline__info ${placementClass}`}
      style={{
        left: `${pos}%`
      }}>
      <div className="timeline__content">
        {year ? <span className="timeline__year">{year}</span> : ""}
        <span className="timeline__title">{title}</span>
        <span className="timeline__location">{location}&nbsp; Locations </span>
        <span className="timeline__team">{team}&nbsp;Team Members</span>
      </div>
    </div>
  );
};

const timelineData = [
  {
    year: "",
    title: "entrepreneural ventures",
    location: "1",
    team: "2",
    pos: "7",
    placement: "start"
  },
  {
    year: "2010",
    title: "established health care division",
    location: "1",
    team: "6",
    pos: "25",
    placement: "top"
  },
  {
    year: "2012",
    title: "Expanded health care division",
    location: "150",
    team: "6",
    pos: "34",
    placement: "bottom"
  },
  {
    year: "2014",
    title: "established real estate division",
    location: "650",
    team: "???",
    pos: "44",
    placement: "top"
  },
  {
    year: "2015",
    title: "Established entertainment division",
    location: "800",
    team: "1000",
    pos: "51",
    placement: "bottom"
  },
  {
    year: "2016",
    title: "Established outdoor division",
    location: "650",
    team: "???",
    pos: "64",
    placement: "top "
  },
  {
    year: "2018",
    title: "Hit $1B in revenue and established out door division",
    location: "1100",
    team: "??",
    pos: "73",
    placement: "bottom"
  },
  {
    year: "165k sq ft hq",
    title: "",
    location: "1100+",
    team: "1200+",
    pos: "87",
    placement: "finish"
  }
];

const TimelineDates = () => {
  return (
    <Fragment>
      {timelineData.map((data, index) => (
        <TimelineDate key={index} values={data} />
      ))}
    </Fragment>
  );
};

export default Timeline;

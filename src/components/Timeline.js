import React, { Fragment } from "react";
import timelineData from "../timelinedata";

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
          <TimelineDates />
        </div>
      </div>
      <div className="timeline-mobile">
        <div className="timeline-mobile__line">
          <TimelineDates mobile={true} />
        </div>
      </div>
    </div>
  );
};

export const TimelineDate = props => {
  const { year, title, location, team, pos, placement } = props.values;
  const timelineClass = props.mobile ? "timeline-mobile__" : "timeline__";
  const placementClass = placement ? `${timelineClass}info--${placement}` : "";
  const timelineStyle = props.mobile ? { top: `${pos}%`, bottom: "auto" } : { left: `${pos}%` };
  return (
    <div className={`${timelineClass}info ${placementClass}`} style={timelineStyle}>
      <div className={`${timelineClass}content`}>
        {year ? <span className={`${timelineClass}year`}>{year}</span> : ""}
        <span className={`${timelineClass}title`}>{title}</span>
        <span className={`${timelineClass}location`}>{location}&nbsp; Locations</span>
        <span className={`${timelineClass}team`}>{team}&nbsp;Team Members</span>
      </div>
    </div>
  );
};

const TimelineDates = props => {
  return (
    <Fragment>
      {timelineData.map((data, index) => (
        <TimelineDate key={index} values={data} mobile={props.mobile} />
      ))}
    </Fragment>
  );
};

export default Timeline;

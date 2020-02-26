// import React, { Component } from 'react';
import React, { useState, Fragment } from "react";
import Information from "../meettheteamdata";

function MeetTheTeam() {
  const [search, setSearch] = useState(null);

  const searchSpace = event => {
    let keyword = event.target.value;
    setSearch(keyword);
  };
  // eslint-disable-next-line
  const items = Information.filter(data => {
    if (search === null) {
      return data;
    } else if (
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.position.toLowerCase().includes(search.toLowerCase())
    ) {
      return data;
    }
  }).map(data => {
    return (
      <Fragment key={data.name}>
        <li className="meettheteam__item">
          <div className="meettheteam__item-container">
            {/* <img src={data.image} alt={data.name} className="meettheteam__image"/> */}
            <div
              className="meettheteam__image"
              style={{
                backgroundImage: `url(${data.image}`
              }}></div>
            <span className="meettheteam__name">{data.name}</span>
            <span className="meettheteam__position">{data.position}</span>
          </div>
        </li>
      </Fragment>
    );
  });

  return (
    <div className="meettheteam">
      <div className="meettheteam__search-container">
        <input
          className="meettheteam__search"
          type="text"
          placeholder="Search for an Outlier"
          onChange={e => searchSpace(e)}
        />
      </div>
      <ul className="meettheteam__items">{items}</ul>
    </div>
  );
}

export default MeetTheTeam;

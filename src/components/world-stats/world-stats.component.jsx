import React from 'react';

import "./world-stats.css";

const Totalstats = props => {
  return (
    <div className="my-card mt-5">
      <div className="my-card-header">
        <h1 className="my-card-headline">Quick Facts</h1>
        <small className="my-card-note">updated: a few seconds ago <br/>(NOTE: Not all countries update at the same time)
        </small>
      </div>
      <div className="my-card-body">
        <p className="my-card-number-cases">{props.stats.cases}</p>
        <p className="my-card-text">Total Confirmed Cases</p>

        <p className="my-card-number-deaths">{props.stats.deaths}</p>
        <p className="my-card-text">Total Deceased</p>

        <p className="my-card-number-recovered">{props.stats.recovered}</p>
        <p className="my-card-text">Total Serious</p>
      </div>         
    </div>
  );
};

export default Totalstats;
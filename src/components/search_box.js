import React, { PureComponent } from 'react';

import JobSearchForm from './forms/job_search';
import TalentSearchForm from './forms/talent_search';

import '../styles/search_box.scss';

class SearchBox extends PureComponent {
  render() {
    // const {jobsCount, talentsCount} = this.props.store;
    let jobsCount, talentsCount;

    return (
      <div className="search-box">
        <div className="jobs">
          <h1 className="title">Looking for a job?</h1>
          <JobSearchForm />
          <div className="info">
            <h2>
              Open Positions
              <p>{jobsCount}</p>
            </h2>
          </div>
        </div>
        <div className="talents">
          <h1 className="title">Looking for a talent?</h1>
          <TalentSearchForm />
          <div className="info">
            <h2>
              Talents
              <p>{talentsCount}</p>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;

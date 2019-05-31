import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from 'react-spinkit';

import Map from '../components/map';
import JobItem from '../components/job/item';

import '../styles/jobs.scss';

class Jobs extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: this.props.query,
      company: {}
    };
  }

  componentDidMount() {
    const {uid, query} = this.props;
  }

  render() {
    let jobs;
    const {query} = this.state;

    let jobList, jobMessage;

    const onSubmit = e => {
      e.preventDefault();
      let {query} = this.state;
    };

    const onChange = e => {
      let {value} = e.target;

      this.setState({query: value});
    };

    const onOpen = job => {
      let center = {lng: parseFloat(job.company.longitude), lat: parseFloat(job.company.latitude)}
      this.setState({company: job.company});
    };

    if (jobs) {
      if (jobs.length > 0) {
        jobList = jobs.map(job => <JobItem key={job.id} {...{job, onOpen}} />);
        jobMessage = <p>{jobs.length} results</p>
      } else {
        jobList = (
          <div className="empty">
            <FontAwesomeIcon icon="briefcase" />
            <p>There are no jobs.</p>
          </div>
        );
      }
    } else {
      jobList = <Spinner spinnerName="double-bounce" overrideSpinnerClassName="spinner" />;
    }

    return (
      <div className="jobs">
        <div className="view">
          <div className="search">
            <form {...{onSubmit}}>
            <input {...{type: "text", value: query, onChange, placeholder: "Search for a skill or company"}} />
              <FontAwesomeIcon icon="search" />
            </form>
            {jobMessage}
          </div>
          <div className="list">
            {jobList}
          </div>
        </div>
        <Map {...{...this.props.store, ...this.state}} />
      </div>
    );
  }
}

export default Jobs;

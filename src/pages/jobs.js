import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withApollo } from 'react-apollo'

import Map from '../components/map'
import JobItem from '../components/job/item'
import { JOBS_QUERY } from '../queries'

import '../styles/jobs.scss'

class Jobs extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      currentJob: null,
      jobs: [],
      filteredJobs: [],
      query: props.query
    }
  }

  componentDidMount() {
    this.props.client.query({
      query: JOBS_QUERY
    }).then(response => {
      this.setState(
        {
          jobs: response.data.allJobs.data,
          filteredJobs: response.data.allJobs.data
        }
      )
    })
  }

  onOpen(job) {
    this.setState({currentJob: job})
  }

  onChange(e) {
    let filteredJobs = this.state.jobs
    filteredJobs = filteredJobs.filter(job => job.title.includes(e.target.value))
    this.setState({filteredJobs})
  }

  render() {
    const {query, filteredJobs, currentJob} = this.state

    return (
      <div className="jobs">
        <div className="view">
          <div className="search">
            <input
              type="text"
              placeholder="Search for a skill or company"
              value={query}
              onChange={event => this.onChange(event)}
            />
            <FontAwesomeIcon icon="search" />
          </div>
          <div className="list">
            {filteredJobs.map((job, index) => (
              <JobItem key={index} job={job} onOpen={job => this.onOpen(job)} />
            ))}
          </div>
        </div>
        <Map jobs={filteredJobs} currentJob={currentJob}/>
      </div>
    )
  }
}

export default withApollo(Jobs)

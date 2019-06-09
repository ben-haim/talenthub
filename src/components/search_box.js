import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { JOBS_QUERY } from '../queries'

import '../styles/search_box.scss'

class SearchBox extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      jobs: [],
      query: ''
    }
  }

  componentDidMount() {
    this.props.client.query({
      query: JOBS_QUERY
    }).then(response => {
      this.setState(
        {
          jobs: response.data.allJobs.data
        }
      )
    })
  }

  onChange(e) {
    this.setState({query: e.target.value})
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      this.props.history.push(`/jobs/${this.state.query}`);
    }
  }

  render() {
    const { jobs, query } = this.state;

    return (
      <div className="search-box">
        <div className="jobs">
          <h1 className="title">Looking for a job?</h1>
          <div className="search-form">
            <input
              type="text"
              placeholder="Search for a job title"
              value={query}
              onChange={event => this.onChange(event)}
              onKeyPress={event => this.onKeyPress(event)}
            />
            <FontAwesomeIcon icon="search" />
          </div>
          <div className="info">
            <h2>
              Open Positions
              <p>{jobs.length}</p>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withApollo(SearchBox))

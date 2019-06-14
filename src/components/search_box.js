import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Query } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { JOBS_QUERY } from '../queries'

import '../styles/search_box.scss'

class SearchBox extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      query: ''
    }
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
    const { query } = this.state;

    return (
      <Query query={JOBS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading..."
          if (error) return `Error! ${error.message}`

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
                    <p>{data.allJobs.data.length}</p>
                  </h2>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default withRouter(SearchBox)

import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Query } from 'react-apollo'
import { FIND_JOB } from '../queries'

import InputWithLabel from '../components/base/input_with_label'
import '../styles/apply.scss'

class ApplyPage extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: ''
    }
  }

  onChange(e) {
    this.setState({profile: e.target.value})
  }

  render() {
    const { match } = this.props

    return (
      <Query query={FIND_JOB} variables={{id: match.params.query}}>
        {({ loading, error, data }) => {
          if (loading) return "Loading..."
          if (error) return `Error! ${error.message}`

          return (
            <div className="apply">
              <div className="header">
                <img src={data.findJobByID.company.logo} alt="company logo"/>
                <h1>{data.findJobByID.title}</h1>
              </div>
              <hr />
              <div className="profile">
                <InputWithLabel
                  name="profile"
                  valid={true}
                  label="Linkedin profile URL*"
                  placeholder="https://www.linkedin.com/in/guacamole/"
                  value={this.state.profile}
                  onChange={event => {this.onChange(event)}}
                />
              </div>
              <div className="action">
                <button className="button">
                  <FontAwesomeIcon icon="rocket"/>
                  Submit
                </button>
              </div>
            </div>
          )
        }}  
      </Query>
    )
  }
}

export default ApplyPage

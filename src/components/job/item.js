import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Html from 'slate-html-serializer'

import { RULES } from '../base/text_editor_config'

const HTML = new Html({ rules: RULES })

class JobItem extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showMode: false,
    };
  }

  onToggle() {
    const { job, onOpen } = this.props

    this.setState({showMode: !this.state.showMode})
    onOpen(job)
  }

  render() {
    const { job } = this.props
    const { showMode } = this.state

    const description = HTML.serialize(JSON.parse(job.description))

    return (
      <div className={job.promoted ? "item promoted" : "item"}>
        <div onClick={() => this.onToggle()} className="header">
          <div className="logo">
            <img src={job.company.logo} alt="logo"/>
          </div>
          <div className="title">
            <h3>
              {job.title.length > 40 ? job.title.slice(0, 40) + '...' : job.title }
            </h3>
            <p>
              {job.company.name}
            </p>
          </div>
          <div className="details">
            <h3>
              {job.company.address}
            </h3>
            <p>
              {moment(job.createdAt).from(moment())}
            </p>
          </div>
        </div>
        {showMode &&
          <div className="footer">
            <div className="description">
              <h3>About {job.company.name}</h3>
              <p>{job.company.description}</p>
              <h3 className="block">Job Description</h3>
              <div dangerouslySetInnerHTML={{__html: description}} />
            </div>
            <div className="action">
              <Link className="button apply-button" to={`/apply/${job._id}`} target="blank">
                Apply
              </Link>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default JobItem

import React, { PureComponent } from 'react';
import moment from 'moment';

import ShareLink from './share_link';

class JobItem extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMode: false,
      showShareLink: false
    };
  }

  render() {
    const {job} = this.props;
    const {showMode, showShareLink} = this.state;
    let actionContent;

    const email = `${job.company.email}?Subject=[TalentHub]%20${job.title}`

    const toggleShowMode = () => {
      if (showMode) {
        this.setState({showMode: false});
      } else {
        this.setState({showMode: true});
      }
      this.props.onOpen(job);
    }

    const toggleShareLink = () => this.setState({showShareLink: true});

    if (job.applyByEmail) {
      actionContent = (
        <div className="action">
          <div className="apply-by-email">
            <p>
              Apply by sending an email to <a href={`mailto:${email}`}>{job.company.email}</a>
            </p>
          </div>
          <ShareLink {...{job, toggleShareLink, showShareLink}}/>
        </div>
      );
    } else {
      actionContent = (
        <div className="action">
          <a href={`${job.source}?ref=talenthub`} target="blank" className="button apply-button">
            Apply
          </a>
          <ShareLink {...{job, toggleShareLink, showShareLink}}/>
        </div>
      );
    }

    return (
      <div className={job.promoted ? "item promoted" : "item"}>
        <div onClick={toggleShowMode} className="header">
          <div className="logo">
            {job.company.logo.includes('https') ? <img src={job.company.logo} /> : <img src={'/' + job.company.logo} />}
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
              {job.company.address.split(",")[0]}
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
              {job.responsibilities &&
                <div>
                  <h3>Responsibilities</h3>
                  <ul>
                    {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              }
              {job.requirements &&
                <div>
                  <h3>Requirements</h3>
                  <ul>
                    {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              }
            </div>
            {actionContent}
          </div>
        }
      </div>
    );
  }
}

export default JobItem;

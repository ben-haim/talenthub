import React, { PureComponent } from 'react';
import moment from 'moment';

class JobItem extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMode: false,
    };
  }

  render() {
    const {job} = this.props;
    const {showMode} = this.state;

    const toggleShowMode = () => {
      if (showMode) {
        this.setState({showMode: false});
      } else {
        this.setState({showMode: true});
      }
      this.props.onOpen(job);
    }

    return (
      <div className={job.promoted ? "item promoted" : "item"}>
        <div onClick={toggleShowMode} className="header">
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
            <div className="action">
              <a href={`${job.source}?ref=talenthub`} target="blank" className="button apply-button">
                Apply
              </a>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default JobItem;

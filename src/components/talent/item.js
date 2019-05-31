import React, { PureComponent } from 'react';
import moment from 'moment';

import Skill from './skill';

class TalentItem extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMode: false
    };
  }

  render() {
    const {talent} = this.props;
    let skillList = talent.skills.map(skill => <Skill key={skill.id} {...{skill}} />);

    const toggleShowMode = e => {
      e.preventDefault();
      if (this.state.showMode) {
        this.setState({showMode: false});
      } else {
        this.setState({showMode: true});
      }
    };

    const goToLink = link => {
      return e => {
        e.preventDefault();
      };
    };

    return (
      <div className="item">
        <div onClick={toggleShowMode} className="header">
          <div className="avatar">
            <img src={talent.avatar} />
          </div>
          <div className="title">
            <h3>
              {talent.first_name} {talent.last_name}
            </h3>
            <p>{talent.company}</p>
          </div>
          <div className="details">
            <h3>
              {talent.location}
            </h3>
              { moment().diff(moment(talent.created_at), 'days') < 7 ?
                  <p className="just-added">Just added</p>
                  :
                  <p className="timestamp">{moment(talent.created_at).format("MMM Do")}</p>
              }
          </div>
        </div>
        { this.state.showMode &&
          <div className="footer">
            <div className="description">
              {talent.bio &&
                <div>
                  <h3>Biography</h3>
                  <p>{talent.bio}</p>
                </div>
              }
              <h3>Skills</h3>
              <ul>
                {skillList}
              </ul>
            </div>
            <div className="action">
              <a onClick={goToLink(`/invite/${talent.uid}`)} className="invite-button">
                Details
              </a>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default TalentItem;

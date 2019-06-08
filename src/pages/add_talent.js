import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mutation } from 'react-apollo'

import { CREATE_TALENT } from '../queries'
import InputWithLabel from '../components/base/input_with_label'
import TextWithLabel from '../components/base/text_with_label'

class AddTalent extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      bio: '',
      avatar: '',
      email: ''
    }
  }

  onChange(e) {
    const [context, field] = e.target.name.split('.')
    const value = e.target.value

    this.setState(prevState => ({
      [context]: {
        ...prevState[context],
        [field]: value,
      },
    }))
  }

  render() {
    const {name, bio, email} = this.state

    return (
      <div className="post">
        <div className="header">
          <h1>Add a talent</h1>
          <p>
            Please fill the form according to your needs.
            Fields prefixed with "*" are required, make sure to fill them out.
          </p>
        </div>
        <hr />
        <div>
          <div className="company">
            <h1>General info</h1>
            <div className="details">
              <InputWithLabel 
                name="name"
                label="Name*"
                placeholder="John Snow"
                value={name}
                valid={true}
                onChange={event => this.onChange(event)}
              />
            </div>
            <TextWithLabel
              name="bio"
              label="Biography"
              placeholder="Born to be a hacker!"
              value={bio}
              valid={true}
              onChange={event => this.onChange(event)}
            />
            <InputWithLabel
              name="email"
              label="Email*"
              placeholder="foo@bar.com"
              value={email}
              valid={true}
              onChange={event => this.onChange(event)}
            />
          </div>
        </div>
        <div className="action">
          <Mutation
            mutation={CREATE_TALENT}
            onCompleted={() => this.setState({completed: true})}
          >
            {createTalent => (
              <button onClick={createTalent} className="button">
                <FontAwesomeIcon icon="rocket"/>
                Submit
              </button>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default AddTalent;

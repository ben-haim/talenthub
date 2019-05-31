import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import InputWithLabel from '../components/base/input_with_label';
import TextWithLabel from '../components/base/text_with_label';
import FileUpload from '../components/base/file_upload';

class AddTalent extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstName: '',
      lastName: '',
      bio: '',
      avatar: '',
      email: '',
      isValid: {
        name: true,
        website: true,
        address: true,
        title: true,
        email: true,
        requirements: true,
        responsibilities: true
      }
    };
  }

  render() {
    const {firstName, lastName, bio, email, avatar} = this.state;
    let message;

    let content;

    const onImageUpload = avatar => this.setState({avatar});
    const onChange = e => this.setState({[e.currentTarget.name]: e.target.value});
    const onSubmit = e => {
      window.scrollTo(0,0);
    };

    if (message) {
      content = (
        <div className="post">
          <div className="header">
            <h1 className="final">
              {message}
              <span>&#x1F44B;</span>
            </h1>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="post">
          <div className="header">
            <h1>Create a talent</h1>
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
                <div className="left">
                  <InputWithLabel {...{name: "firstName", valid: true, label: "First name*", placeholder: "Foo", value: firstName, onChange}}/>
                  <InputWithLabel {...{name: "lastName", valid: true, label: "Last website*", placeholder: "Bar", value: lastName, onChange}}/>
                </div>
                <div className="right">
                  <FileUpload {...{name: "avatar", label: "Avatar", onImageUpload}} />
                </div>
              </div>
              <TextWithLabel {...{name: "bio", valid: true, label: "Biography", placeholder: "Born to be a hacker!", value: bio, onChange}} />
              <InputWithLabel {...{name: "email", valid: true, label: "Email*", placeholder: "foo@bar.com", value: email, onChange}}/>
            </div>
          </div>
          <div>
            <hr />
            <div className="terms">
              <p>
                By creating a new talent you agree with:
                <br /><br />
                - Details provided above refer to an actual person.
                <br /><br />
                - I understand that my listing may be removed if it involves adult content, illegitimate work opportunity, incorrect job type, or contains inappropriate language.
              </p>
            </div>
            <div className="action">
              <a onClick={onSubmit} className="button">
                <FontAwesomeIcon icon="rocket"/>
                Submit
              </a>
            </div>
          </div>
        </div>
      );
    }

    return content;
  }
}

export default AddTalent;

import React, { PureComponent } from 'react';

import Header from '../components/post/header';
import Body from '../components/post/body';
import Footer from '../components/post/footer';

import '../styles/post_job.scss';
import '../styles/base/input.scss';

class PostPage extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      step: 1,
      type: 'promoted',
      promo: '',
      name: '',
      website: '',
      logo: '',
      description: '',
      address: '',
      lat: '',
      lng: '',
      title: '',
      requirements: '',
      responsibilities: '',
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
    const {step, type, name, promo, website, logo, description, address, lat, lng, title, requirements, responsibilities, email, isValid} = this.state;
    let message;

    const onAddressSelect = (address, lat, lng) => this.setState({address, lat, lng});
    const onImageUpload = logo => this.setState({logo});
    const onTypeClick = e => this.setState({type: e.target.id});
    const onChange = e => this.setState({[e.currentTarget.name]: e.target.value});
    const onBack = e => this.setState({step: 1});

    const onSubmit = e => {
      if (name === '' || website === '' || address === '' || title === '' || email === '') {
        let check = isValid;
        check.name = name === '' ? false : true;
        check.website = website === '' ? false : true;
        check.address = address === '' ? false : true;
        check.title = title === '' ? false : true;
        check.email = email === '' ? false : true;
        this.setState({isValid: check});
      } else {
        this.setState({step: 2});
        window.scrollTo(0,0);
      }
    };

    const onConfirm = e => {
      this.setState({step: 3});
      window.scrollTo(0,0);
    };

    return (
      <div className="post">
        <Header {...{step, message}} />
        <Body {...{step, type, name, promo, website, logo, description, address, lat, lng, title, requirements, responsibilities, email, isValid, onTypeClick, onChange, onImageUpload, onAddressSelect}} />
        <Footer {...{step, onSubmit, onBack, onConfirm}} />
      </div>
    );
  }
}

export default PostPage;

import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Mutation } from 'react-apollo'
import { CREATE_JOB } from '../queries'

import Map from '../components/map'
import InputWithLabel from '../components/base/input_with_label'
import TextWithLabel from '../components/base/text_with_label'
import TextEditor from '../components/base/text_editor'

import { OPTIONS } from '../config/post'

import '../styles/post_job.scss'
import '../styles/base/input.scss'

class PostPage extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      completed: false,
      company: {
        name: '',
        description: '',
        website: '',
        logo: '',
        address: '',
        lat: '',
        lng: '',
        email: ''
      },
      job: {
        type: 'promoted',
        title: '',
        requirements: '',
        responsibilities: '',
      }
    }
  }

  onAddressChange(address) {
    this.setState(prevState => ({
      company: {...prevState.company, address},
    }))
  }

  onAddressSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState(prevState => ({
          company: {
            ...prevState.company,
            address,
            lat: parseFloat(latLng.lat),
            lng: parseFloat(latLng.lng)
          },
        }))
      })
      .catch(error => console.error('Error', error))
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

  onEditorChange(field, data) {
    this.setState(prevState => ({
      job: {
        ...prevState.job,
        [field]: data,
      },
    }))
  }

  onTypeChange(e) {
    this.setState({job: {type: e.target.id}})
  }

  render() {
    const {company, job, completed} = this.state

    if (completed) return (
      <div className="post">
        <div className="header">
          <h1 className="final">
            Thank you! we saved the job posting. We will review and post it soon!
            <span role="img" aria-label="wave">👋</span>
          </h1>
        </div>      
      </div>
    )

    return (
      <div className="post">
        <div className="header">
          <h1>Create a job post</h1>
          <p>
            Please fill the form according to your needs.
            Fields prefixed with "*" are required, make sure to fill them out.
            <br />
            After successful save, we will review and make it public!
          </p>
        </div>
        <div>
          <hr />
          <div className="type">
            <h1>Choose post type</h1>
          </div>
          <div className="description">
            <div className="orders">
              {
                OPTIONS.map(option => {
                  let className = job.type === option.id ? 'order active' : 'order';
                  return (
                    <div className={className} id={option.id} key={option.id} onClick={event => this.onTypeChange(event)}>
                      <FontAwesomeIcon id={option.id} icon={option.icon} />
                      <div className="name" id={option.id}>{option.text}</div>
                      <div className="price" id={option.id}>{option.price}</div>
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="company">
            <h1>Company details</h1>
            <div className="details">
              <InputWithLabel
                name="company.name"
                valid={true}
                label="Company name*"
                placeholder="Awesome Company"
                value={company.name}
                onChange={event => this.onChange(event)}
              />
              <div className="row">
                <InputWithLabel
                  name="company.website"
                  valid={true}
                  label="Company website*"
                  placeholder="https://awesome-comp.com"
                  value={company.website}
                  onChange={event => this.onChange(event)}
                />
                <InputWithLabel
                  name="company.logo"
                  valid={true}
                  label="Company logo url*"
                  placeholder="https://awesome-comp.com/logo.png"
                  value={company.logo}
                  onChange={event => this.onChange(event)}
                />
              </div>
            </div>
            <TextWithLabel
              name="company.description"
              valid={true}
              label="Company description"
              placeholder="We are an awesome company. Our mission is to make world a better place!"
              value={company.description}
              onChange={event => this.onChange(event)}
            />
          </div>
          <div className="map">
            <Map currentPost={company}/>
            <div className="input-group">
              <label>Company address*</label>
              <PlacesAutocomplete
                options={{types: ['address']}}
                value={company.address}
                onChange={address => this.onAddressChange(address)}
                onSelect={address => this.onAddressSelect(address)}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <>
                    <input
                      {...getInputProps({
                        placeholder: 'Search for company address',
                        className: 'location-search-input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = 'suggestion';
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div className="input-group"
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <i className="fa fa-map-marker"/>
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </PlacesAutocomplete>
            </div>
          </div>
          <hr />
          <div className="job">
            <h1>Job details</h1>
            <InputWithLabel 
              name="job.title"
              valid={true}
              label="Job title*"
              placeholder="Javascript Rockstar!"
              value={job.title}
              onChange={event => this.onChange(event)}
            />
            <TextEditor
              name="requirements"
              label="Job requirements*"
              placeholder="Proven experience leading a small team"
              onChange={data => this.onEditorChange('requirements', data)}
            />
            <TextEditor
              name="responsibilities"
              label="Job responsibilities*"
              placeholder="Team coordination"
              onChange={data => this.onEditorChange('responsibilities', data)}
            />
          </div>
          <hr />
          <div className="contact">
            <h1>Contact details</h1>
            <InputWithLabel
              name="company.email"
              valid={true}
              label="Company email*"
              placeholder="hiring@awesome-comp.com"
              value={company.email}
              onChange={event => this.onChange(event)}
            />
          </div>
        </div>
        <div className="action">
          <Mutation
            mutation={CREATE_JOB}
            onCompleted={() => this.setState({completed: true})}
          >
            {(createJob, { error }) => (
              <button
                onClick={() => createJob({
                  variables: { 
                    type: job.type,
                    title: job.title,
                    name: company.name,
                    description: company.description,
                    requirements: job.requirements,
                    responsibilities: job.responsibilities,
                    website: company.website,
                    logo: company.logo,
                    address: company.address,
                    latitude: company.lat,
                    longitude: company.lng,
                    email: company.email
                  }
                })}
                className="button"
              >
                <FontAwesomeIcon icon="rocket"/>
                Submit
                {error && <p>Error :{error}</p>}
              </button>
            )}
          </Mutation>
        </div>
      </div>
    )
  }
}

export default PostPage

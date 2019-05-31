import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FileUpload extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      image: ''
    };
  }

  render() {
    const {label} = this.props;

    const handleClick = () => {
      this.refs.fileUpload.click();
    }
    const handleChange = e => {
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onload = (upload) => {
        this.setState({image: upload.target.result});
        this.props.onImageUpload(upload.target.result);
      };

      reader.readAsDataURL(file);
    }

    const img = this.state.image === "" ? <FontAwesomeIcon icon="file-image"/> : <img src={this.state.image} />

    return (
      <div className="input-group">
        <label>{label}</label>
        <div className="logo" onClick={handleClick}>
          {img}
          <input type="file" ref="fileUpload" accept="image/*" onChange={handleChange} />
        </div>
      </div>
    );
  }
}

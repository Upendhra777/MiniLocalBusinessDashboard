import { Component } from "react";
import "./index.css"

class InputForm extends Component {
  state = {
    name: "",
    location: "",
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeLocation = (event) => {
    this.setState({ location: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, location } = this.state;
    if (name && location) {
      this.props.onSubmit({ name, location });
    }
  };

  render() {
    const { name, location } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <div className="input-container">
            <input
          className="input-element"
          placeholder="Business Name"
          value={name}
          onChange={this.handleChangeName}
        />
        <input
          className="input-element"
          placeholder="Location"
          value={location}
          onChange={this.handleChangeLocation}
        />
        </div>
        
        <button type="submit" className="submit-btn bg-success">
          Submit
        </button>
      </form>
    );
  }
}

export default InputForm;

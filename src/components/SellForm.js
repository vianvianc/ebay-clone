import React from "react";
import { addOnePost } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SellForm.css";

class SellForm extends React.Component {
  state = {
    title: "",
    url: "",
    description: "",
    price: "",
    email: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addOnePost(this.state);
    this.setState({
      title: "",
      url: "",
      description: "",
      price: "",
      email: "",
      phone: ""
    });
  };

  render() {
    return (
      <div>
        <div className="form-title">Add your advertisment</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input-form"
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            className="input-form"
            type="text"
            name="url"
            placeholder="photo url"
            value={this.state.url}
            onChange={this.handleChange}
          />

          <input
            className="input-form"
            type="text"
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            className="input-form"
            type="text"
            name="price"
            placeholder="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <input
            className="input-form"
            type="text"
            name="email"
            placeholder="e-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className="input-form"
            type="text"
            name="phone"
            placeholder="phone number"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <input className="input-button" type="submit" value="Submit" />
        </form>
        <Link to="/">
          <button className="input-button">Back to the main page</button>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { addOnePost }
)(SellForm);

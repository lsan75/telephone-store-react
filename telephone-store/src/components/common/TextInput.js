import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input
            type="text"
            name={this.props.name}
            className="form-control"
            onChange={this.props.onChange}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default TextInput;

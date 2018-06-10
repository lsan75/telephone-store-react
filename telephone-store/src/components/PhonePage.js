import React, { PropTypes } from "react";
import PhoneApi from "../api/phoneApi";
import Phones from "./Phones";

class PhonePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    phones: [];
  }

  componentWillMount = function() {
    this.setState({ phones: PhoneApi.getAllPhones() });
  };

  render() {
    return (
      <div>
        <Phones phones={this.state.phones} />
      </div>
    );
  }
}

export default PhonePage;

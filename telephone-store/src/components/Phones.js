import React, { PropTypes } from "react";
import Phone from "./Phone";
import PhoneApi from "../api/phoneApi";

class Phones extends React.Component {
  constructor(props, context) {
    super(props, context);
    phones: [];
  }

  componentWillMount() {
    this.setState({ phones: PhoneApi.getAllPhones() });
  }

  render() {
    return <div>{this.state.phones.map(phone => <li>{phone.name}</li>)}</div>;
  }
}

export default Phones;

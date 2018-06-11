import React, { PropTypes } from "react";
import PhoneApi from "../../api/phoneApi";
import Phones from "./Phones";
import { Link } from "react-router-dom";

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
        <h1>liste des smartphones</h1>
        <div>
          <Link to="/managePhone">Ajouter un smartphone</Link>
        </div>
        <Phones phones={this.state.phones} />
      </div>
    );
  }
}

export default PhonePage;

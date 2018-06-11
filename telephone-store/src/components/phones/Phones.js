import React, { PropTypes } from "react";

class Phones extends React.Component {
  render() {
    return (
      <div>
        {this.props.phones.map(phone => <li>{phone.name}</li>)}
      </div>
    );
  }
}

export default Phones;

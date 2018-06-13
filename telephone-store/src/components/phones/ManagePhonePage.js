import React, { PropTypes } from "react";
import PhoneApi from "../../api/phoneApi";
import Phones from "./Phones";
import PhoneForm from "./PhoneForm";
import { Redirect } from "react-router";
import toastr from "toastr";

class ManagePhonePage extends React.Component {
  constructor(props) {
    super(props);
    //In the constructor, you should always assign to this.state directly.
    // Note that this is the only place where this is allowed.
    //You should use this.setState() everywhere else

    this.state = {
      phone: { id: "", name: "", price: "" },
      shouldRedirect: false
    };

    this.setPhoneState = this.setPhoneState.bind(this);
    this.savePhone = this.savePhone.bind(this);
  }

  // if I dont't bind, this is undeifned
  //https://reactjs.org/docs/handling-events.html
  //You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
  setPhoneState = function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.phone[field] = value;
    this.setState({ phone: this.state.phone });
  };

  savePhone = function(event) {
    event.preventDefault();
    PhoneApi.savePhone(this.state.phone);
    toastr.success("Phone saved");
    this.setState({ shouldRedirect: true });
  };

  render() {
    return this.state.shouldRedirect ? (
      <Redirect to={"/phones"} />
    ) : (
      <div>
        <h1>Gérer les smartphones</h1>
        <PhoneForm
          phone={this.state.phone}
          onChange={this.setPhoneState}
          onSave={this.savePhone}
        />
      </div>
    );
  }
}

export default ManagePhonePage;

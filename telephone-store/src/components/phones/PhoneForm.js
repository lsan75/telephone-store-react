import React, { PropTypes } from "react";
import Input from "../common/TextInput";
class PhoneForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Gérer un smartphone</h1>
        <label htmlFor="name">Nom</label>
        <Input
          name="name"
          label="nom"
          className="form-control"
          value={this.props.phone.name}
          onChange={this.props.onChange}
        />

        <Input
          name="price"
          label="prix"
          className="form-control"
          value={this.props.phone.price}
          onChange={this.props.onChange}
        />

        <input
          type="submit"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave}
        />
      </form>
    );
  }
}

export default PhoneForm;

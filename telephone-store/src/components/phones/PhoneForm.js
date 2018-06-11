import React, { PropTypes } from "react";

class PhoneForm extends React.Component {

    render(){
        return (<form>
            <h1>Gérer un smartphone</h1>
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" 
            onChange={this.props.onChange}
            value={this.props.phone.name}/>

            <input type="submit" value="Save" className="btn btn-default"/>
        </form>);
    }

}

export default PhoneForm;
import React from 'react';
class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeState(event) {
    this.setState({ state: event.target.value });
  }
  handleChangeZip(event) {
    this.setState({ zip: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.address);
    this.props.infoSubmitted('name: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChangeName}
          ></input>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          ></input>
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChangeAddress}
          ></input>
          <input
            name="city"
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChangeCity}
          ></input>
          <input
            name="state"
            type="text"
            placeholder="State"
            value={this.state.state}
            onChange={this.handleChangeState}
          ></input>
          <input
            name="zip"
            type="text"
            placeholder="Zipcode"
            value={this.state.zip}
            onChange={this.handleChangeZip}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;

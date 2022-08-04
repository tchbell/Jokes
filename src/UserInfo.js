import React from 'react';
class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      email: '',
      lastName: '',
      firstName: '',
      state: '',
      terms: false,
      termsEmail: false,
      zip: '',
    };

    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleChangelastName = this.handleChangelastName.bind(this);
    this.handleChangefirstName = this.handleChangefirstName.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeTerms = this.handleChangeTerms.bind(this);
    this.handleChangeTermsEmail = this.handleChangeTermsEmail.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitUserInfo = this.submitUserInfo.bind(this);
  }

  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }
  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangelastName(event) {
    this.setState({ lastName: event.target.value });
  }
  handleChangefirstName(event) {
    this.setState({ firstName: event.target.value });
  }
  handleChangeState(event) {
    this.setState({ state: event.target.value });
  }
  handleSubmit(event) {
    this.props.infoSubmitted('name: ' + this.state.name);
    event.preventDefault();
  }
  handleChangeTerms(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleChangeTermsEmail(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleChangeZip(event) {
    this.setState({ zip: event.target.value });
  }

  // using preventDefault is not allowing us to access state
  submitUserInfo(event) {
    event.preventDefault();

    let body = {
      profile: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      },
      data: {
        joke: '',
        answer: '',
      },
    };
    this.props.infoSubmitted(body);
  }

  render() {
    return (
      <div>
        <div className="stars">
          <p className="starOne">
            Are you a <br /> mountain?
          </p>
          <p className="starTwo">
            Cuz You're <br /> Hill-arous!
          </p>
        </div>
        <p>
          <i>Now, </i> enter in you information below!
        </p>
        <form className="userForm row" onSubmit={this.submitUserInfo}>
          <div className="col-6">
            {' '}
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChangefirstName}
              required
            ></input>
          </div>
          <div className="col-6">
            {' '}
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChangelastName}
              required
            ></input>
          </div>
          <div className="col-12">
            {' '}
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmail}
              required
            ></input>
          </div>
          <div className="col-12">
            {' '}
            <input
              name="addressOne"
              type="text"
              placeholder="Address Line 1"
              value={this.state.address}
              onChange={this.handleChangeAddress}
              required
            ></input>
          </div>
          <div className="col-6 col-md-4">
            {' '}
            <input
              name="city"
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleChangeCity}
              required
            ></input>
          </div>
          <div className="col-6 col-md-4">
            {' '}
            <input
              name="state"
              type="text"
              placeholder="State"
              value={this.state.state}
              onChange={this.handleChangeState}
              required
            ></input>
          </div>
          <div className="col-12 col-md-4">
            {' '}
            <input
              name="zip"
              type="text"
              placeholder="Zipcode"
              value={this.state.zip}
              onChange={this.handleChangeZip}
              required
            ></input>
          </div>
          <div className="col-12">
            <label>
              <a href="/your-jokes/terms-and-conditions" target="_blank">
                Agree to terms and conditions
              </a>
              <input
                name="terms"
                type="checkbox"
                defaultValue={false}
                checked={this.state.terms}
                onChange={this.handleChangeTerms}
                required
              />
            </label>
          </div>
          <div className="col-12">
            <label>
              Agree to recieve marketing and promotional emails
              <input
                name="termsEmail"
                type="checkbox"
                defaultValue={false}
                checked={this.state.termsEmail}
                onChange={this.handleChangeTermsEmail}
                required
              />
            </label>
          </div>
          <div className="col-12">
            {' '}
            <button className="reverse" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInfo;

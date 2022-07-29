import React from 'react';
class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressOne: '',
      addressTwo: '',
      city: '',
      email: '',
      name: '',
      state: '',
      terms: false,
      zip: '',
    };

    this.handleChangeAddressOne = this.handleChangeAddressOne.bind(this);
    this.handleChangeAddressTwo = this.handleChangeAddressTwo.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    // this.handleChangeTerms = this.handleChangeTerms(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAddressOne(event) {
    this.setState({ addressOne: event.target.value });
  }

  handleChangeAddressTwo(event) {
    this.setState({ addressTwo: event.target.value });
  }
  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeState(event) {
    this.setState({ state: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state.address);
    this.props.infoSubmitted('name: ' + this.state.name);
    event.preventDefault();
  }
  // handleChangeTerms(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value,
  //   });
  // }
  handleChangeZip(event) {
    this.setState({ zip: event.target.value });
  }

  // using preventDefault is not allowing us to access state
  submitUserInfo(event) {
    console.log(this.state);
    event.preventDefault();
    // let body = {
    //   profile: {
    //     firstName: this.state.name.split('')[0],
    //     lastName: this.state.name.split('')[1],
    //     gender: '',
    //     email: this.state.email,
    //     address: this.state.addressOne,
    //     city: this.state.city,
    //     state: this.state.state,
    //     zip: this.state.zip,
    //     phones: {
    //       number: '',
    //     },
    //   },
    //   data: {
    //     joke: '',
    //     answer: '',
    //   },
    // };
    // console.log(body);
  }

  render() {
    return (
      <div>
        <form className="userForm" onSubmit={this.submitUserInfo}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChangeName}
            className="input-half"
          ></input>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            className="input-half"
          ></input>

          <input
            name="addressOne"
            type="text"
            placeholder="Address Line 1"
            value={this.state.addressOne}
            onChange={this.handleChangeAddressOne}
            className="input-full"
          ></input>

          <input
            name="addressTwo"
            type="text"
            placeholder="Address Line 2"
            value={this.state.addressTwo}
            onChange={this.handleChangeAddressTwo}
            className="input-full"
          ></input>

          <input
            name="city"
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChangeCity}
            className="input-full"
          ></input>

          <input
            name="state"
            type="text"
            placeholder="State"
            value={this.state.state}
            onChange={this.handleChangeState}
            className="input-third"
          ></input>

          <input
            name="zip"
            type="text"
            placeholder="Zipcode"
            value={this.state.zip}
            onChange={this.handleChangeZip}
            className="input-third"
          ></input>

          {/* <label>
            <input name="terms" type="checkbox" onChange={this.handleTerms} />
            Agree to terms and conditions
          </label> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;

import React from 'react';
class JokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', joke: '' };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeJoke = this.handleChangeJoke.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeJoke(event) {
    this.setState({ joke: event.target.value });
  }

  handleSubmit(event) {
    console.log(`Joke: ${this.state.joke},  Email: ${this.state.email}`);
    this.props.jokeSubmit(this.state.joke);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Submit Your Joke:
          <textarea value={this.state.joke} onChange={this.handleChangeJoke} />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default JokeForm;

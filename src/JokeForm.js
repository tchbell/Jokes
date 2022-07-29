import React from 'react';
class JokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { punchline: '', joke: '' };

    this.handleChangePunchLine = this.handleChangePunchLine.bind(this);
    this.handleChangeJoke = this.handleChangeJoke.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangePunchLine(event) {
    this.setState({ punchline: event.target.value });
  }
  handleChangeJoke(event) {
    this.setState({ joke: event.target.value });
  }

  handleSubmit(event) {
    this.props.jokeSubmit({
      joke: this.state.joke,
      punchline: this.state.punchline,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>
          It's time to put your funny bone to the test! Submit your joke and
          punchline below in 50 characters or less.
        </p>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            The Setup
            <textarea
              value={this.state.joke}
              onChange={this.handleChangeJoke}
            />
          </label>

          <label>
            The Punchline
            <input
              type="text"
              value={this.state.punchline}
              onChange={this.handleChangePunchLine}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
        <h2>Need Some Punny Inspiration?</h2>
        <button className="reverse">Read A Random Joke</button>
      </div>
    );
  }
}

export default JokeForm;

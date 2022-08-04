import React from 'react';
class JokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      punchline: '',
      joke: '',
      prompt: '',
      promptVisible: false,
    };

    this.handleChangePunchLine = this.handleChangePunchLine.bind(this);
    this.handleChangeJoke = this.handleChangeJoke.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.togglePrompt = this.togglePrompt.bind(this);
  }

  // componentDidMount() {
  //   fetch('http://localhost:8080/api/joke_resource')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ prompt: `${data.joke} ${data.answer}` }));
  // }

  getJoke() {
    fetch('http://localhost:8080/api/joke_resource')
      .then((response) => response.json())
      .then((data) => this.setState({ prompt: `${data.joke} ${data.answer}` }));
  }

  togglePrompt() {
    this.getJoke();
    this.setState((prevState) => ({
      promptVisible: true,
    }));
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

        <form className="form jokeForm" onSubmit={this.handleSubmit}>
          <label className="setup">
            The Setup
            <input
              maxLength={50}
              value={this.state.joke}
              onChange={this.handleChangeJoke}
              required
            />
          </label>

          <label className="punchline">
            The Punchline
            <input
              type="text"
              value={this.state.punchline}
              onChange={this.handleChangePunchLine}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
        <h2>Need Some Punny Inspiration?</h2>
        <button onClick={this.togglePrompt} className="reverse">
          Read A Random Joke
        </button>

        {this.state.promptVisible ? <p>{this.state.prompt}</p> : null}
      </div>
    );
  }
}

export default JokeForm;

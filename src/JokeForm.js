import React from 'react';
class JokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      punchline: '',
      joke: '',
      prompt:
        'Praesent vitae vulputate arcu, et tempor nisi. In euismod vel tortor sed efficitur. Integer ut lectus in est iaculis lobortis at at odio',
      promptVisible: false,
    };

    this.handleChangePunchLine = this.handleChangePunchLine.bind(this);
    this.handleChangeJoke = this.handleChangeJoke.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.togglePrompt = this.togglePrompt.bind(this);
  }

  togglePrompt() {
    this.setState((prevState) => ({
      promptVisible: !prevState.promptVisible,
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
          Nam molestie mi in nisl euismod efficitur. Phasellus convallis
          lobortis nunc, at gravida ante egestas at.
        </p>

        <form className="form jokeForm" onSubmit={this.handleSubmit}>
          <label className="setup">
            An Input
            <input
              maxLength={50}
              value={this.state.joke}
              onChange={this.handleChangeJoke}
              required
            />
          </label>

          <label className="punchline">
            Another Input
            <input
              type="text"
              value={this.state.punchline}
              onChange={this.handleChangePunchLine}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
        <h2>Click button to togggle</h2>
        <button onClick={this.togglePrompt} className="reverse">
          Click me
        </button>

        {this.state.promptVisible ? <p>{this.state.prompt}</p> : null}
      </div>
    );
  }
}

export default JokeForm;

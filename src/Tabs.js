import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import JokeForm from './JokeForm';
import UserInfo from './UserInfo';
import Shop from './Shop';

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 'home', joke: '', punchline: '', userInfo: '' };

    this.handleSelect = this.handleSelect.bind(this);
    this.userInfoSubmitted = this.userInfoSubmitted.bind(this);
  }

  handleSelect(key) {
    this.setState({ key });
  }

  jokeSubmitted = (data) => {
    this.setState({ key: 'info', joke: data.joke, punchline: data.punchline });
  };

  userInfoSubmitted = (data) => {
    this.setState({ key: 'shop', userInfo: data.profile });


    fetch('http://localhost:8080/api/joke_resource', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        profile: {
          firstName: this.state.userInfo.firstName,
          lastName: this.state.userInfo.lastName,
          gender: '',
          email: this.state.userInfo.email,
          address: this.state.userInfo.address,
          city: this.state.userInfo.city,
          state: this.state.userInfo.state,
          zip: this.state.userInfo.zip,
          phones: {
            number: '',
          },
        },
        data: {
          joke: this.state.joke,
          answer: this.state.punchline,
        },
      }),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="joke-container">
          <h1>
            Your Joke <br /> Our Wrapper
          </h1>
          <Tabs
            defaultActiveKey="home"
            activeKey={this.state.key}
            id=""
            className=""
          >
            <Tab eventKey="home" title="Home">
              <div className="container">
                {' '}
                <h2>Calling All Jokesters!</h2>
                <p>
                  Do you have what it takes to write a great Laffy Taffy joke?
                </p>
                <p>
                  101( lol) winners will have their jokes featured on our
                  wrappers and 1 lucky jokester will recieve a $5,000 prize!
                  Submit your joke for a chance to win!
                </p>
                <button onClick={() => this.handleSelect('joke')}>
                  Lets Go!
                </button>
                <a href="#">Terms and Conditions</a>
              </div>
            </Tab>
            <Tab eventKey="joke" title="Joke">
              <div className="container">
                {' '}
                <JokeForm jokeSubmit={this.jokeSubmitted} />
              </div>
            </Tab>
            <Tab eventKey="info" title="userInfo">
              <div className="container">
                {' '}
                <UserInfo infoSubmitted={this.userInfoSubmitted} />
              </div>
            </Tab>
            <Tab eventKey="shop" title="Shop">
              <div className="container">
                {' '}
                <Shop />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default TabsComponent;

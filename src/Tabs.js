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
  }

  handleSelect(key) {
    this.setState({ key });
  }

  jokeSubmitted = (data) => {
    console.log(data);
    this.setState({ key: 'info', joke: data.joke, punchline: data.punchline });
    setTimeout(() => {
      console.log(this.state);
    }, 1000);
    console.log(this.state);
  };

  userInfoSubmitted = (data) => {
    console.log(data);
    this.setState({ key: 'shop' });
        // fetch('https://mywebsite.example/endpoint/', {
    //   method: 'POST',
    //   headers: {
    //     // Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     profile: {
    //       firstName: this.state.name.split('')[0],
    //       lastName: this.state.name.split('')[1],
    //       gender: '',
    //       email: this.state.email,
    //       address: this.state.addressOne,
    //       city: this.state.city,
    //       state: this.state.state,
    //       zip: this.state.zip,
    //       phones: {
    //         number: '',
    //       },
    //     },
    //     data: {
    //       joke: '',
    //       answer: '',
    //     },
    //   }),
    // });
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

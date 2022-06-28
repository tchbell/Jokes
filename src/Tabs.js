import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import JokeForm from './JokeForm';
import UserInfo from './UserInfo';
import Shop from './Shop';

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 'home' };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({ key });
  }

  jokeSubmitted = (data) => {
    console.log(data);
    this.setState({ key: 'info' });
  };

  userInfoSubmitted = (data) => {
    console.log(data);
    this.setState({ key: 'shop' });
  };

  render() {
    return (
      <div>
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
                101( lol) winners will have their jokes featured on our wrappers
                and 1 lucky jokester will recieve a $5,000 prize! Submit your
                joke for a chance to win!
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
        ;
      </div>
    );
  }
}

export default TabsComponent;

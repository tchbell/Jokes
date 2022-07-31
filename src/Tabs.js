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
    console.log(this.state.userInfo);
    setTimeout(() => {
      console.log({
        profile: this.state.userInfo,
        data: { first: this.state.joke, second: this.state.punchline },
      });
    }, 1000);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="projectContainer">
          <div className="joke-container">
            <h1>
              Big Header <br /> Goes Here
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
                  <div className="jokestersContainer">
                    <h2>Lorem ipsum dolor</h2>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <p>
                    Praesent leo turpis, gravida in sem sed, cursus lobortis
                    sapien. Aliquam dictum, sem quis imperdiet luctus, justo ex
                    fermentum diam, ut bibendum leo enim at diam. Mauris in
                    tempus eros, sed rhoncus est. Maecenas condimentum, lacus
                    non sollicitudin porttitor, velit lectus sollicitudin lorem,
                    sit amet sollicitudin dolor sem malesuada erat. In facilisis
                    ipsum vehicula augue elementum, ut finibus eros dictum.
                  </p>
                  <button onClick={() => this.handleSelect('joke')}>
                    Lets Go!
                  </button>
                  <a href="#">Maecenas condimentum</a>
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
      </div>
    );
  }
}

export default TabsComponent;

import React from 'react';
class Shop extends React.Component {
  render() {
    return (
      <div>
        <div className="comedianContainer">
          <h2>
            Do you like <br />
            or not like
          </h2>
          <p>Ok sounds good</p>
        </div>
        <div>
          <img />
        </div>

        <h3>Follow Social media</h3>
        <div className="row social-media">
          <div className="col-3">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src={require('./assets/images/twitter.png')}
                alt=""
              ></img>
            </a>
          </div>
          <div className="col-3">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src={require('./assets/images/facebook.png')}
                alt=""
              ></img>
            </a>
          </div>
          <div className="col-3">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src={require('./assets/images/instagram.png')}
                alt=""
              ></img>
            </a>
          </div>
          <div className="col-3">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src={require('./assets/images/tiktok.png')}
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;

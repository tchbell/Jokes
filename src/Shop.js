import React from 'react';
class Shop extends React.Component {
  render() {
    return (
      <div>
        <div className="comedianContainer">
          <img
            className="img-fluid"
            src={require('./assets/images/laugh.png')}
            alt=""
          ></img>
          <h2>
            Are you a comedian <br />
            or a comedi-aint
          </h2>
          <p>We'll be the judge of that!</p>
        </div>
        <div>
          <img
            className="img-fluid"
            src={require('./assets/images/packages.png')}
            alt=""
          />
        </div>
        <p className='while'>
          While you wait, keep the Laffs rolling and shop for Laffy Taffy here.
        </p>
        <a
          href="https://www.laffytaffy.com/where-to-buy"
          rel="noreferrer"
          target="_blank"
        >
          <button>Shop Laffy Taffy</button>
        </a>

        <h3>Follow the King of Dad Jokes (Us) on Social Media</h3>
        <div className="row social-media">
          <div className="col-3">
            <a
              href="https://twitter.com/LaffyTaffy"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src={require('./assets/images/twitter.png')}
                alt=""
              ></img>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.facebook.com/laffytaffy/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src={require('./assets/images/facebook.png')}
                alt=""
              ></img>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.instagram.com/laffytaffy"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src={require('./assets/images/instagram.png')}
                alt=""
              ></img>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.tiktok.com/@laffytaffy"
              target="_blank"
              rel="noreferrer"
            >
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

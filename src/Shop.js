import React from 'react';
class Shop extends React.Component {
  render() {
    return (
      <div>
        <h2>Are you a comedian or a comedi-aint</h2>
        <p>We'll be the judge of that!</p>
        <div>
          <img />
        </div>
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
              Twitter
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.facebook.com/laffytaffy/"
              target="_blank"
              rel="noreferrer"
            >
              facebook
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.instagram.com/laffytaffy"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.tiktok.com/@laffytaffy"
              target="_blank"
              rel="noreferrer"
            >
              Tiktok
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;

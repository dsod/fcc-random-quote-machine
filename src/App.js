import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-gradient-dark">
        <div className="row vh-100 align-items-center justify-content-center">
          <div
            className="card border-dark col-10 p-4"
            style={{ maxWidth: '500px' }}
            id="quote-box"
          >
            <div className="card-body">
              <h2 id="text">
                "
                <small className="text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </small>
                "
              </h2>
              <p className="lead text-right" id="author">
                Author
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href="https://twitter.com/intent/tweet"
                  id="tweet-quote"
                  title="Post quote on twitter!"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <button
                  className="btn btn-link p-0"
                  type="button"
                  id="new-quote"
                  title="Next quote"
                >
                  <i class="fas fa-angle-double-right fa-2x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return <div>Hello, {name}</div>;
// };

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: true };
  }

  handleClick = () => {
    // Change clicked state
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    // Build and return HTML
    console.log(this);
    return (
      <div
        className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}
      >
        Hello, {this.props.name}{' '}
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Jasmine" />, root);
}

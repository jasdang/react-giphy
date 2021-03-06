import React, {Component} from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
    };
  }
  render() {
    const src = `https://media.giphy.com/media/${this.state.id}/giphy.gif`;
    return <img src={src} alt='' className='gif' />;
  }
}

export default Gif;

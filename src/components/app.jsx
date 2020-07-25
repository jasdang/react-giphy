import React, {Component} from 'react';
import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif_list';
const keys = require('../../keys.json');
const giphy = require('giphy-api')(keys['GIPHY-API']);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'QWMTY0yBemVRV9A26q',
    };
  }

  search = (keyword) => {
    giphy.search({q: keyword, rating: 'g', limit: 10}, (err, res) => {
      // Res contains gif data!
      this.setState({gifs: res.data});
    });
  };

  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar searchFunction={this.search} />
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList className='gif-list' gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

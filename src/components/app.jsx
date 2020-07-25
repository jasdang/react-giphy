import React, {Component} from 'react';
import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'QWMTY0yBemVRV9A26q',
    };
  }
  render() {
    const gifs = [{id: '3rgXBroGwOuAScNQfm'}, {id: 'dZRI96NcCiAvjWEKBR'}];
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
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

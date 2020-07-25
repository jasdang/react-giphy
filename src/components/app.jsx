import React, {Component} from 'react';
import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [{id: '3rgXBroGwOuAScNQfm'}, {id: 'dZRI96NcCiAvjWEKBR'}];
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className='selected-gif'>
            <Gif id='QWMTY0yBemVRV9A26q' />
          </div>
        </div>
        <div className='right-scene'>
          <GifList className='gif-list' gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;

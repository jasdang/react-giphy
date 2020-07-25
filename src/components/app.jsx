import React, {Component} from 'react';
import SearchBar from './search-bar';
import Gif from './gif';

class App extends Component {
  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <Gif />
        </div>
        <div className='right-scene'></div>
      </div>
    );
  }
}

export default App;

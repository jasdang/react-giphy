import React, {Component} from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    const keyword = event.currentTarget.value;
    this.props.searchFunction(keyword);
  };
  render() {
    return (
      <input
        type='text'
        className='form-control form-search'
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;

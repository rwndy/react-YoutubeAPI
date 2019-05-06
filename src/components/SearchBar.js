import React, {Component} from 'react';

class SearchBar extends Component {
  state = { Input: ''};

  onInputChange = e => {
    this.setState({ Input: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.Input);
  };


  render() {
    return (
      <div className="search-bar" style={{marginTop: 30}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input type="text"
            placeholder="Searching"
            value={this.state.Input}
            onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtubedata from './APIs/youtubedata';

class App extends Component {
  state = { videos: [] };

  SubmitInput = async Input => {
   const response = await youtubedata.get('/search', {
      params: {
        q: Input
      }
    });

    this.setState({videos: response.data.items});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.SubmitInput} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
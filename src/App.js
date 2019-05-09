import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtubedata from './APIs/youtubedata';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  SubmitInput = async Input => {
   const response = await youtubedata.get('/search', {
      params: {
        q: Input
      }
    });

    this.setState({videos: response.data.items});
  };

  onSelectVideo = (video) => {
    this.setState({selectedVideo: video});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.SubmitInput} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onSelectVideo={this.onSelectVideo}
        videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
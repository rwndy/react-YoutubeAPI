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
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column" style={{marginTop: '20px'}}>
              <VideoList 
              onSelectVideo={this.onSelectVideo}
              videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
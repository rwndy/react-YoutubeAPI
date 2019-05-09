import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const source = `http://www.youtube.com/embed/${video.id.videoId}`;

  return (
   
    <div style={{marginTop: '20px'}}>
      <div className="ui embed">
        <iframe title={video.snippet.title} src={source}/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  const listVideo = videos.map((video) => {
    return <VideoItem video={video}/>;
  });

  return (
    <div className="ui list">
      {listVideo}
    </div>
    );
};

export default VideoList;
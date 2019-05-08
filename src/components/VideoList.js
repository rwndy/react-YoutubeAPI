import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectVideo}) => {
  const listVideo = videos.map((video) => {
    return <VideoItem onSelectVideo={onSelectVideo} video={video}/>;
  });

  return (
    <div className="ui list">
      {listVideo}
    </div>
    );
};

export default VideoList;
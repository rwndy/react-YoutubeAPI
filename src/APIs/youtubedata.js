import axios from 'axios';

const KEY = 'AIzaSyBD7dNnhlPGx0EiC-dPg2tMxBmu4iJYfS8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
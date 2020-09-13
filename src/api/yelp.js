import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: { 
    Authorization: 
      'Bearer API_KEY_GOES_HERE'
  }
});


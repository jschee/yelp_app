import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {  
  const [results, setResults] = useState([]); // setting state for results. should return array of results
  const [errorMessage, setErrorMessage] = useState('')
  
  const searchApi = async (searchTerm) => {


    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses); // actual response from api
    } catch (err) {
      setErrorMessage('Something went wrong!')
    }
  };

  // searchApi('pasta')
  useEffect(() => {
    searchApi('italian')
  }, []) // use effect hook with empty array argument will only run a function once

  return [searchApi, results, errorMessage];
};
import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [results, setResults] = useState([])

  const searchApi = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'new york'
        }
      });
  
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong.');
    }
  }

  return [
    searchApi,
    errorMessage,
    results
  ]
}
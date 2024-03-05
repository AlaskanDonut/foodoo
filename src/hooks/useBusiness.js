import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [businessResult, setBusinessResult] = useState([])

  const businessSearchApi = async (id) => {
    try {
      const response = await yelp.get(`/${id}`, {
        method: 'GET',
        headers: { accept: 'application/json' }
      });
      
      setBusinessResult(response.data);
    } catch (err) {
      setErrorMessage('Something went wrong: ' + err);
    }
  }

  return [
    businessSearchApi,
    errorMessage,
    businessResult
  ]
}
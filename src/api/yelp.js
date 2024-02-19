import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 9SQA3KieKavCp1h1EEHjAd5B_bKKNHB1kFnojMtMYuwqT3UfH9IZ57dyiaD9-zaa1Swmkeay-3CuhLgrmCD6TGzM17Go63aCA8VAARfimmz7O0vTgErVLIl33QrNZXYx',
  }
})
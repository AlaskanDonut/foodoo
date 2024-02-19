import { useReducer, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// Components
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
// Contexts
import { BusinessesContext } from '../contexts/BusinessesContext';
// APIs
import yelp from '../api/yelp';

const businessesReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BUSINESS':
      return action.payload;
      console.log('add_business called')
      break;
    default:
      return null;
  }
}

export default function SearchScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [businesses, businessesDispatch] = useReducer(businessesReducer, [])

  const searchBusinesses = async () => {
    console.log(businesses[5]);
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'new york'
        }
      });
      console.log(response.data.businesses)
      businessesDispatch({ type: 'ADD_BUSINESS', payload: response.data.businesses })
    } catch (err) {
      setErrorMessage('Something went wrong.');
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSubmit={searchBusinesses}
      />
      <Text>We have founddd { businesses.length } results.</Text>
      <BusinessesContext.Provider value={businesses}>
        <BusinessList />
      </BusinessesContext.Provider>
      { errorMessage ? <Text>{errorMessage}</Text> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'column',
  },
});
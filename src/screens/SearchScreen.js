import { useReducer, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// Components
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
// Contexts
import { BusinessesContext } from '../contexts/BusinessesContext';
// Reducers
import { businessesReducer } from '../reducers/businessesReducer';
// Hooks
import useBusinessSearch from '../hooks/useBusinessSearch';
// APIs
import yelp from '../api/yelp';

export default function SearchScreen({ navigation }) {
  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [
    searchApi,
    errorMessage,
    results
  ] = useBusinessSearch();

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />
      { hasSearched ? <Text>Showing {businesses.length} results.</Text> : null }
      <BusinessesContext.Provider value={results}>
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
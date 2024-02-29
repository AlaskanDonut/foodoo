import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
// Contexts
import { BusinessesContext } from '../contexts/BusinessesContext';
// Hooks
import useBusinessSearch from '../hooks/useBusinessSearch';

export default function SearchScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [
    searchApi,
    errorMessage,
    results
  ] = useBusinessSearch();

  const filterByPrice = (items, price) => {
    return items.filter(business => business.price === price);
  }

  return (
    <View>
      <View style={[styles.container, { marginBottom: 20 }]}>
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onSubmit={() => searchApi(searchTerm)}
        />
      </View>
      <View style={styles.overflowContainer}>
        <BusinessesContext.Provider value={results}>
          <BusinessList title="Afforable" businesses={filterByPrice(results, '$')} />
          <BusinessList title="Reasonable" businesses={filterByPrice(results, '$$')} />
          <BusinessList title="Expensive" businesses={filterByPrice(results, '$$$')} />
        </BusinessesContext.Provider>
      </View>
      <View style={styles.container}>
        { errorMessage ? <Text>{errorMessage}</Text> : null }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'column',
  },
  overflowContainer: {
  }
});
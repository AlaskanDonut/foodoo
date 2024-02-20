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

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSubmit={() => searchApi(searchTerm)}
      />
      <BusinessesContext.Provider value={results}>
        <BusinessList title="Results" businesses={results} />
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
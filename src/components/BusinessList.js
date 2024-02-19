import { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
// Contexts
import { BusinessesContext } from '../contexts/BusinessesContext';
// Components
import BusinessCard from './BusinessCard';

export default function BusinessList(props) {
  const businesses = useContext(BusinessesContext);

  return (
    <View style={styles.container}>
      <Text>BusinessList</Text>
      <FlatList
        data={businesses}
        style={styles.listStyle}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={
          businesses.length === 0 ? null : <Text>Header</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity>
            <BusinessCard name={item.name} image={item.image_url} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  listStyle: {
    marginTop: 10,
  }
});
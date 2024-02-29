import { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
// Components
import BusinessCard from './BusinessCard';

export default function BusinessList({ title, businesses }) {

  return (
    <View style={styles.container}>
      <FlatList
        data={businesses}
        style={styles.list}
        keyExtractor={result => result.id}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={
          businesses.length > 0 ?
            <View style={styles.headerContainer}>
              <Text style={styles.headerPrimary}>{title}</Text>
              <Text style={styles.headerSecondary}>{businesses.length}</Text>
            </View> :
            null
        }
        horizontal={true}
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
    marginVertical: 20,
  },
  list: {
    marginTop: 10,
    backgroundColor: 'green'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'gray',
  },
  headerPrimary: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSecondary: {
    fontSize: 18,
  }
});
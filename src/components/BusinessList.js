import { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
// Components
import BusinessCard from './BusinessCard';

export default function BusinessList({ title, businesses }) {

  return (
    <View style={styles.container}>
      { businesses.length > 0 ?
        <>
          <View style={styles.headerContainer}>
              <Text style={styles.headerPrimary}>{title}</Text>
              <Text style={styles.headerSecondary}>{businesses.length}</Text>
          </View>
          <FlatList
            data={businesses}
            style={styles.list}
            keyExtractor={result => result.id}
            contentContainerStyle={{ gap: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <BusinessCard name={item.name} image={item.image_url} rating={item.rating} />
              </TouchableOpacity>
            )}
          />
        </> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // backgroundColor: 'gray',
    paddingLeft: 20,
  },
  headerPrimary: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSecondary: {
    fontSize: 18,
    bottom: 2,
    left: 4
  },
  list: {
    paddingLeft: 20,
    paddingVertical: 10,
    // backgroundColor: 'green'
  },
});
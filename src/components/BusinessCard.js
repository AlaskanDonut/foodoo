import { StyleSheet, Text, View, Image } from 'react-native';

export default function BusinessCard({ name, image, rating }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={ image ? { uri: image } : null}
        // defaultSource={require('../images/img.jpg')}
        resizeMode="cover"
      />
      <View style={styles.footer}>
        <Text
          style={styles.name}
          numberOfLines={1}
        >{name}</Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 140,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    alignContent: 'stretch',
    borderRadius: 10,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: '#000',
    shadowOpacity: .1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    flex: 1,
    backgroundColor: 'gray',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10,
  },
  name: {
    flex: 1,
    overflow: 'hidden'
  },
  rating: {
    marginRight: 10,
  }
})


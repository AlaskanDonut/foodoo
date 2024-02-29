import { StyleSheet, Text, View, Image } from 'react-native';

export default function BusinessCard({ name, image }) {
  return (
    <View style={styles.container} >
      <Image
        style={styles.image}
        source={{ uri: `${image}` }}
        defaultSource={require('../images/img.jpg')}
      />
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    alignContent: 'stretch',
    padding: 20,
    borderRadius: 10,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: '#000',
    shadowOpacity: .1,
  },
  image: {
    height: 20,
    alignContent: 'stretch',
  }
})


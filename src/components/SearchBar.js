import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({
  searchTerm,
  onSearchTermChange,
  onSubmit
}) {
  return (
    <View style={styles.container}>
      <EvilIcons
        name="search"
        size={18} color="#2e2e2e"
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder='Search near your location...'
        value={searchTerm}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onSearchTermChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 10,
    // Drop shadow
    shadowOffset: { width: 4, height: 4 },
    shadowColor: 'black',
    shadowOpacity: .3,
  },
  iconStyle: {
    marginHorizontal: 14,
    alignSelf: 'center',
  },
  textInputStyle: {
    flex: 1,
  }
});
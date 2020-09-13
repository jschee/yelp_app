import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Octicons style={styles.icon} name="search" size={20} color="black" />      
      <TextInput style={styles.searchInput}
        placeholder="Search..."
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    borderWidth: 0,
    marginHorizontal: 10,
    marginVertical: 10,
    height: 45,
    borderRadius: 8,
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 15,
    alignSelf: 'center'
  },
  searchInput: {
    flex: 1
  }
});

export default SearchBar;



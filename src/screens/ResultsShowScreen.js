import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null); // second, add restaurant result state
  const id = navigation.getParam('id'); // first, getting id passed from parent component

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }; //third, create helper method to make api call
  useEffect(() => {
    getResult(id);
  }, []); //finally, only call the helper once

  if(!result) {
    return null;
  } //do not show anything on the screen if result is null

  return (
    <View style={{flex: 1}}>
      <Text>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
  }
});

export default ResultsShowScreen;
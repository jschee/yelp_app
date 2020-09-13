import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}}/>
      <Text ellipsizeMode='tail' numberOfLines={1} style={styles.name}>{result.name}</Text>
      <Text style={{color: 'gray'}}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    borderColor: 'gray',
  },
  image: {
    width: 165,
    height: 165,
    borderRadius: 5,
    marginBottom: 5
  },
  name: {
    width: 165,
    fontWeight: 'bold',
  }
});

export default ResultsDetail
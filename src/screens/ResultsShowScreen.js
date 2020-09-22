import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  Image,
} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <Image style={styles.image} source={{ uri: item }} />
            </ScrollView>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 5,
  },
  image: {
    borderRadius: 5,
    height: 500,
    width: 350,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default ResultsShowScreen;

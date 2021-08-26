import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            result.image_url ||
            "https://restaurant.opentable.com/news/wp-content/uploads/sites/100/2016/03/ek_graciasmadre_1016-2-1300x866.jpg",
        }}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    borderRadius: 4,
    height: 120,
    width: 250,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;

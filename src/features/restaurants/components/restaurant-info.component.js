import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg",
    ],
    address = "100 some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});

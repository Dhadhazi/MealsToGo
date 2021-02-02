import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const CardContainer = styled(Card)`
  background-color: white;
`;

const Cover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
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
    <CardContainer elevation={5}>
      <Cover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </CardContainer>
  );
}

import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}; ;
`;

const Cover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
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

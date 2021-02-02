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

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
}

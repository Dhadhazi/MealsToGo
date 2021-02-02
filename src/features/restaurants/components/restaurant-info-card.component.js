import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}; ;
`;

const Cover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: 0 ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RatingStatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

const ClosedText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  margin-right: ${(props) => props.theme.space[3]};
`;

const Icon = styled.Image`
  margin-left: ${(props) => props.theme.space[3]};
  width: 15px;
  height: 15px;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg",
    ],
    address = "100 some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <RatingStatusContainer>
          <Rating>
            {ratingArray.map((r, index) => (
              <SvgXml xml={star} width={20} height={20} key={`star-${index}`} />
            ))}
          </Rating>
          <Status>
            {isClosedTemporarily && (
              <ClosedText variant="label">CLOSED TEMPORARILY</ClosedText>
            )}

            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </Status>
        </RatingStatusContainer>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
}

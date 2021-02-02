import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const Container = styled.View`
  flex: 1;
`;

const SearchBarContainer = styled.View`
  padding: 16px;
  background-color: white;
`;

const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Container>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBarContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </Container>
  );
}

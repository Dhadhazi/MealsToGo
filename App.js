import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <RestaurantsScreen />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    padding: 16,
    backgroundColor: "white",
  },
  listContainer: {
    flex: 2,
    padding: 16,
    backgroundColor: "blue",
  },
});

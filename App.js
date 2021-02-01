import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.searchBar}>
        <Text>Search</Text>
      </View>
      <View style={styles.listContainer}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchBar: {
    padding: 16,
    backgroundColor: "green",
  },
  listContainer: {
    flex: 2,
    padding: 16,
    backgroundColor: "blue",
  },
});
